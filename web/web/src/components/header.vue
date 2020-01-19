<template>
  <div class="main">
    <div
      class="header_img"
      :style="bg"
    > <img
        id="pic"
        src="../../static/index.jpg"
      >
    </div>
    <div class="navMenu">
      <el-row :gutter="20">
        <el-col
          :span="6"
          :offset="12"
          class="padding_top"
        >
          <span
            v-for="(item, index) in menuList"
            :key="index"
            class="text_font"
            @click="jump(item.redirectUrl)"
          >{{item.label}}</span>
        </el-col>
        <el-col
          :span="4"
          :offset="2"
          class="padding_top"
        >
          <span class="top_mar">个人github地址</span><img src="../../static/github.png">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as blogCustom from "@/assets/js/blog.config.js";

export default {
  data () {
    return {
      bg: {
        width: '100%',
        height: ''
      },
      menuList: blogCustom.head.menu,
    }
  },
  created () {
  },
  mounted () {
    this.bg.height = (document.body.clientWidth / 1920) * 1080 + 'px';
    window.onresize = () => {
      return (() => {
        this.bg.height = (document.body.clientWidth / 1920) * 1080 + 'px'; console.log(this.bg.height);
      })()
    }
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

<style lang="less" >
@import "../style/index.less";
.main {
  position: relative;
  height: 1080px;
}
.header_img {
  position: fixed;
  top: 0px;
  z-index: 1;
}
#pic {
  width: 100%;
}
.navMenu {
  z-index: 3;
  position: relative;
  width: 100%;
}
.padding_top {
  .padding_top_30;
}
.text_font {
  .text_font(#ffffff);
  margin-right: 16px;
  padding-bottom: 4px;
  &:hover {
    border-bottom: 2px solid;
  }
}
.big_title {
  z-index: 3;
  position: relative;
  top: 290px;
}
.big_text {
  font-size: 70px;
}
.red_color {
  color: @red-style;
}
.top_mar {
  margin-bottom: 8px;
}
</style>
