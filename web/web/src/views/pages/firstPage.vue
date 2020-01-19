<template>
  <div class="flex_1">
    <div class="big_title">
      <el-row :gutter="20">
        <el-col
          :span="12"
          :offset="6"
        >
          <span>Premature optimization is the root of all evil!</span><br />
          <span class="big_text">过早的优化是<span class="red_color">万恶之源</span>。</span>
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
@import "../../style/index.less";
.flex_1 {
  flex: 1;
}
</style>
