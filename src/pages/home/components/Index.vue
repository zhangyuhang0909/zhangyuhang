<template>
  <div class="qqq">
    <h3>首页</h3>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="11" >
        <div class="grid-content bg-purple-light" style="background: #F0AF54;" @click="go('/home/user')">
          <p>{{this.userCount}}</p>
          <div>
            <i class="el-icon-user"></i>
            用户总数
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="11" >
        <div class="grid-content bg-purple-light" style="background: #6CBE6C;" @click="go('/home/product')">
          <p>{{this.productCount}}</p>
          <div>
            <i class="el-icon-s-operation"></i>
            商品总数
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="11" >
        <div class="grid-content bg-purple-light" style="background: #5DB8D3;" @click="go('/home/order')">
          <p>{{this.orderCount}}</p>
          <div>
            <i class="el-icon-finished"></i>
            订单总数
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import { HomeRight } from "@/request/http"
export default {
  data(){
    return{
      orderCount:"",
      productCount:"",
      userCount:""
    }
  },
  created(){
    HomeRight.then(data=>{
      console.log(data.data.data)
      let list=data.data.data;
      this.orderCount=list.orderCount;
      this.productCount=list.productCount;
      this.userCount=list.userCount
    })
  },

  methods: {
    go(id){
      this.$router.push(id);
    },
  
  }
};
</script>

<style lang="scss" scoped>

h3 {
  font-size: 0.15rem;
}
.el-col {
  border-radius: 4px;
  margin-right:0.15rem;
  // box-sizing: border-box;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
 
  display: flex;
  border-radius: 4px;
  min-height: 36px;
  height: 0.6rem;
  margin-right: 0rem;
  margin-top: 0.1rem;
  transition: all 0.4s;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  p {
    color: #fff;
    font-size: 0.3rem;
    width: 100%;
    text-align: center;
    padding-top: 0rem;
  }
  div {
    font-size: 0.1rem;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: -0.1rem;
  }
}

.grid-content:hover {
  transform: scale(1.1);
  p,
  div {
    color: #000;
  }
}

</style>