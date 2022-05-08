<!--
 * @FileDescription: 引导页首页
 * @Author: Lemon_Magic
 * @Date: 2022-04-02 11:35:53
 -->
<template>
  <div id="guide">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="引导页" name="zero">
        <div id="guideTitle">
          <p>
            本页面的 <b>标签页</b>
            和
            <b>引导按钮</b>
            将简单介绍该系统的各项功能，能帮助第一次使用本系统的工作人员快速了解并上手。
          </p>
        </div>
        <button
          type="button"
          class="el-button el-button--primary el-button--medium"
          @click="showDriver"
        >
          <i class="el-icon-question"></i><span> 开始引导 </span>
        </button>
      </el-tab-pane>
      <el-tab-pane label="新增产品" name="second">
        <guide-add></guide-add>
      </el-tab-pane>
      <el-tab-pane label="产品展示" name="first"
        >本页内容正在紧张开发中，请以后再来探索叭</el-tab-pane
      >
      <el-tab-pane label="首页图谱" name="third"
        >本页内容正在紧张开发中，请以后再来探索叭</el-tab-pane
      >
      <el-tab-pane label="偏好设置" name="fourth"
        >本页内容正在紧张开发中，请以后再来探索叭</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
import GuideAdd from "../../components/guide/GuideAdd";
import driverArg from "../../plugins/driver.js";

export default {
  name: "Guide",
  data() {
    return {
      activeName: "zero",
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    showDriver() {
      this.$driver.defineSteps(driverArg.asideDriver);
      this.$driver.start();
    },
  },
  components: {
    GuideAdd,
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
#guide {
  height: 100%;
}
.el-tabs {
  background: white;
  border-radius: 8px;
  height: 95%;
  padding: 20px 40px 20px 40px;
}
#guideTitle {
  /* background: rgba(158, 156, 156, 0.253); */
  background: #eef1f6;
  text-align: left;
  border-radius: 10px;
  width: 98%;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 20px;
  color: #2c3e50;
}
#guideTitle {
  height: 50px;
  line-height: 50px;
}
</style>
<style>
.el-tabs__item {
  font-size: 16px !important;
}
</style>