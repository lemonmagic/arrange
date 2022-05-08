<!--
 * @FileDescription: 编排顶部组件
 * @Author: Lemon_Magic
 * @Date: 2022-03-04 19:24:21
 -->
<template>
  <div id="header">
    <!-- TODO:
      - 信息标记Badge
      - 用户头像Avatar
      - 搜索栏
    -->
    <!-- 双栏弹性布局，左侧栏空白弹性占位自适应，右侧功能栏固定 -->
    <!-- 功能区三个按钮+一个下拉菜单实现基本功能，如用户个人中心及退出登录 -->
    <div id="whiteDiv"></div>
    <div id="funcDiv">
      <el-row>
        <el-button id="editBtn" icon="el-icon-edit" circle></el-button>
        <el-button id="mailBtn" icon="el-icon-message" circle></el-button>
        <el-button
          id="warningBtn"
          icon="el-icon-warning-outline"
          circle
        ></el-button>
        <el-dropdown id="userBtn">
          <el-button round>
            <i class="el-icon-user"></i> UserName{{ userName }}<i
              class="el-icon-arrow-down el-icon--right"
            ></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <!-- 需要.native原生触发点击事件 -->
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.replace("/");
    },
    handleClick() {
      alert("button click");
    },
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
#header {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  align-items: center;
}
#whiteDiv {
  /* border: 1px solid black; */
  flex: auto;
}
#funcDiv {
  /* border: 1px solid black; */
  flex: 0 0 350px;
}
.el-button {
  margin-left: 15px;
}
#editBtn,
#mailBtn,
#warningBtn {
  font-size: 20px;
  border: 0px;
}
</style>