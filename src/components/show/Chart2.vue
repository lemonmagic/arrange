<!--
 * @FileDescription: 放一个销量和库存信息的图表
 * @Author: Lemon_Magic
 * @Date: 2022-04-02 19:48:25
 -->
<template>
  <div id="chart2">
    <div id="myChart" ref="stock_ref"></div>
  </div>
</template>

<script>
export default {
  name: "Chart2",
  data() {
    return {
      chartInstance: null,
      allData: null,
      currentIndex: 0, // 当前显示的数据
      timerId: null, // 定时器的标识
    };
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.stock_ref, "vintage");
      const initOption = {
        title: {
          text: "▎库存和销量分析",
          left: 20,
          top: 10,
        },
      };
      this.chartInstance.setOption(initOption);
      this.chartInstance.on("mouseover", () => {
        clearInterval(this.timerId);
      });
      this.chartInstance.on("mouseout", () => {
        this.startInterval();
      });
    },
    // async getData () {
    getData() {
      this.allData = this.$store.state.productArg;
      this.updateChart();
      this.startInterval();
    },
    updateChart() {
      const centerArr = [
        ["18%", "60%"],
        ["50%", "60%"],
        ["82%", "60%"],
      ];
      const colorArr = [
        ["#4FF778", "#0BA82C"],
        ["#E5DD45", "#E8B11C"],
        ["#E8821C", "#E55445"],
      ];
      const start = this.currentIndex * 3;
      const end = (this.currentIndex + 1) * 3;
      const showData = this.allData.slice(start, end);
      const seriesArr = showData.map((item, index) => {
        // console.log(item);
        let sale = item.total.value - item.stock.value;
        return {
          type: "pie",
          center: centerArr[index],
          hoverAnimation: false, // 关闭鼠标移入到饼图时的动画效果
          labelLine: {
            show: false, // 隐藏指示线
          },
          label: {
            position: "center",
            color: colorArr[index][0],
          },
          data: [
            {
              name: item.designation.value + "\n\n" + item.total.value,
              value: sale,
              itemStyle: {
                color: "#333843",
              },
            },
            {
              value: item.stock.value,
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: colorArr[index][0],
                  },
                  {
                    offset: 1,
                    color: colorArr[index][1],
                  },
                ]),
              },
            },
          ],
        };
      });
      const dataOption = {
        series: seriesArr,
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      setTimeout(() => {
        // console.log("dwidth: " + this.$refs.stock_ref.offsetWidth);
        const titleFontSize = (this.$refs.stock_ref.offsetWidth / 100) * 4.6;
        const innerRadius = titleFontSize * 2.36;
        const outterRadius = innerRadius * 1.15;
        const adapterOption = {
          title: {
            textStyle: {
              fontSize: titleFontSize / 1.2,
            },
          },
          series: [
            {
              type: "pie",
              radius: [outterRadius, innerRadius],
              label: {
                fontSize: titleFontSize / 1.8,
              },
            },
            {
              type: "pie",
              radius: [outterRadius, innerRadius],
              label: {
                fontSize: titleFontSize / 1.8,
              },
            },
            {
              type: "pie",
              radius: [outterRadius, innerRadius],
              label: {
                fontSize: titleFontSize / 1.8,
              },
            },
          ],
        };
        this.chartInstance.setOption(adapterOption);
        this.chartInstance.resize();
      }, 300);
    },
    startInterval() {
      if (this.timerId) clearInterval(this.timerId);
      this.timerId = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex > this.$store.state.productArg.length / 3) {
          this.currentIndex = 0;
        }
        this.updateChart(); // 在更改完currentIndex之后 , 需要更新界面
      }, 5000);
    },
  },
  watch: {},
  mounted() {
    this.initChart();
    this.getData();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
    clearInterval(this.timerId);
  },
};
</script>

<style scoped>
#chart2 {
  width: 50%;
  height: 85%;
  background: white;
  margin-left: 10px;
  border-radius: 10px;
  padding: 8px;
}
#myChart {
  width: 100%;
  height: 100%;
}
</style>