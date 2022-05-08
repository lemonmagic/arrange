<!--
 * @FileDescription: 首页以表格形式展示产品参数及实时数据
 * @Author: Lemon_Magic
 * @Date: 2022-03-08 16:51:07
-->
<!--
 * @ModifyContent: 增加库存与剩余库存两列
 * @LastEditors: Lemon_Magic
 * @LastEditTime: 2022-03-18 10:43:30
 -->
<template>
  <div id="table">
    <!-- TODO：
      - 动态绑定视图高度实现响应式高度
      - 根据利率、起始日截止日进行筛选
      - 折叠栏数据懒加载
    -->
    <!-- data动态绑定数据 -->
    <!-- max-height超过该值显示滚动条，同height也可固定表头 -->
    <!-- table宽度设置100%，最后一列不固定其余每列width固定以填充100%，缩小屏幕时出现横向滚动条 -->
    <!-- fixed固定列 -->
    <!-- stripe斑马纹 true or false -->
    <!-- sortable实现列表排序，默认order升序ascending；降序default-sort="{props:'data',order:'descending'}" -->
    <!-- 自定义表头展示搜索框 -->
    <!-- 点击编辑按钮跳转参数配置，原先已配置好的参数将默认填入各参数框，只需在此基础上修改即可，无需全部参数与接口推到重来 -->
    <el-table
      :data="$store.state.productArg.filter((data) =>!search || data.name.toLowerCase().includes(search.toLowerCase()))"
      max-height="400px"
      style="width: 100%"
      stripe
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item label="起存金额">
              <span>{{ props.row.minimum.value }}</span>
            </el-form-item>
            <el-form-item label="单人限额">
              <span>{{ props.row.quota.value }}</span>
            </el-form-item>
            <el-form-item label="发行地区">
              <span>{{ props.row.area.value }}</span>
            </el-form-item>
            <el-form-item label="递增金额">
              <span>{{ props.row.increment.value }}</span>
            </el-form-item>
            <el-form-item label="单日限额">
              <span>{{ props.row.day_limit.value }}</span>
            </el-form-item>
            <el-form-item label="发行机构">
              <span>{{ props.row.publisher.value }}</span>
            </el-form-item>
            <el-form-item label="风险等级">
              <span>{{ props.row.risk.value }}</span>
            </el-form-item>
            <el-form-item label="结息方式">
              <span>{{ props.row.way.value }}</span>
            </el-form-item>
            <el-form-item label="备注">
              <span>{{ props.row.remark.value }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="产品 ID" prop="number.value" sortable width="100" class-name="proID"></el-table-column>
      <el-table-column label="产品名称" prop="designation.value" width="120"></el-table-column>
      <el-table-column label="年化利率" prop="rate.value" width="100"></el-table-column>
      <el-table-column label="产品期限" prop="time_limit.value" width="100"></el-table-column>
      <el-table-column label="计划销售起始时间" prop="plan_start_datetime.value" sortable width="160"></el-table-column>
      <el-table-column label="计划销售截止时间" prop="plan_end_datetime.value" sortable width="160"></el-table-column>
      <el-table-column label="产品总额" prop="total.value" width="100"></el-table-column>
      <el-table-column label="剩余额度" prop="stock.value" width="100"></el-table-column>
      <el-table-column align="center" fixed="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <!-- 跳转至新增产品页面，通过vuex默认填写已选数据 -->
          <el-button
            id="tableEdit"
            size="mini"
            type="danger"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import driverArg from "../../plugins/driver";

export default {
  name: "Table",
  data() {
    return {
      search: "",
      tableHeight: 300,
    };
  },
  computed: {},
  methods: {
    handleEdit() {
      // console.log(arguments);
      this.$store.commit("changeEdit");
      this.$router.replace({
        path: "/increase",
        query: {
          selectProduct: arguments[1],
        },
      });
    },
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {
    setTimeout(() => {
      // console.log("Table.vue is mounted");
      // console.log(document.getElementById("table").offsetHeight);
      this.tableHeight = document.getElementById("table").offsetHeight;
      if (this.$route.query.isDriver === true) {
        this.$driver.defindSteps(driverArg.tableDriver);
        this.$driver.start();
      }
    }, 300);
  },
};
</script>

<style scoped>
#table {
  width: 100%;
  height: 60%;
}
.table-expand {
  font-size: 0;
}
.table-expand label {
  width: 90px;
  color: #99a9bf;
}
.table-expand .el-form-item {
  padding-left: 60px;
  margin-right: 0px;
  margin-bottom: 0;
  width: 33%;
  border-bottom: 1px dotted rgb(190, 187, 187);
  border-right: 1px dotted rgb(190, 187, 187);
}
.table-expand span {
  color: black;
}
</style>