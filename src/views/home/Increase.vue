<!--
 * @FileDescription: 新增产品子组件版
 * @Author: Lemon_Magic
 * @Date: 2022-03-31 17:48:36
 -->
<!--
 * @ModifyContent: 子路由重置为子组件方式
 * @LastEditors: Lemon_Magic
 * @LastEditTime: 2022-03-31 17:48:36
 -->
<template>
  <div id="increase">
    <!-- TODO： 
      - 上一步按钮回退上一步骤时保留表单填写的基础参数和接口选择
      - 点击继续添加按钮时销毁步骤一二三
      - 美化按钮
      - 准备将步骤一二三作为子组件在当前组件注册使用，方便进行组件销毁
    -->
    <!-- 使用 steps 可视化显示添加产品步骤，优化用户体验 -->
    <!-- 使用子组件方式进行步骤的步进与后退，方便组件的销毁后重置页面默认值 -->
    <el-steps :active="active" finish-status="success">
      <el-step id="firstAdd" title="基础参数"></el-step>
      <el-step id="secondAdd" title="配置接口"></el-step>
      <el-step id="thirdAdd" title="确认参数"></el-step>
      <el-step id="lastAdd" title="完成"></el-step>
    </el-steps>
    <!-- <div v-show="active == 0">
      <h2>增加产品从这里开始</h2>
    </div>-->
    <first v-show="active == 0" v-if="refresh" :updateTemp="active" :selectData="$route.query"></first>
    <second v-show="active == 1" v-if="refresh" :updateTemp="active"></second>
    <third v-show="active == 2" v-if="refresh"></third>
    <el-button-group class="button">
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        v-show="active != 0 && active != 4"
        @click="pre"
      >上一步</el-button>
      <el-button type="primary" v-show="active != 4" @click="next">
        下一步
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>
    <el-result v-if="JSON.stringify(this.$route.query)!='{}'" v-show="active == 4" icon="success" title="产品修改成功" subTitle="请根据提示继续操作">
      <template slot="extra">
        <!-- <el-button type="primary" size="medium" @click="again">添加新产品</el-button> -->
        <el-button type="primary" size="medium" @click="editLook">查看产品</el-button>
      </template>
    </el-result>
    <el-result v-else v-show="active == 4" icon="success" title="产品添加成功" subTitle="请根据提示继续操作">
      <template slot="extra">
        <el-button type="primary" size="medium" @click="again">继续添加</el-button>
        <el-button type="primary" size="medium" @click="addLook">查看产品</el-button>
      </template>
    </el-result>
  </div>
</template>

<script>
import first from "../../components/increase/AddFirst.vue";
import second from "../../components/increase/AddSecond.vue";
import third from "../../components/increase/AddThird.vue";
import driverArg from "../../plugins/driver";

export default {
  name: "Increase",
  data() {
    return {
      active: 0,
      refresh: true,
    };
  },
  methods: {
    next() {
      if (this.active == 0) {
        this.active++;
      } else if (this.active == 1) {
        this.active++;
      } else if (this.active == 2) {
        this.active += 2;
        this.$store.commit("tempDataStoreProduct");
      }
      // console.log("active：" + this.active);
    },
    pre() {
      if (this.active == 1) {
        this.active--;
      } else if (this.active == 2) {
        this.active--;
      }
    },
    again() {
      this.active = 0;
      this.refresh = false;
      this.$nextTick(() => {
        this.refresh = true;
      });
    },
    editLook() {
      this.$store.commit("changeEdit");
      this.$router.replace("/home");
    },
    addLook() {
      this.$router.replace("/home");
    }
  },
  components: {
    first,
    second,
    third,
  },
  computed: {},
  watch: {},
  created() {
    // console.log("新增产品首页已创建");
  },
  mounted() {
    if (this.$route.query.isDriver == 1) {
      console.log(this.$route.query.showActive);
      this.$driver.defineSteps(driverArg.addDriver);
      this.$driver.start();
      var driver = document.getElementById("driver-page-overlay");
      var highlighted = document.getElementById(
        "driver-highlighted-element-stage"
      );
      driver.style.cssText = "z-index:1000!important;";
      highlighted.style.cssText = "z-index:1000!important;"; // 需要引导展示的元素
    }
  },
  destroyed() {
    // console.log("新增产品首页已销毁");
    if(this.$store.state.edit === true) this.$store.commit("changeEdit")
  },
};
</script>

<style scoped>
#increase {
  background-color: white;
  height: 99%;
  border: 1px solid rgba(219, 219, 226, 0.603);
  border-radius: 8px;
}
.el-steps {
  margin: 30px;
}
.button {
  float: right;
  margin-right: 20px;
}
</style>