<!--
 * @FileDescription: 服务编排首页结构
 * @Author: Lemon_Magic
 * @Date: 2022-03-04 15:19:11
 -->
<template>
  <div id="home">
    <transition name="el-fade-in-linear">
      <el-container class="home-container" v-show="show">
        <!-- 侧边栏 -->
        <Aside :msg="homeIsCollapse"></Aside>
        <el-container>
          <!-- 顶部 -->
          <el-header>
            <el-button
              id="asideBtn"
              class="buttonDiv"
              size="mini"
              round
              @click="menuBtn"
            >
              <i class="el-icon-s-operation" style="font-size: 25px"></i>
            </el-button>
            <Header></Header>
          </el-header>
          <!-- 主体 -->
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </transition>
  </div>
</template>

<script>
import Aside from "../../components/home/HomeAside.vue";
import Header from "../../components/home/HomeHeader.vue";
import Table from "../../components/show/ShowTable.vue";

import "element-ui/lib/theme-chalk/base.css";

export default {
  name: "Home",
  data() {
    return {
      homeIsCollapse: false,
      show: false,
    };
  },
  methods: {
    menuBtn() {
      this.homeIsCollapse = !this.homeIsCollapse;
    },
  },
  components: {
    Aside,
    Header,
    Table,
  },
  computed: {},
  watch: {},
  mounted() {
    setTimeout(() => {
      this.show = !this.show;
    }, 200);
  },
};
</script>

<style scoped>
#home {
  height: 100%;
}
.home-container {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  border-bottom: 2px #dfd4d4 solid;
}
#move {
  float: left;
}
.el-main {
  background-color: #eeeeee;
  height: 100%;
  width: 100%;
}
.el-header {
  /* border: 1px black solid; */
  display: flex;
}
#asideBtn {
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 10px;
  width: 40px;
  height: 40px;
}
#asideBtn {
  border: 0px;
}
#asideBtn i {
  position: relative;
  left: -7px;
}

/*鼠标点击后移开，恢复本身样式*/
.buttonDiv,
.buttonDiv:focus:not(.buttonDiv:hover) {
  margin-right: 12px;
  /* border: 1px solid #2794f8; */
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 #f4f4f4;
  /* color: #2794f8; */
  background: white;
}
/*鼠标悬浮，没有按下；鼠标按下后抬起，没有移开*/
.buttonDiv:focus,
.buttonDiv:hover {
  background: #eaf5ff;
  /* border: 1px solid #6d8091 !important; */
  color: #8aa0b4a1;
}
/*鼠标按下，没有抬起*/
.buttonDiv:active {
  background: #404b55;
  color: white;
}
</style>