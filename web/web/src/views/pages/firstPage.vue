<template>
  <div class="flex_1">
    <el-row :gutter="20">
      <el-col
        :offset="3"
        :span="4"
      >
        <div>
          <a
            href="https://github.com/zhaoxianhao321"
            target="_blank"
          > <img
              src="../../../static/github.jpg"
              class="pic_mid"
            /><br />
            <span class="line"></span><br />
            <span class="white_color">本人的github地址</span> </a>
        </div>
      </el-col>
      <el-col
        :offset="1"
        :span="4"
      >
        <div>
          <a
            href="https://blog.csdn.net/weixin_42520375"
            target="_blank"
          > <img
              src="../../../static/apple.png"
              class="pic_mid"
            /><br />
            <span class="line"></span><br />
            <span class="white_color">CSDN论坛</span> </a>
        </div>
      </el-col>
      <el-col
        :offset="1"
        :span="4"
      >
        <div>
          <img
            src="../../../static/haizei.png"
            class="pic_mid"
          /><br />
          <span class="line"></span><br />
          <span>这个博客土爆了</span>
        </div>
      </el-col>
      <el-col
        :offset="1"
        :span="4"
      >
        <div>
          <img
            src="../../../static/github.jpg"
            class="pic_mid"
          /><br />
          <span class="line"></span><br />
          <span>WeiFang University</span><br />
          <span>4316</span><br />
          <span>5号床</span><br />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import * as blogCustom from "@/assets/js/blog.config.js";

export default {
  data () {
    return {
      menuList: blogCustom.head.menu,
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    jump (url) {
      this.$router.push({
        path: url
      })
    }
  },
}
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.flex_1 {
  background: #303133;
  flex: 1;
  top: 160px;
  padding: 100px 0;
}
.el-col > div {
  width: 100%;
  height: 330px;
  background: #000000;
  border-radius: 6px;
  transform: perspective(200px) rotateY(0);
  transition: 1s all ease;
  &:hover {
    transform: perspective(600px) rotateY(20deg);
  }
}
.pic_mid {
  width: 100px;
  height: 100px;
}
.line {
  display: inline-block;
  height: 90px;
  border: 2px solid white;
  border-radius: 10px;
  margin: 4px 0;
}
.white_color {
  color: white;
}
a {
  text-decoration: none;
}
</style>
