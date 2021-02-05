<template>
  <div>
    <el-col class="left">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="-1"></el-menu-item>
        <el-menu-item index="1" @click="go('/')">
          <i class="el-icon-s-data"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-operation"></i>
            <span>商品</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="go('/home/product')">商品管理</el-menu-item>
            <el-menu-item index="2-2" @click="go('/home/category')">品类管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-finished"></i>
            <span>订单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="go('/home/order')">订单管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>用户</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1" @click="go('/home/user')">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <div class="todd">
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon-user-solid"></i>
          欢迎，admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" style="margin-top:-0.05rem">
          <el-dropdown-item style="padding:0.05rem;">
            退出登录
            <el-button type="danger" @click="go('/login')">请点击</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="dos">
      <div class="do"></div>
      <div class="rigs">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Home",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // gologin() {
    //   this.$router.push("/login");
    //   //   alert(1);
    // },
    // goproduct() {
    //   this.$router.push("/home/product");
    // },
    // gocategory() {
    //   this.$router.push("/home/category");
    // },
    // goindex() {
    //   this.$router.push("/");
    // },
    // goorder() {
    //   this.$router.push("/home/order");
    // },
    // gouser() {
    //   this.$router.push("/home/user");
    // },
    go(id) {
      this.$router.push(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 10rem;

  .el-menu-item {
    height: 0.2rem;
    line-height: 0.2rem;
    box-sizing: border-box;
  }
  .element {
    box-sizing: border-box;
  }
  .el-submenu {
    // height: 0.2rem;
    line-height: 0rem;
    padding: 0.05rem 0;
  }
}
.todd {
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 2px #ccc;
  height: 0.2rem;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  .el-dropdown {
    float: right;
    line-height: 0.2rem;
    margin-right: 0.2rem;
  }
}

.left {
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 3;
  width: 18%;
  box-sizing: border-box;
}

.dos {
  width: 100%;
  display: flex;
  .do {
    width: 18%;
  }
  .rigs {
    width: 82%;
    background: #eee;
    padding-top: 0.2rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    box-sizing: border-box;
    height: 25rem;
    // margin-left:25%;
  }
}
</style>