
<template>
    <div class="box">
        <div class="login">
            <div class="login_box">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <p class="logon_title">欢迎登录 - MMALL管理系统</p>
                    <el-form-item prop="pass">
                        <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item prop="checkPass">
                        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="logon()">登录</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { login } from "@/request/http";
    export default {
        name : "Login",
        data() {
            var validatePass = (rule,value,callback)=>{
                if (value==="") {
                    callback(new Error("请输入账户"))
                }
            }
            var validatePass2 = (rule,value,callback)=>{
                if (value==="") {
                    callback(new Error("请输入密码"))
                }
            }
            return {
                ruleForm:{
                    username:"admin",
                    password:"admin"
                },
                username:"",
                password:"",
                rules:{
                    pass:[{validator:validatePass,trigger:"blur"}],
                    checkPass:[{validator:validatePass2,trigger:"blur"}]
                },
              
            };
        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate(valid=>{
                    if (valid) {
                        alert("submit!")
                    } else {
                        console.log("error submit!")
                        return false
                    }
                })
            },
            logon(){
                console.log(this.ruleForm)
                login(this.ruleForm)
                .then(data=>{
                    console.log(data)
                    if (data.data.status==0) {
                        localStorage.setItem("admin",this.ruleForm.username)
                        this.$router.push("/")
                        this.$message(data.data.msg)
                    }else{
                        this.$message(data.data.msg)
                    } 
                })
            },
        },
        created(){
            // localStorage.setItem("admin",JSON.stringify(this.local))
        }
    }
</script>

<style lang="scss" scoped>

@import "@/Scss/index.scss";
.login {
  @include SizeBack(100%, 100%, #f3f3f3);
  box-sizing: border-box;
  padding:0.48rem 0 0.9rem 0;
}
.login_box {
  @include SizeBack(30%, 30%,rgb(250, 244, 244));
  @include Pd(10px 15px 20px);
  margin: 0 auto;
}
.logon_title {
  @include FontOnly(0.12rem);
  margin-bottom: 10px;
}
.el-button {
  width: 100%;
  background: #337ab7;
  @include FontOnly(20px);
}


</style>