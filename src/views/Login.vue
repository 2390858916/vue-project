<template>
    <div>
      <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
        <h3 class="logintitle">登录</h3>
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" auto-complete="false" placeholder="点击图片更换验证码" style="width: 200px;margin-right: 5px"></el-input>
          <img :src="loginurl">
        </el-form-item>
        <el-checkbox style="margin-bottom: 10px" v-model="checked">记住我</el-checkbox>
        <el-button type="primary" style="width: 100%" @click="submitlogin">登录</el-button>
      </el-form>
    </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      loginurl:'',
      checked:true,
      loginForm:{
        username:'',
        password:'',
        code:''
      },
      rules:{
        username:[{required:true,message:'请输入用户名',trigger:'blur'}],
        password:[{required:true,message:'请输入密码',trigger:'blur'}],
        code:[{required:true,message:'请输入验证码',trigger:'blur'}]
      }
    }
  },
  methods:{
    submitlogin(){
      this.$refs.loginForm.validate(valid=>{
        if(valid){

        }else{
          this.$message.error('错误')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.loginContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  border: 1px solid #c9bebe;
  box-shadow: 0 0 25px #c9c5c6;
}.logintitle{
  margin: 0px auto 15px auto;
  text-align: center;
 }
</style>