<!--
 * @FileDescription: 首页侧边栏
 * @Author: Lemon_Magic
 * @Date: 2022-03-04 17:31:41
 -->
<!--
 * @ModifyContent: 修复页面内按钮跳转导航栏menu活跃高亮匹配不到对应路由显示默认活跃问题
 * @LastEditors: Lemon_Magic
 * @LastEditTime: 2022-03-30 18:38:05
 -->
<template>
  <div id="aside">
    <!-- TODO:
      - Logo栏点击跳转首页
     -->
    <!-- Q:点击左侧导航栏可以跳转对应路由且选中的menu会高亮，但通过页面按钮跳转时导航栏index找不到对应路由则显示默认活跃
      - A: 在路由设置中将属于同一menu的路由name设置为相同，导航栏默认活跃设置为$route.name，menu的index设置为路由name即可
     -->
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="this.msg"
      router
      :default-active="$route.name"
    >
      <el-menu-item id="logo" index="/home">
        <img src="../../assets/img/logo.png" alt="" width="60px" />
        <span style="">服务编排系统</span>
      </el-menu-item>
      <div>
        <el-menu-item id="asideShow" class="funcMenu" index="Show">
          <i class="el-icon-menu"></i>
          <span slot="title">产品展示</span>
        </el-menu-item>
        <el-menu-item id="asideGuide" class="funcMenu" index="Guide">
          <i class="el-icon-location"></i>
          <span slot="title">引导页</span>
        </el-menu-item>
        <el-menu-item id="asideAdd" class="funcMenu" index="Increase">
          <i class="el-icon-document"></i>
          <span slot="title" v-if="$store.state.edit">修改产品</span>
          <span slot="title" v-else>新增产品</span>
        </el-menu-item>
        <el-menu-item id="asideSetting" class="funcMenu" index="Setting">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  props: ["msg"],
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
  min-height: 100%;
}
.el-menu--collapse {
  width: 80px;
}
#logo {
  border-bottom: 2px #dfd4d4 solid;
  /* padding: 5px!important; */
  padding-left: 10px !important;
  padding-bottom: 8px !important;
  height: 60px;
  /* border:1px solid #000; */
}
#logo img {
  display: inline-block;
  height: 60px;
}
#logo span {
  color: black;
  font-family: STXinwei;
  font-size: 21px;
  margin-left: 6px;
}
.el-menu {
  border-right: 0 !important;
}
.el-menu-item span {
  color: rgb(102, 99, 99);
  font-size: 17px;
  margin-left: 5px;
}
.funcMenu {
  height: 56px;
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
}
.el-menu-item.is-active {
  border-radius: 8px;
  background-color: rgba(29, 143, 236, 0.253);
}
.el-menu-item.is-active span {
  color: #409eff;
}
</style>