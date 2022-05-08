import router from "@/router";
export default {
  asideDriver: [
    {
      element: "#asideShow",
      popover: {
        title: "产品展示",
        description: "点击此按钮可进入产品展示界面",
        position: "right"
      }
    },
    {
      element: "#asideAdd",
      popover: {
        title: "产品展示",
        description: "点击此按钮可进入新增产品界面",
        position: "right"
      }
    },
    {
      element: "#asideSetting",
      popover: {
        title: "设置",
        description: "点击此按钮可进入设置界面",
        position: "right"
      },
      onNext: function () {
        router.push({
          path: "/increase",
          query: {
            isDriver: 1,
            showActive: 0
          }
        });
      },
    },
  ],
  addDriver: [
    {
      element: "#firstAdd",
      popover: {
        title: "基础参数",
        description: "在此区域配置新产品的基础参数",
        position: "bottom"
      },
      onNext(e) {
        router.push({
          path: "/increase",
          query: {
            isDriver: 1,
            showActive: 1,
          }
        });
      }
    },
    {
      element: "#secondAdd",
      popover: {
        title: "接口选择",
        description: "在此区域选择新产品需要使用的接口和对应接口的相关参数",
        position: "bottom"
      },
      onNext(e) {
        router.push({
          path: "/increase",
          query: {
            isDriver: 1,
            showActive: 2,
          }
        });
      }
    },
    {
      element: "#thirdAdd",
      popover: {
        title: "参数确认",
        description: "在此区域确认新产品的基础参数和接口选择无误，如需更该可点击上一步返回前几步进行相关参数的修改",
        position: "bottom"
      },
      onNext() {
        router.push({
          path: "/guide",
        });
      },
    },
  ],
  homeDriver: [
    {
      element: "#table",
      popover: {
        title: "展示产品",
        description: "此区域展示所有已经编排完成的产品及其参数",
        position: "bottom"
      }
    },
    {
      element: "#tableEdit",
      popover: {
        title: "编辑",
        description: "点击此按钮可重新为选中产品配置基础参数和原子接口",
        position: "left"
      }
    },
  ],
}