<template>
  <!-- 容器 -->
  <el-container class="container">
    <!-- header -->
    <el-header class="header">
      <div class="content">
        <img
          id="header-img"
          src="../../static/header-img.jpg"
        >
        <div class="center_text">
          <span>一个Swag的BLOG</span>
        </div>
      </div>
    </el-header>
    <!-- body -->
    <el-container class="body">

      <!-- 主页面 -->
      <el-main class="main">
        <div class="menu">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <!-- 这里的name与path要与router/index中的配置一样 -->
            <el-menu-item index="1">
              <span slot="title">
                <!-- 用path跳转，要用query，目标页面用this.$route.query获取参数 -->
                <!-- to的值可以是一个字符串，直接用path地址 -->
                <router-link :to="{path:'/Login',query:{msg:'我是pro1'}}"><span class="router_text">登陆</span></router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">
                <!-- 用name跳转的时候，url中不带参数，无法看到传参 -->
                <!-- 用name跳转，要用params，目标页面要用this.$route.params获取 -->
                <!-- to 的值可以是描述位置的对象，这里用path跳转的时候用query对象传参 -->
                <router-link :to="{name:'userMsg',params:{msg:'我是userMsg'} }"><span class="router_text">文章</span></router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="3">
              <!-- 编程式导航 -->
              <span
                slot="title"
                @click="jump"
              >
                <span class="router_text">个人信息</span>
              </span>
            </el-menu-item>
          </el-menu>
        </div>

        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "layout",
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    jump () {
      this.$router.push({ name: 'pro2', params: { msg: 'i am pro2' } })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less" scoped>
@import "../style/index.less";
.content {
  .text_font(@color-style);
  border-bottom: 1px solid #c0c4cc;
  height: 100%;
}
#header-img {
  height: 299px;
  width: 616px;
  float: left;
}
.header {
  height: 300px !important;
}
.container {
  margin: 0 300px;
  background: white;
  height: 100%;
}
.router_text {
  .text_font(#c0c4cc);
  &:hover {
    color: @color-style;
  }
}
.center_text {
  .center;
  height: 100%;
}
.el-menu-demo {
  .center;
}
</style>