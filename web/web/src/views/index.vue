<template>
  <!-- 容器 -->
  <el-container>
    <!-- header -->
    <el-header>
      <Header></Header>
    </el-header>
    <!-- body -->
    <el-container>
      <div class="right"></div>
      <router-view />
      <div class="left"></div>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../components/header"
export default {
  components: {
    Header,
  }
}

</script>

<style lang="less" scoped>
.el-header {
  padding: 0px !important;
  height: 115px !important;
}
.el-container {
  display: flex;
}
.right,
.left {
  width: 300px;
  height: 100px;
}
</style>
