<template>
  <div>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      layout="prev, pager, next, jumper"
      :total="total"
      :page-size="10"
      class="pagin"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: Number,
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    // handleSizeChange(val) {
    //   this.$emit("sorter", val);
    // },
    handleCurrentChange(val) {
      this.$emit('sorter', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagin {
  margin-top: 0.05rem;
}
</style>