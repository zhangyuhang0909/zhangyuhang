<template>
  <div>
    <el-h3 class="user-header">用户列表</el-h3>
    <el-table :data="list" stripe border style="width: 100%" class="borx">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="updateTime" label="注册时间" width="180">
        <template slot-scope="scope">{{scope.row.updateTime|datefmt('YYYY-MM-DD HH:mm:ss')}}</template>
      </el-table-column>
    </el-table>
    <Pagination :total="total" v-on:sorter="handleCurrentChange"></Pagination>
  </div>
</template>

<script>
import { User } from "@/request/http";
import { List } from "@/request/http";
import Pagination from "../../../common/Pagination";
export default {
  name: "User",
  components: {
    Pagination
  },
  data() {
    return {
      list: [],
      total: 0,
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
      ]
    };
  },
  created() {
    User({pageNum:1}).then(msg => {
      // console.log(msg.data.data.list);
      this.list = msg.data.data.list;
      this.total=msg.data.data.total
    });
  },
  methods: {
    handleCurrentChange(val) {
      List(val).then(data => {
        this.list = data.data.data.list;
        console.log(data.data.data.list);

      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/Scss/index.scss";
.user-header {
  @include FontOnly(0.12rem);
  // color: red;
  // margin-top: 0.5rem;
}
.borx {
  margin-top: 0.05rem;
}
</style>