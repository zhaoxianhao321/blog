<template>
  <!-- 容器 -->
  <el-container>
    <!-- header -->
    <el-header>
      <Header></Header>
    </el-header>
    <!-- body -->
    <el-container>
      <router-view />
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
}
.el-container {
  display: flex;
}
.el-container > div {
  z-index: 3;
  position: relative;
  width: 100%;
}
</style>
