<template>
  <!-- 容器 -->
  <el-container class="container">
    <!-- header -->
    <el-header class="header">header</el-header>
    <!-- body -->
    <el-container class="body">
      <!-- 导航栏 -->
      <el-aside class="aside">
        <ul>
          <!-- 这里的name与path要与router/index中的配置一样 -->
          <li>
            <!-- 用path跳转，要用query，目标页面用this.$route.query获取参数 -->
            <!-- to的值可以是一个字符串，直接用path地址 -->
            <router-link :to="{path:'/pro1',query:{msg:'我是pro1'}}">pro1</router-link>
          </li>
          <li>
            <!-- 用name跳转的时候，url中不带参数，无法看到传参 -->
            <!-- 用name跳转，要用params，目标页面要用this.$route.params获取 -->
            <!-- to 的值可以是描述位置的对象，这里用path跳转的时候用query对象传参 -->
            <router-link :to="{name:'userMsg',params:{msg:'我是userMsg'} }">msg</router-link>
          </li>
          <!-- 编程式导航 -->
          <li @click="jump"> pro2</li>
        </ul>
      </el-aside>
      <!-- 主页面 -->
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "layout",
  methods: {
    jump () {
      this.$router.push({ name: 'pro2', params: { msg: 'i am pro2' } })
    }
  }
}
</script>
<style scoped>
</style>