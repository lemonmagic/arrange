<!--
 * @FileDescription: 放一个销量和库存信息的图表
 * @Author: Lemon_Magic
 * @Date: 2022-04-02 19:48:25
 -->
<template>
  <div id="chart1">
    <div id="myChart" ref="date_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: null, // 服务器返回的数据
      currentPage: 1, // 当前显示的页数
      totalPage: 0, // 一共有多少页
      timerId: null, // 定时器的标识
    };
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.date_ref, "vintage");
      const initOption = {
        title: {
          text: "▎销售时间统计表",
          left: 20,
          top: 10,
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "6%",
          bottom: "1%",
          containLabel: true, // 距离是包含坐标轴上的文字
        },
        xAxis: {
          type: "time",
          z: 2,
        },
        yAxis: {
          type: "category",
          axisLabel: {
            interval: 0, // 解决类目轴刷新后显示不全问题
          },
          z: 3,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            z: -3,
            lineStyle: {
              color: "#eee",
            },
          },
        },
        series: [
          {
            type: "bar",
            stack: "date",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#5052EE",
                  },
                  {
                    offset: 1,
                    color: "#AB6EE5",
                  },
                ]),
              },
            },
            z: -1,
          },
          {
            type: "bar",
            stack: "date",
            itemStyle: {
              normal: {
                color: "#fff",
                borderColor: "#fff",
                // borderWidth: 2,
              },
            },
            z: -1,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
      this.chartInstance.on("mouseover", () => {
        clearInterval(this.timerId);
      });
      this.chartInstance.on("mouseout", () => {
        this.startInterval();
      });
    },
    async getData() {
      this.allData = this.$store.state.productArg;
      this.totalPage =
        this.allData.length % 3 === 0
          ? this.allData.length / 3
          : this.allData.length / 3 + 1;
      this.updateChart();
      this.startInterval();
    },
    updateChart() {
      const start = (this.currentPage - 1) * 3;
      const end = this.currentPage * 3;
      const showData = this.allData.slice(start, end);
      // console.log(showData);
      const sellerNames = showData.map((item) => {
        return item.designation.value;
      });
      const startTime = showData.map((item) => {
        return item.plan_start_datetime.value;
      });
      const endTime = showData.map((item) => {
        return item.plan_end_datetime.value;
      });
      // console.log(sellerNames, startTime, endTime);
      const dataOption = {
        yAxis: {
          data: sellerNames,
        },
        tooltip: {
          formatter: function (params) {
            // console.log(params);
            var res = params[0].name + "</br>";
            var date0 = params[0].data;
            var date1 = params[1].data;
            date0 =
              date0.getFullYear() +
              "-" +
              (date0.getMonth() + 1) +
              "-" +
              date0.getDate();
            date1 =
              date1.getFullYear() +
              "-" +
              (date1.getMonth() + 1) +
              "-" +
              date1.getDate();
            res +=
              params[1].seriesName +
              "~" +
              params[0].seriesName +
              ":</br>" +
              date1 +
              "~" +
              date0 +
              "</br>";
            return res;
          },
        },
        series: [
          {
            name: "截止时间",
            data: [
              new Date(endTime[0]),
              new Date(endTime[1]),
              new Date(endTime[2]),
            ],
          },
          {
            name: "开始时间",
            data: [
              new Date(startTime[0]),
              new Date(startTime[1]),
              new Date(startTime[2]),
            ],
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
    startInterval() {
      if (this.timerId) clearInterval(this.timerId);
      this.timerId = setInterval(() => {
        this.currentPage++;
        if (this.currentPage > this.totalPage) {
          this.currentPage = 1;
        }
        this.updateChart();
      }, 3000);
    },
    screenAdapter() {
      setTimeout(() => {
        // console.log(this.$refs.date_ref.offsetWidth)
        const titleFontSize = (this.$refs.date_ref.offsetWidth / 100) * 4.6;
        const adapterOption = {
          title: {
            textStyle: {
              fontSize: titleFontSize / 1.2,
            },
          },
          tooltip: {
            axisPointer: {
              lineStyle: {
                width: titleFontSize / 1.1,
              },
            },
          },
          series: [
            {
              barWidth: titleFontSize / 1.36,
              itemStyle: {
                barBorderRadius: [0, titleFontSize / 2, titleFontSize / 2, 0],
              },
            },
          ],
        };
        this.chartInstance.setOption(adapterOption);
        this.chartInstance.resize();
      }, 300);
    },
  },
  mounted() {
    this.initChart();
    this.getData();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    clearInterval(this.timerId);
    // 在组件销毁的时候, 需要将监听器取消掉
    window.removeEventListener("resize", this.screenAdapter);
  },
};
</script>

<style scoped>
#chart1 {
  width: 50%;
  height: 85%;
  background: white;
  margin-right: 10px;
  border-radius: 10px;
  padding: 8px;
}
#myChart {
  width: 100%;
  height: 100%;
}
</style>