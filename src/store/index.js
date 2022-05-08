import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放单个临时新增产品数据
    tempArg: {
      number: {
        id: 0,
        name: "产品编号",
        value: "",
      },
      designation: {
        id: 1,
        name: "产品名称",
        value: "",
      },
      time_limit: {
        id: 2,
        name: "产品期限",
        value: "",
      },
      rate: {
        id: 3,
        name: "年化利率",
        value: "",
      },
      minimum: {
        id: 4,
        name: "起存金额",
        value: "",
      },
      increment: {
        id: 5,
        name: "递增金额",
        value: "",
      },
      quota: {
        id: 6,
        name: "单人限额",
        value: "",
      },
      day_limit: {
        id: 7,
        name: "单日限额",
        value: "",
      },
      risk: {
        id: 8,
        name: "风险等级",
        value: "",
      },
      way: {
        id: 9,
        name: "结息方式",
        value: "",
      },
      area: {
        id: 10,
        name: "发行地区",
        value: "",
        code: "",
      },
      publisher: {
        id: 11,
        name: "发行机构",
        value: "",
      },
      plan_start_datetime: {
        id: 12,
        name: "计划销售起始日期时间",
        value: "",
      },
      plan_end_datetime: {
        id: 13,
        name: "计划销售截止日期时间",
        value: "",
      },
      remark: {
        id: 14,
        name: "备注",
        value: "",
      },
      total: {
        id: 15,
        name: "产品总额",
        value: "",
      },
      stock: {
        id: 16,
        name: "剩余额度",
        value: "",
      },
      API: [],
    },
    // 存放单个临时新增产品接口数据
    tempAPI: [
    ],
    // 存放所有编排产品数据
    productArg: [
      {
        number: {
          id: 0,
          name: "产品编号",
          value: "00000001",
        },
        designation: {
          id: 1,
          name: "产品名称",
          value: "测试产品1",
        },
        time_limit: {
          id: 2,
          name: "产品期限",
          value: "90",
        },
        rate: {
          id: 3,
          name: "年化利率",
          value: "2.70",
        },
        minimum: {
          id: 4,
          name: "起存金额",
          value: "1000",
        },
        increment: {
          id: 5,
          name: "递增金额",
          value: "10",
        },
        quota: {
          id: 6,
          name: "单人限额",
          value: "100000",
        },
        day_limit: {
          id: 7,
          name: "单日限额",
          value: "10000",
        },
        risk: {
          id: 8,
          name: "风险等级",
          value: "R1",
        },
        way: {
          id: 9,
          name: "结息方式",
          value: "整存整取",
        },
        area: {
          id: 10,
          name: "发行地区",
          value: "浙江省 杭州市",
          code: ["330000", "330100", ""]
        },
        publisher: {
          id: 11,
          name: "发行机构",
          value: "blow",
        },
        plan_start_datetime: {
          id: 12,
          name: "计划销售起始日期时间",
          value: "2022-03-30 08:00:00",
        },
        plan_end_datetime: {
          id: 13,
          name: "计划销售截止日期时间",
          value: "2022-04-21 24:00:00",
        },
        remark: {
          id: 14,
          name: "备注",
          value: "默认数据1",
        },
        total: {
          id: 15,
          name: "产品总额",
          value: "1000000",
        },
        stock: {
          id: 16,
          name: "剩余额度",
          value: "10000",
        },
        API: [],
      },
      {
        number: {
          id: 0,
          name: "产品编号",
          value: "00000002",
        },
        designation: {
          id: 1,
          name: "产品名称",
          value: "测试产品2",
        },
        time_limit: {
          id: 2,
          name: "产品期限",
          value: "180",
        },
        rate: {
          id: 3,
          name: "年化利率",
          value: "3.20",
        },
        minimum: {
          id: 4,
          name: "起存金额",
          value: "2000",
        },
        increment: {
          id: 5,
          name: "递增金额",
          value: "200",
        },
        quota: {
          id: 6,
          name: "单人限额",
          value: "200000",
        },
        day_limit: {
          id: 7,
          name: "单日限额",
          value: "20000",
        },
        risk: {
          id: 8,
          name: "风险等级",
          value: "R1",
        },
        way: {
          id: 9,
          name: "结息方式",
          value: "整存整取",
        },
        area: {
          id: 10,
          name: "发行地区",
          value: "浙江省 杭州市 上城区",
          code: ["330000", "330100", "330102"]
        },
        publisher: {
          id: 11,
          name: "发行机构",
          value: "blow",
        },
        plan_start_datetime: {
          id: 12,
          name: "计划销售起始日期时间",
          value: "2022-03-22 08:00:00",
        },
        plan_end_datetime: {
          id: 13,
          name: "计划销售截止日期时间",
          value: "2022-04-12 24:00:00",
        },
        remark: {
          id: 14,
          name: "备注",
          value: "默认数据2",
        },
        total: {
          id: 15,
          name: "产品总额",
          value: "1000002",
        },
        stock: {
          id: 16,
          name: "剩余额度",
          value: "200000",
        },
        API: [],
      },
      {
        number: {
          id: 0,
          name: "产品编号",
          value: "00000003",
        },
        designation: {
          id: 1,
          name: "产品名称",
          value: "测试产品3",
        },
        time_limit: {
          id: 2,
          name: "产品期限",
          value: "365",
        },
        rate: {
          id: 3,
          name: "年化利率",
          value: "3.90",
        },
        minimum: {
          id: 4,
          name: "起存金额",
          value: "3000",
        },
        increment: {
          id: 5,
          name: "递增金额",
          value: "300",
        },
        quota: {
          id: 6,
          name: "单人限额",
          value: "300000",
        },
        day_limit: {
          id: 7,
          name: "单日限额",
          value: "30000",
        },
        risk: {
          id: 8,
          name: "风险等级",
          value: "R1",
        },
        way: {
          id: 9,
          name: "结息方式",
          value: "整存整取",
        },
        area: {
          id: 10,
          name: "发行地区",
          value: "浙江省 杭州市 下城区",
          code: ["330000", "330100", "330103"]
        },
        publisher: {
          id: 11,
          name: "发行机构",
          value: "blow",
        },
        plan_start_datetime: {
          id: 12,
          name: "计划销售起始日期时间",
          value: "2022-03-30 08:00:00",
        },
        plan_end_datetime: {
          id: 13,
          name: "计划销售截止日期时间",
          value: "2022-04-13 24:00:00",
        },
        remark: {
          id: 14,
          name: "备注",
          value: "默认数据3",
        },
        total: {
          id: 15,
          name: "产品总额",
          value: "1000003",
        },
        stock: {
          id: 16,
          name: "剩余额度",
          value: "300000",
        },
        API: [],
      },
      {
        number: {
          id: 0,
          name: "产品编号",
          value: "00000004",
        },
        designation: {
          id: 1,
          name: "产品名称",
          value: "测试产品4",
        },
        time_limit: {
          id: 2,
          name: "产品期限",
          value: "730",
        },
        rate: {
          id: 3,
          name: "年化利率",
          value: "4.00",
        },
        minimum: {
          id: 4,
          name: "起存金额",
          value: "10000",
        },
        increment: {
          id: 5,
          name: "递增金额",
          value: "40",
        },
        quota: {
          id: 6,
          name: "单人限额",
          value: "400000",
        },
        day_limit: {
          id: 7,
          name: "单日限额",
          value: "40000",
        },
        risk: {
          id: 8,
          name: "风险等级",
          value: "R1",
        },
        way: {
          id: 9,
          name: "结息方式",
          value: "整存整取",
        },
        area: {
          id: 10,
          name: "发行地区",
          value: "浙江省 杭州市 江干区",
          code: ["330000", "330100", "330104"]
        },
        publisher: {
          id: 11,
          name: "发行机构",
          value: "blow",
        },
        plan_start_datetime: {
          id: 12,
          name: "计划销售起始日期时间",
          value: "2022-04-04 08:00:00",
        },
        plan_end_datetime: {
          id: 13,
          name: "计划销售截止日期时间",
          value: "2022-04-24 24:00:00",
        },
        remark: {
          id: 14,
          name: "备注",
          value: "默认数据4",
        },
        total: {
          id: 15,
          name: "产品总额",
          value: "1000004",
        },
        stock: {
          id: 16,
          name: "剩余额度",
          value: "400000",
        },
        API: [],
      },
      {
        number: {
          id: 0,
          name: "产品编号",
          value: "00000005",
        },
        designation: {
          id: 1,
          name: "产品名称",
          value: "测试产品5",
        },
        time_limit: {
          id: 2,
          name: "产品期限",
          value: "1095",
        },
        rate: {
          id: 3,
          name: "年化利率",
          value: "4.54",
        },
        minimum: {
          id: 4,
          name: "起存金额",
          value: "10000",
        },
        increment: {
          id: 5,
          name: "递增金额",
          value: "500",
        },
        quota: {
          id: 6,
          name: "单人限额",
          value: "500000",
        },
        day_limit: {
          id: 7,
          name: "单日限额",
          value: "50000",
        },
        risk: {
          id: 8,
          name: "风险等级",
          value: "R1",
        },
        way: {
          id: 9,
          name: "结息方式",
          value: "整存整取",
        },
        area: {
          id: 10,
          name: "发行地区",
          value: "浙江省 杭州市 拱墅区",
          code: ["330000", "330100", "330105"]
        },
        publisher: {
          id: 11,
          name: "发行机构",
          value: "blow",
        },
        plan_start_datetime: {
          id: 12,
          name: "计划销售起始日期时间",
          value: "2022-04-05 08:00:00",
        },
        plan_end_datetime: {
          id: 13,
          name: "计划销售截止日期时间",
          value: "2022-04-15 24:00:00",
        },
        remark: {
          id: 14,
          name: "备注",
          value: "默认数据",
        },
        total: {
          id: 15,
          name: "产品总额",
          value: "1000005",
        },
        stock: {
          id: 16,
          name: "剩余额度",
          value: "500000",
        },
        API: [],
      },
      {
        number: {
          id: 0,
          name: "产品编号",
          value: "00000006",
        },
        designation: {
          id: 1,
          name: "产品名称",
          value: "测试产品6",
        },
        time_limit: {
          id: 2,
          name: "产品期限",
          value: "1825",
        },
        rate: {
          id: 3,
          name: "年化利率",
          value: "4.86",
        },
        minimum: {
          id: 4,
          name: "起存金额",
          value: "60000",
        },
        increment: {
          id: 5,
          name: "递增金额",
          value: "600",
        },
        quota: {
          id: 6,
          name: "单人限额",
          value: "600000",
        },
        day_limit: {
          id: 7,
          name: "单日限额",
          value: "60000",
        },
        risk: {
          id: 8,
          name: "风险等级",
          value: "R1",
        },
        way: {
          id: 9,
          name: "结息方式",
          value: "整存整取",
        },
        area: {
          id: 10,
          name: "发行地区",
          value: "浙江省 杭州市 西湖区",
          code: ["330000", "330100", "330106"]
        },
        publisher: {
          id: 11,
          name: "发行机构",
          value: "blow",
        },
        plan_start_datetime: {
          id: 12,
          name: "计划销售起始日期时间",
          value: "2022-04-06 08:00:00",
        },
        plan_end_datetime: {
          id: 13,
          name: "计划销售截止日期时间",
          value: "2022-04-26 24:00:00",
        },
        remark: {
          id: 14,
          name: "备注",
          value: "默认数据6",
        },
        total: {
          id: 15,
          name: "产品总额",
          value: "1000006",
        },
        stock: {
          id: 16,
          name: "剩余额度",
          value: "600000",
        },
        API: [],
      },
      {
        number: {
          id: 0,
          name: "产品编号",
          value: "00000007",
        },
        designation: {
          id: 1,
          name: "产品名称",
          value: "测试产品7",
        },
        time_limit: {
          id: 2,
          name: "产品期限",
          value: "365",
        },
        rate: {
          id: 3,
          name: "年化利率",
          value: "3.47",
        },
        minimum: {
          id: 4,
          name: "起存金额",
          value: "70000",
        },
        increment: {
          id: 5,
          name: "递增金额",
          value: "700",
        },
        quota: {
          id: 6,
          name: "单人限额",
          value: "700000",
        },
        day_limit: {
          id: 7,
          name: "单日限额",
          value: "70000",
        },
        risk: {
          id: 8,
          name: "风险等级",
          value: "R1",
        },
        way: {
          id: 9,
          name: "结息方式",
          value: "整存整取",
        },
        area: {
          id: 10,
          name: "发行地区",
          value: "浙江省 杭州市 滨江区",
          code: ["330000", "330100", "330108"]
        },
        publisher: {
          id: 11,
          name: "发行机构",
          value: "blow",
        },
        plan_start_datetime: {
          id: 12,
          name: "计划销售起始日期时间",
          value: "2022-04-07 08:00:00",
        },
        plan_end_datetime: {
          id: 13,
          name: "计划销售截止日期时间",
          value: "2022-04-17 24:00:00",
        },
        remark: {
          id: 14,
          name: "备注",
          value: "默认数据7",
        },
        total: {
          id: 15,
          name: "产品总额",
          value: "1000007",
        },
        stock: {
          id: 16,
          name: "剩余额度",
          value: "700000",
        },
        API: [],
      },
      {
        number: {
          id: 0,
          name: "产品编号",
          value: "00000008",
        },
        designation: {
          id: 1,
          name: "产品名称",
          value: "测试产品8",
        },
        time_limit: {
          id: 2,
          name: "产品期限",
          value: "1825",
        },
        rate: {
          id: 3,
          name: "年化利率",
          value: "4.88",
        },
        minimum: {
          id: 4,
          name: "起存金额",
          value: "80000",
        },
        increment: {
          id: 5,
          name: "递增金额",
          value: "800",
        },
        quota: {
          id: 6,
          name: "单人限额",
          value: "800000",
        },
        day_limit: {
          id: 7,
          name: "单日限额",
          value: "80000",
        },
        risk: {
          id: 8,
          name: "风险等级",
          value: "R1",
        },
        way: {
          id: 9,
          name: "结息方式",
          value: "整存整取",
        },
        area: {
          id: 10,
          name: "发行地区",
          value: "浙江省 杭州市 萧山区",
          code: ["330000", "330100", "330109"]
        },
        publisher: {
          id: 11,
          name: "发行机构",
          value: "blow",
        },
        plan_start_datetime: {
          id: 12,
          name: "计划销售起始日期时间",
          value: "2022-04-09 08:00:00",
        },
        plan_end_datetime: {
          id: 13,
          name: "计划销售截止日期时间",
          value: "2022-05-29 24:00:00",
        },
        remark: {
          id: 14,
          name: "备注",
          value: "默认数据8",
        },
        total: {
          id: 15,
          name: "产品总额",
          value: "1000008",
        },
        stock: {
          id: 16,
          name: "剩余额度",
          value: "800000",
        },
        API: [],
      },
    ],
    edit: false, // 编辑时状态
  },
  getters: {
  },
  mutations: {
    updateTempProduct(state, payload) {
      console.log("Store临时产品数据更新成功");
      state.tempArg = payload;
    },
    updateTempAPI(state, payload) {
      console.log("Store临时接口参数更新成功");
      state.tempAPI = payload;
    },
    tempDataStoreProduct(state) {
      if(state.productArg.find(item => {
        return item.number.value === state.tempArg.number.value
      })) {
        console.log("有重复值");
        for(let i in state.productArg) {
          if(state.productArg[i].number.value == state.tempArg.number.value) state.productArg.splice(i,1)
        }
      }
      console.log("临时数据加入集合成功");
      state.tempArg.API = state.tempAPI
      // 直接将tempArg插入数组头部是浅拷贝，该对象会随tempArg变化而变化；这里使用json进行全拷贝
      state.productArg.unshift(JSON.parse(JSON.stringify(state.tempArg)))
    },
    changeEdit(state) {
      state.edit = !state.edit
    }
  },
  actions: {
  },
  modules: {
  }
})
