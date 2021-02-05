<template>
  <div>
    <el-h3 class="order-header">订单页面</el-h3>
    <el-form :inline="true" :model="formInline" label-width="50px" class="demo-form-inline">
      <el-form-item>
        <el-select v-model="formInline.region" placeholder="按订单号查询">
          <el-option label="按订单号查询" value="dingdan"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formInline.user" placeholder="订单号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" border stripe style="width: 100%">
      <el-table-column prop="orderNo" label="订单号" width="180"></el-table-column>
      <el-table-column prop="receiverName" label="收件人" width="180"></el-table-column>
      <el-table-column prop="statusDesc" label="订单状态"></el-table-column>
      <el-table-column prop="payment" label="订单总价"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="address" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import {Orders} from "@/request/http"
export default {
  name: "Order",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      list:[],
      total:""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    orders(){
        Orders({pageNum:1}).then(msg=>{
            console.log(msg)
            this.list=msg.data.data.list
            this.total=msg.data.data.total
        })
    }
  },
  mounted() {
      this.orders()
  },
};
</script>

<style lang="scss" scoped>
@import "@/Scss/index.scss";
.order-header {
  @include FontOnly(0.12rem);
}
.demo-form-inline {
  @include Mlt(0px, 0.1rem);
}
</style>