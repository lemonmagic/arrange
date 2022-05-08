<!--
 * @FileDescription: 新增产品步骤一，添加基础参数
 * @Author: Lemon_Magic
 * @Date: 2022-03-09 21:00:17
 -->
<!--
 * @ModifyContent: 将数据转为对象模式，方便遍历
 * @LastEditors: Lemon_Magic
 * @LastEditTime: 2022-03-15 19:51:04
 -->
<template>
  <!-- TODO：
    - 数据保存于store
    - 临时保存功能
    - 表单必填选项提示
    - input 输入建议、长度限制、远程搜索
    - 转入过渡动画
    - 转入过渡动画
  -->
  <!-- input 输入框 -->
  <!-- 引入element-china-area-data实现地区级联选择框 -->
  <!-- 使用deactivated钩子在keep-alive缓存的组件失活时向vuex传递已配置的参数 -->
  <div id="add-first">
    <el-form ref="form" :model="product" label-width="124px" size="mini">
      <div id="total">
        <div id="form1">
          <el-form-item label="产品编号">
            <el-input v-model="product.number.value" placeholder="请填写产品编号" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="产品名称">
            <el-input v-model="product.designation.value" placeholder="请填写产品名称" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="产品期限">
            <el-select v-model="product.time_limit.value" placeholder="请选择产品期限" style="width: 80%">
              <el-option label="三个月" value="90"></el-option>
              <el-option label="半年" value="180"></el-option>
              <el-option label="一年" value="365"></el-option>
              <el-option label="两年" value="730"></el-option>
              <el-option label="三年" value="1095"></el-option>
              <el-option label="五年" value="1825"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="风险等级">
            <el-radio-group v-model="product.risk.value">
              <el-radio-button label="R1"></el-radio-button>
              <el-radio-button label="R2"></el-radio-button>
              <el-radio-button label="R3"></el-radio-button>
              <el-radio-button label="R4"></el-radio-button>
              <el-radio-button label="R5"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item id="area" label="发行地区">
            <el-cascader :options="options" v-model="product.area.code" style="width: 80%"></el-cascader>
          </el-form-item>
          <el-form-item label="发行机构">
            <el-input v-model="product.publisher.value" placeholder="请填写产品发行机构" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="计划销售起始时间">
            <el-date-picker
              v-model="product.plan_start_datetime.value"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择开始日期时间"
              style="width: 80%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="计划销售截止时间">
            <el-date-picker
              v-model="product.plan_end_datetime.value"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择结束日期时间"
              style="width: 80%"
            ></el-date-picker>
          </el-form-item>
        </div>
        <div id="form2">
          <el-form-item label="年化利率">
            <el-input-number
              v-model="product.rate.value"
              :precision="2"
              :step="0.01"
              :max="20"
              controls-position="right"
              style="width: 60%"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="产品总额">
            <el-input-number
              v-model="product.total.value"
              :precision="2"
              :step="100000"
              :min="0"
              style="width: 60%"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="起存金额">
            <el-input-number
              v-model="product.minimum.value"
              :precision="2"
              :step="1000"
              :min="0"
              style="width: 60%"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="递增金额">
            <el-input-number
              v-model="product.increment.value"
              :precision="2"
              :step="10"
              :min="0"
              style="width: 60%"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="单人限额">
            <el-input-number
              v-model="product.quota.value"
              :precision="2"
              :step="1000"
              :min="0"
              style="width: 60%"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="单日限额">
            <el-input-number
              v-model="product.day_limit.value"
              :precision="2"
              :step="10000"
              :min="0"
              style="width: 60%"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="结息方式">
            <el-radio-group v-model="product.way.value">
              <el-radio-button label="整存整取"></el-radio-button>
              <el-radio-button label="零存整取"></el-radio-button>
              <el-radio-button label="定活两便"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入备注"
              v-model="product.remark.value"
              style="width: 80%"
            ></el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { regionDataPlus } from "element-china-area-data";
import provinceAndCity from "../../assets/json/province.json";

export default {
  name: "AddFirst",
  props: ["updateTemp", "selectData"],
  data() {
    return {
      provinceAndCity,
      options: regionDataPlus,
      product: {
        number: {
          id: 0,
          name: "产品编号",
          value: "00000009",
        },
        designation: {
          id: 1,
          name: "产品名称",
          value: "测试产品9",
        },
        time_limit: {
          id: 2,
          name: "产品期限",
          value: "365",
        },
        rate: {
          id: 3,
          name: "年化利率",
          value: "3.69",
        },
        minimum: {
          id: 4,
          name: "起存金额",
          value: "1000",
        },
        increment: {
          id: 5,
          name: "递增金额",
          value: "90",
        },
        quota: {
          id: 6,
          name: "单人限额",
          value: "900000",
        },
        day_limit: {
          id: 7,
          name: "单日限额",
          value: "90000",
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
          value: "",
          code: "",
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
          value: "2022-04-19 24:00:00",
        },
        remark: {
          id: 14,
          name: "备注",
          value: "默认数据9",
        },
        total: {
          id: 15,
          name: "产品总额",
          value: "1000009",
        },
        stock: {
          id: 16,
          name: "剩余额度",
          value: "90000",
        },
        API: [],
      },
    };
  },
  methods: {
    areaChange(value) {
      let area = "";
      // console.log(...value);
      if (value[0] == "") area = "全部";
      else {
        for (let p of this.provinceAndCity) {
          if (p.code == value[0]) {
            // console.log(p.name);
            area = area + p.name;
            if (value[1] != "") {
              for (let s of p.cityList) {
                if (s.code == value[1]) {
                  // console.log(s.name);
                  area = area + " " + s.name;
                  if (value[2] != "") {
                    for (let q of s.areaList) {
                      if (q.code == value[2]) {
                        // console.log(q.name);
                        area = area + " " + q.name;
                        // console.log(area);
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      this.product.area.value = area;
    },
  },
  components: {},
  computed: {},
  watch: {
    updateTemp() {
      if (this.updateTemp == 1) {
        this.areaChange(this.product.area.code);
        this.$store.commit("updateTempProduct", this.product);
        // console.log(this.product);
      }
    },
  },
  created() {
    console.log("新增产品步骤1已创建");
  },
  mounted() {
    if (this.selectData.selectProduct)
      this.product = this.selectData.selectProduct;
  },
  destroyed() {
    console.log("新增产品步骤1已销毁");
  },
  // deactivated() {
  //   this.$store.commit("updateTempProduct", this.product);
  // },
};
</script>

<style scoped>
#add-first {
  height: 70%;
}
.el-form {
  height: 90%;
}
#total {
  display: flex;
  height: 100%;
}
#form1,
#form2 {
  width: 50%;
  margin-right: 42px;
}
#form1 .el-form-item {
  border-right: 1px solid gray;
}
.el-form-item {
  margin-left: 12px;
}
.el-input {
  width: 300px;
}
</style>
<style>
.el-cascader-menu {
  height: 360px;
}
</style>