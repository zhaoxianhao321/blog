<template>
  <!-- 容器 -->
  <el-container>
    <!-- header -->
    <el-header>
      <Header></Header>
    </el-header>
    <!-- body -->
    <el-container>
      <div class="right">
        <div class="right_block">
          <div class="block_top">潮流电影</div>
          <div class="whole_img">
            <img src="../../static/moive.jpg">
          </div>
        </div>
        <div class="right_block">
          <div class="block_top">精神小伙</div>
          <div class="whole_img">
            <img src="../../static/swagger.jpg">
          </div>
        </div>
        <div class="right_block">
          <div class="block_top">周边买卖</div>
          <div class="whole_img">
            <img src="../../static/zhoubian.jpg">
          </div>
        </div>
      </div>
      <router-view />
      <div class="left">
        <div class="left_block">
          <div class="block_top">世界名画</div>
          <div class="long_img">
            <img src="../../static/art.png">
          </div>
        </div>
      </div>
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
.whole_img {
  img {
    width: 274px;
    height: 274px;
  }
}
.block_top {
  background: pink;
  text-align: center;
  font-size: 33px;
  font-family: cursive;
  color: darkblue;
}
.right_block,
.left_block {
  margin: 13px;
}
.long_img{
   img {
    width: 274px;
    height: 387px;
  }
}
</style>
