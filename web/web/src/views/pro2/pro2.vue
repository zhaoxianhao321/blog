<template>
  <div class="container">
    赵先昊pro2{{msg}}
  </div>
</template>

<script>
export default {
  name: "pro2",
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = this.$route.params.msg;
  }
}
</script>