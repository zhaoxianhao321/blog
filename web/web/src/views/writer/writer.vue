<template>
  <div class="flex_1">
    <div class="context">
      <div>
        <div class="blue"></div><span>标题</span>
      </div>
      <div>
        <span>1222222222222222222222222222222222222222222222fadsfadfafdsfadadf</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userMsg",
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.flex_1 {
  background: #303133;
  flex: 1;
  top: 160px;
  padding: 100px 0;
}
.context {
  background: #f6f6f8;
  margin: 50px 150px;
  border-radius: 10px;
}
.blue{
    float: left;
    background: #4FA1DD;
    height: 20px;
    width: 16px;
    border-radius: 10px 0 0 0;
}
</style>