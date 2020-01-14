<template>
  <div class="container">
    赵先昊pro1{{msg}}
  </div>
</template>

<script>
export default {
  name: "pro1",
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = this.$route.query.msg;
  }
}
</script>