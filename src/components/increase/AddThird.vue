<!--
 * @FileDescription: 新增产品步骤三，确认步骤一二填写与选择的基础参数和接口及其对应参数
 * @Author: Lemon_Magic
 * @Date: 2022-03-09 21:09:02
 -->
 <!--
  * @ModifyContent: 展示数据
  * @LastEditors: Lemon_Magic
  * @LastEditTime: 2022-03-15 19:50:47
  -->
<template>
  <!-- TODO:
    - 前两步的数据展示
    - 数据展示的ico标签
    - 转入过渡动画
    - 转入过渡动画
  -->
  <!-- 使用vuex从$store.state中取出数据进行展示确认 -->
  <!-- 使用descriptions组件进行数据展示 -->
  <div id="add-third">
    <el-descriptions class="product-show" title="产品参数" :column="3" size="mini" border>
      <el-descriptions-item v-for="(item, key, index) in $store.state.tempArg">
        <template slot="label" v-if="key!='API'">
          <i class="el-icon-user"></i>
          {{ item.name }}{{key}}
        </template>
        {{ item.value }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions class="product-show" title="选择接口" :column="3" size="mini" border>
      <el-descriptions-item v-for="(item, key, index) in $store.state.tempAPI">
        <template tag="div" slot="label">
          <i class="el-icon-user"></i>
          {{ item.name }}
        </template>
        {{ item.value }}
      </el-descriptions-item>
      <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
        <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "AddThird",
  data() {
    return {
      centerDialogVisible: false,
    };
  },
  methods: {},
  components: {},
  computed: {},
  watch: {},
  created() {
    console.log("新增产品步骤3已创建");
  },
  destroyed() {
    console.log("新增产品步骤3已销毁");
  },
};
</script>

<style scoped>
#add-third {
  height: 70%;
}
.el-descriptions {
  margin: 12px;
}
</style>