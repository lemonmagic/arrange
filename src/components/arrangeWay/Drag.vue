<!--
 * @FileDescription: 使用拖拽方式进行服务编排步骤二的接口选择
 * @Author: Lemon_Magic
 * @Date: 2022-03-13 20:10:12
 -->
 <!--
  * @ModifyContent: 新增cursor、Tooltip，css优化
  * @LastEditors: Lemon_Magic
  * @LastEditTime: 2022-03-14 16:13:38
  -->
<template>
  <!-- TODO:
    - 已选接口中的删除问题，拖出已选接口范围删除|拖回可选接口删除√|安置垃圾桶图标专门删除
    - 临时保存功能
    - 进入步骤二但未选择接口时无法获取已选接口点击元素的值
  -->
  <!-- 使用 vue.draggable 组件库实现接口间拖拽 -->
  <!-- 使用 clone 属性实现从左侧可选接口中拖拽复制对应接口到已选接口中 -->
  <!-- 使用 filter 设置 forbid 类保持已选列表中的必要接口不能拖动 -->
  <!-- 使用 cursor 属性鼠标移动到接口上方与选中拖动时，光标与接口模块相应变化 -->
  <!-- 已选接口拖回可选接口不允许停靠，保证可选接口状态不新增不变化 -->
  <!-- 在移动已选接口时回调 onMoveuse，当接口移动至可选接口列表时设置 delete 属性为真并不允许停靠，拖拽完成回调 onEnd 时删除该接口数据 -->
  <!-- 使用 Tooltip 组件实现移动光标至可选接口的某一接口上时显示对应接口的相关介绍 -->
  <!-- 为 Tooltip 设置 openDelay 打开延时，hide-after 关闭延时 -->
  <!-- 使用 drawer 组件，在点击已选接口时弹出抽屉进行对应接口的参数配置，注意不同接口的可配置会不同 -->
  <!-- 使用 vuex 和 keep-alive, 在该页面失去焦点回调 deactivated 时存放已选接口列表的数据 -->
  <!-- Q:点击已选接口弹出抽屉怎么获取点击对象的属性？
    - A:在已选接口列表循环渲染DOM后添加点击事件获取点击对象的属性
  -->
  <!-- Q:在数组中嵌套对象，怎么通过对象某一属性在数组中找到该对象 
    - A:1.遍历数组比对属性 2.ES6find方法list.find(item => item.attr == attr)
  -->
  <!-- Q:动态title使用点击对象的name属性时报错Error in render: "TypeError: Cannot read properties of undefined 
    - A:挂载抽屉时点击对象为空，所以title中的属性未被定义；可先在data中初始化title为空数组，后续在点击事件中为title赋值
  -->
  <!-- Q:重复从可选接口中选择已选择过的接口放入已选列表，怎么禁止
    - A:通过回调onMove过滤掉已经在已选接口列表里的接口，禁止它的拖动行为
  -->
  <div id="drag">
    <div id="columned" class="column">
      <div class="column-header">可选接口</div>
      <draggable
        id="APIed"
        class="column-content"
        v-model="myArray1"
        chosenClass="chosen"
        forceFallback="true"
        animation="300"
        v-bind="{ group: { name: 'API', pull: 'clone' } }"
        @start="onStart"
        @end="onEnd"
        :move="onMoveed"
      >
        <transition-group tag="div">
          <el-tooltip
            class="item itemed"
            effect="dark"
            placement="top-end"
            v-for="element in myArray1"
            :open-delay="500"
            :hide-after="3000"
            :key="element.id"
            :content="element.info"
          >
            <div>{{ element.name }}</div>
          </el-tooltip>
        </transition-group>
      </draggable>
    </div>
    <!-- v-model绑定myArray2数据
      - animation动画时间
      - @start @end 设置开始/结束拖动时的回调
      - filter过滤设置.forbid类不允许拖动
    -->
    <div id="columnuse" class="column">
      <div class="column-header">已选接口</div>
      <draggable
        id="APIuse"
        class="column-content"
        v-model="myArray2"
        chosenClass="chosen"
        forceFallback="true"
        group="API"
        animation="300"
        @start="onStart"
        @end="onEnd"
        :move="onMoveuse"
        filter=".forbid"
      >
        <transition-group tag="div">
          <div
            :class="
              element.id == 0 ||
              element.id == 1 ||
              element.id == 2 ||
              element.id == 3 ||
              element.id == 10
                ? 'item itemuse forbid'
                : 'item itemuse'
            "
            v-for="element of myArray2"
            :key="element.id"
            @click="nowClick(element.id)"
            @dblclick="openDialog"
          >
            <span>{{ element.name }}</span>
          </div>
        </transition-group>
      </draggable>
    </div>
    <el-drawer
      :title="selectAPI.name"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ttb"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form>
          <el-form-item :label="selectAPI.form.name" label-position="left">
            <el-checkbox-group v-model="selectAPI.form.value">
              <el-checkbox-button :label="item" v-for="item of selectAPI.form.arg">{{item}}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()">确 认</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Drag",
  props: ["updateTemp"],
  data() {
    return {
      drag: false,
      dialog: false,
      loading: false,
      delete: false,
      timer: null,
      selectAPI: {
        id: 0,
        name: "我是默认的",
        info: "还没有被赋值勒，俺也不晓得咋回事儿",
        form: {
          name: "无配置项",
          arg: ["1", "2", "3"],
          value: [],
        },
      },
      //定义要被拖拽对象的数组
      myArray1: [
        {
          id: 4,
          name: "证件审查接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "需要证件",
            arg: ["身份证", "护照", "低收入"],
            value: [],
          },
        },
        {
          id: 5,
          name: "利息计算接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 6,
          name: "日志录入接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 7,
          name: "用户标签控制接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 8,
          name: "地域购买控制接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 9,
          name: "白名单购买控制接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 0,
          name: "用户信息检验接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 1,
          name: "库存锁定接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 2,
          name: "库存释放接口",
          info: "订单取消或无操作指定时间后的释放接口",
          form: {
            name: "无响应释放时长(分钟)",
            arg: [1, 3, 5, 10, 15, 30],
            value: [],
          },
        },
        {
          id: 3,
          name: "库存更新接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 10,
          name: "用户支付接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "可使用的支付方式",
            arg: ["本行银行卡", "支付宝", "微信", "云闪付"],
            value: [],
          },
        },
      ],
      myArray2: [
        {
          id: 0,
          name: "用户信息检验接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无可配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 1,
          name: "库存锁定接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 2,
          name: "库存释放接口",
          info: "订单取消或无操作指定时间后的释放接口",
          form: {
            name: "无响应释放时长(分钟)",
            arg: [1, 3, 5, 10, 15, 30],
            value: [],
          },
        },
        {
          id: 3,
          name: "库存更新接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "无需配置选项",
            arg: [],
            value: [],
          },
        },
        {
          id: 10,
          name: "用户支付接口",
          info: "为用户点击购买生成订单时服务的接口",
          form: {
            name: "可使用的支付方式",
            arg: ["本行银行卡", "支付宝", "微信", "云闪付"],
            value: [],
          },
        },
      ],
    };
  },
  methods: {
    //开始拖拽事件
    onStart(e) {
      this.drag = true;
      // console.log(e);
    },
    //拖拽结束事件
    onEnd(e) {
      if (this.delete) {
        this.myArray2.splice(e.oldIndex, 1);
      }
      // console.log(e);
      this.drag = false;
      this.delete = false;
    },
    onMoveed(e, originalEvent) {
      // console.log(e);
      // console.log(originalEvent);
      for (let item of this.myArray2) {
        if (item.id == e.draggedContext.element.id) {
          // console.log("这个接口已经选过了");
          return false;
        }
      }
      return true;
    },
    onMoveuse(e) {
      // if (e.relatedContext.element.id == 1) return false;
      // console.log(e.relatedContext.list);
      if (e.relatedContext.list.length == this.myArray1.length)
        this.delete = true;
      else this.delete = false;
      // console.log(this.delete);
      return false;
    },
    handleClose(done) {
      // 注意此处需引入 MessageBox 且该组件引入方式有所不同，详见elementui/index.js
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    nowClick(id) {
      console.log(id);
      this.selectAPI = this.myArray2.find((item) => item.id == id);
      console.log(id, this.selectAPI);
    },
    openDialog() {
      this.dialog = true;
    },
  },
  components: {
    draggable,
  },
  watch: {
    updateTemp() {
      if (this.updateTemp == 2)
        this.$store.commit("updateTempAPI", this.myArray2);
    },
  },
  // deactivated() {
  //   this.$store.commit("updateTempAPI", this.myArray2);
  // },
};
</script>

<style scoped>
/* 最外层组件div */
#drag {
  /* border: 1px black solid; */
  display: flex;
  height: 97%;
  margin: 12px;
}
/* 面板列，包含面板标题和面板内容 */
.column {
  min-width: 268px;
  min-height: 100px;
  height: auto;
  background: #f0f0f0;
  border-radius: 3px;
}
/* 可选列表面板列 */
#columned {
  flex: 0 0 268px;
  height: 100%;
  margin-right: 5px;
}
/* 已选列表面板列 */
#columnuse {
  flex: auto;
  /* border: 1px black solid; */
  height: 100%;
  margin-left: 5px;
}
/* 面板标题 */
.column-header {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  text-align: center;
  background: #333;
  color: #fff;
  border-radius: 3px 3px 0 0;
}
/* 面板内容 */
.column-content {
  height: auto;
  border: 10px solid transparent;
  min-height: 60px;
  align-items: center;
}
/* 可选接口面板内容 */
#APIed {
  overflow-y: auto;
  height: 82%;
}
/* 已选接口面板内容 */
#APIuse {
  overflow-y: auto;
  height: 82%;
}
/*具体接口，即被拖拽对象*/
.item {
  width: 100%;
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
  text-align: center;
  vertical-align: center;
  /* 移动到接口上显示抓手光标 */
  cursor: grab;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.2);
}
/* 可选列表的具体接口 */
.itemed {
  height: 54px;
  margin: 5px 2px 5px 0px;
  background-color: #fff;
  line-height: 44px;
  padding: 5px 10px;
}
/* 已选列表的具体接口 */
.itemuse {
  height: 52px;
  line-height: 40px;
}
/*选中样式*/
.chosen {
  /* 点击接口显示抓住光标 */
  cursor: grabbing;
  border: solid 2px #3089dc !important;
  background-color: #2574be3f;
}
.demo-drawer__content {
  margin-left: 18px;
  margin-right: 28px;
  /* text-align: center; */
}
.demo-drawer__footer {
  float: right;
}
</style>