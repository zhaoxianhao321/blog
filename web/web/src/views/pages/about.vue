<template>
  <div class="flex_1">
    <el-row :gutter="20">
      <el-col
        :offset="3"
        :span="4"
      >
        <div>
          <img
            src="../../../static/github.jpg"
            class="pic_mid"
          /><br />
          <span class="line"></span><br />
          <span>本人的github地址</span>
        </div>
      </el-col>
      <el-col
        :offset="1"
        :span="4"
      >
        <div>
          <img
            src="../../../static/apple.png"
            class="pic_mid"
          /><br />
          <span class="line"></span><br />
          <span>CSDN论坛</span>
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
          <span>本博客采用技术栈vue+element+axios+node.js+mysql</span>
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
    }
  },
  created () {
  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style lang="less"  scoped>
@import "../../style/index.less";
.flex_1 {
  flex: 1;
  top: 160px;
}
.el-col > div {
  width: 100%;
  height: 500px;
  background: #000000;
  border-radius: 6px;
  transform: perspective(200px) rotateY(0);
  transition: 1s all ease;
  &:hover {
    transform: perspective(600px) rotateY(10deg);
  }
}
.pic_mid {
  width: 260px;
  height: 260px;
}
.line {
  display: inline-block;
  height: 90px;
  border: 2px solid white;
  border-radius: 10px;
  margin: 4px 0;
}
</style>