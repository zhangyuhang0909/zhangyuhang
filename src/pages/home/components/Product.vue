<template>
  <div>
    <div class="header">
      <el-h3 class="shop">商品管理</el-h3>

      <el-button type="primary">
        <i class="el-icon-share"></i>
        添加商品
      </el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/Scss/index.scss";
.header {
  @include FlexSpace();
  margin-top: 0.1rem;
  .shop {
    @include FontOnly(0.12rem);
  }
}
</style>