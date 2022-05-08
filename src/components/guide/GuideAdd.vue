<!--
 * @FileDescription: 新增产品页面的引导页展示
 * @Author: Lemon_Magic
 * @Date: 2022-04-02 13:09:24
 -->
<template>
  <div id="guide-add">
    <el-carousel indicator-position="outside" :autoplay="false" height="550px">
      <el-carousel-item
        v-for="item of imagebox"
        :key="item.id"
        :label="item.info"
        :name="item.info"
      >
        <img id="showImg" :src="item.idView" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "GuideAdd",
  data() {
    return {
      imagebox: [
        {
          id: 0,
          idView: require("../../assets/img/guide/step1.gif"),
          info: "基础参数",
        },
        {
          id: 1,
          idView: require("../../assets/img/guide/step2-add.gif"),
          info: "添加接口",
        },
        {
          id: 2,
          idView: require("../../assets/img/guide/step2-remove.gif"),
          info: "移除接口",
        },
        {
          id: 3,
          idView: null,
          info: "持续开发中..."
        }
      ],
    };
  },
  methods: {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
#guide-add {
  text-align: center;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>