<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row>
        <el-col
          :span="9"
          :offset="7"
        >
          <div>
            <el-form
              ref="form"
              :model="form"
              label-width="80px"
            >
              <el-form-item label="用户名">
                <el-input v-model="form.user"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="form.pass"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="onSubmit"
                >提交</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        user: '',
        pass: '',
      }
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('login', { data: 1 })
    }
  }
}
</script>

<style scoped>
@import url("../assets/css/m.css");
</style>
