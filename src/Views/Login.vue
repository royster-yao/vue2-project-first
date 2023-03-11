<template>
  <div class="login-bg">
    <el-form
      ref="form"
      label-with="70px"
      :inline="true"
      class="login-container"
      :model="form"
      :rules="rules">
      <img src="../assets/user.jpg" alt="" />
      <h3 class="login_title">系统登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密 码" prop="password">
        <el-input
          style="margin-left: 10px"
          type="password"
          v-model="form.password"
          placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="sumbit"
          style="margin-left: 105px; margin-top: 10px"
          type="primary"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Cookie from "js-cookie"
import { getMenu } from "../api"
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, tigger: "blur", message: "请输入用户名" }],
        password: [{ required: true, tigger: "blur", message: "请输入密码" }],
      },
    }
  },

  methods: {
    sumbit() {
      // const token = Mock.Random.guid()
      // Cookie.set("token", token)
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            console.log(data)
            if (data.code === 20000) {
              Cookie.set("token", data.data.token)
              this.$router.push("/home")
            } else {
              this.$message.error(data.data.message)
            }
          })
        }
      })
    },
  },
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.login-bg {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: url(../assets/bgi.jpeg) no-repeat;

  .login-container {
    position: relative;
    backdrop-filter: blur(5px);
    width: 350px;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    img {
      position: absolute;
      top: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    img:hover {
      width: 80px;
      height: 80px;
    }
    .el-form-item__label {
      color: #fff;
    }
    .login_title {
      text-align: center;
      margin-bottom: 40px;
      color: #fff;
    }
    .el-input {
      width: 198px;
    }
  }
}
</style>
