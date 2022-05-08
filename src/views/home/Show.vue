<!--
 * @FileDescription: 展示页面
 * @Author: Lemon_Magic
 * @Date: 2022-04-02 15:36:19
 -->
<template>
  <div id="show">
    <div id="showChart">
      <chart1></chart1>
      <chart2></chart2>
    </div>
    <show-table></show-table>
  </div>
</template>

<script>
import ShowTable from "../../components/show/ShowTable";
import Chart1 from "../../components/show/Chart1";
import Chart2 from "../../components/show/Chart2";

export default {
  name: "Show",
  data() {
    return {};
  },
  methods: {},
  components: {
    ShowTable,
    Chart1,
    Chart2
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
#show {
  width: 100%;
  height: 100%;
}
#showChart {
  display: flex;
  width: 100%;
  height: 40%;
}
</style>