<template>
  <div
    class="container"
    @click="btn()"
  >
    赵先昊{{msg}}
  </div>
</template>

<script>
export default {
  name: "userMsg",
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = this.$route.params.msg;
  },
  methods: {
    btn () {
      this.$api.post('/a', this.msg);
    }
  }
}
</script>