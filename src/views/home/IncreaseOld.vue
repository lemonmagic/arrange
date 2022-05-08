<!--
 * @FileDescription: 新增产品子路由版
 * @Author: Lemon_Magic
 * @Date: 2022-03-09 21:06:06
 -->
<!--
 * @ModifyContent: 已弃用：通过子路由的方式跳转步骤一二三，以导航守卫方式支持前进后退时的状态保持，但是销毁问题木有解决
 * @LastEditors: Lemon_Magic
 * @LastEditTime: 2022-03-31 17:47:00
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
    <!-- 删除步骤四完成页并将完成页放在首页内，方便 active 值的重置，绕过父路由下的自路由跳转组件不销毁，属性值不重置，步骤四跳回步骤一时步骤条不更新问题 -->
    <el-steps :active="active" finish-status="success">
      <el-step id="firstAdd" title="基础参数"></el-step>
      <el-step id="secondAdd" title="配置接口"></el-step>
      <el-step id="thirdAdd" title="确认参数"></el-step>
      <el-step id="lastAdd" title="完成"></el-step>
    </el-steps>
    <keep-alive>
      <router-view v-show="active != 4" v-if="refresh"></router-view>
    </keep-alive>
    <el-button-group class="button">
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        v-show="active != 0 && active != 4"
        @click="pre"
        >上一步</el-button
      >
      <el-button type="primary" v-show="active != 4" @click="next"
        >下一步<i class="el-icon-arrow-right el-icon--right"></i
      ></el-button>
    </el-button-group>
    <el-result
      v-show="active == 4"
      icon="success"
      title="产品添加成功"
      subTitle="请根据提示继续操作"
    >
      <template slot="extra">
        <el-button type="primary" size="medium" @click="again"
          >继续添加</el-button
        >
        <el-button type="primary" size="medium" @click="look"
          >查看产品</el-button
        >
      </template>
    </el-result>
  </div>
</template>

<script>
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
        this.$router.replace("/second");
      } else if (this.active == 1) {
        this.active++;
        this.$router.replace("/third");
      } else if (this.active == 2) {
        this.active += 2;
        this.$store.commit("tempDataStoreProduct");
      }
    },
    pre() {
      if (this.active == 1) {
        this.active--;
        this.$router.replace("/first");
      } else if (this.active == 2) {
        this.active--;
        this.$router.replace("/second");
      }
    },
    again() {
      this.active = 0;
      this.$router.replace("/first");
    },
    look() {
      this.$router.replace("/home");
    },
  },
  components: {},
  computed: {},
  watch: {},
  created() {
    // console.log("新增产品首页已创建");
  },
  mounted() {
    // console.log(this.active);
    console.log(this.$route.query.isDriver);
    if (this.$route.query.isDriver == 1) {
      console.log("table 需要引导");
      this.$driver.defineSteps(driverArg.addDriver);
      this.$driver.start();
      var driver = document.getElementById("driver-page-overlay");
      var highlighted = document.getElementById(
        "driver-highlighted-element-stage"
      );
      driver.style.cssText = "z-index:1000!important;";
      highlighted.style.cssText = "z-index:1000!important;"; // 我需要引导展示的元素
    }
  },
  destroyed() {
    // console.log("新增产品首页已销毁");
  },
};
</script>

<style scoped>
#increase {
  background-color: white;
  height: 100%;
  border: 1px solid rgba(219, 219, 226, 0.603);
}
.el-steps {
  margin: 30px;
}
.button {
  float: right;
  margin-right: 20px;
}
</style>