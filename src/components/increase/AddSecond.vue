<!--
 * @FileDescription: 新增产品步骤二，拖拽选择原子服务接口
 * @Author: Lemon_Magic
 * @Date: 2022-03-09 21:08:32
 -->
<!--
 * @ModifyContent: 引入drag组件以实现拖拽形式的接口选择时的服务编排
 * @LastEditors: Lemon_Magic
 * @LastEditTime: 2022-03-14 16:15:09
 -->
<template>
  <!-- TODO： 
    - 编排方式可选择 拖拽方式|穿梭框方式|开关方式|流程图方式
    - 转入过渡动画
    - 转入过渡动画
  -->
  <!-- 通过 Drag 组件实现拖拽方式 -->
  <div id="add-second">
    <drag :updateTemp="updateTemp"></drag>
  </div>
</template>

<script>
import Drag from "../../components/arrangeWay/Drag.vue";

export default {
  name: "AddSecond",
  props: ["updateTemp"],
  data() {
    return {};
  },
  methods: {},
  components: {
    Drag,
  },
  computed: {},
  watch: {},
  created() {
    console.log("新增产品步骤2已创建");
  },
  destroyed() {
    console.log("新增产品步骤2已销毁");
  },
};
</script>

<style scoped>
#add-second {
  height: 70%;
}
</style>