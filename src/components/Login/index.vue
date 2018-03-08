
<template>
    <div class="login-container">
       
        <div class="login-content">
            <div id="close" @click="handleClose"></div>
            <el-tabs v-model="activeName" @tab-click="handleTab">
                <el-tab-pane label="登陆" name="login">
                    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="0" class="demo-ruleForm">
                        <el-form-item  prop="account" >
                            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="请输入账号"></el-input>
                        </el-form-item>
                        <el-form-item  prop="pass" style="margin:0">
                            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item style="margin-bottom:5px;">
                            <el-switch v-model="savePass" inactive-text="记住密码" style="float:left;margin-top:9px;"></el-switch> <a href="javascript:" style="font-size:14px;float:right">忘记密码?</a>
                        </el-form-item >
                        <el-form-item>
                            <el-button id="loginBtn" @click="submitForm('ruleForm2')">登陆</el-button>
                        </el-form-item>
                    </el-form>
                
                </el-tab-pane>

            </el-tabs>
        </div>
        
    </div>
    
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
import {Switch} from 'element-ui'
Vue.use(Switch)
export default {
  name: 'Login',
  data(){

      return {
            activeName:'login',
            rules2:{
                pass: [
                   { required: true, message: '请输入密码', trigger: 'blur' },
                   { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                ],
                account:[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' }
                ]
            },
            ruleForm2: {
                pass: '',
                account: ''
            },
            savePass:true
      }
  },
  props:{
        loginHandle:Function
  },
  components:{
  
  },
  methods:{
     handleClose:function(){
        this.$store.dispatch('dispathLoginShow',false)
     },
     handleTab:function(){

     },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                this.loginHandle(this.ruleForm2)
                
            } else {
                return false;
            }
        });
    },
  },
  created:function(){

  },
}
</script>

<style>
    .login-container{
        width:100vw;
        height:100vh;
        overflow:hidden;
        background:rgba(0, 0, 0, 0.5);
        position:fixed;
        left:0;
        right:0;
        bottom:0;
        top:0;
        z-index:9999999999;
    }
    .login-content{
        background: url(https://static.hdslb.com/passport/img/mini-login/banner.jpg) left top no-repeat #fff;
        border-radius: 8px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
        width: 330px;
        padding: 25px 45px 0;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: -200px auto auto;
    }
    #close {
        background-image: url(https://static.hdslb.com/passport/img/mini-login/icons.png);
        background-position: -32px -2px;
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
        width: 29px;
        height: 29px;
    }
    #close:hover {
        background-color: #00a1d6;
    }
    #loginBtn{
            background: #00b5e5;
            width:100%;
            color:#fff;
    }
</style>
