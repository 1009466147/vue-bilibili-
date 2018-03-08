
<template>
<div>
    <main-header></main-header>
    <div>又是一遍login。。。。 直接调用弹窗了</div>
    <LoginComponent v-show="true" :loginHandle="loginHandle"></LoginComponent>
   
    <main-footer></main-footer>
 </div>
</template>

<script>
import LoginComponent from '../../components/Login/index'
import {login} from '../../fetch/Login/login.js'
import {mapState} from 'vuex'
import {myCookies} from '../../tools/storageTool.js'
import {cookieUserInfo} from '../../constans/userInfoKey.js'
import  mainHeader from '../../components/Header'
import  mainFooter from '../../components/Footer'
import Router from 'vue-router'
export default {
  name: 'Login',
  data(){
      return {
           
      }
  },
  components:{
     LoginComponent,
     mainHeader,
      mainFooter,
  },
  props:{
        default: function () {
            return false
        }
  },
  methods:{
     getShopDetailData:function(){

     },
     loginHandle:function(data){
        // console.log(login({userid:data.account,pwd:data.pass,cType:2,vcType:2}))
        // 此接口还需要调取验证接口过于麻烦 直接模拟登陆成功
        this.$store.dispatch('dispathLogin',{isLogin:true,name:data.account});
        myCookies.setCookie(cookieUserInfo,JSON.stringify({une:data.account,pwd:data.pass}),1);
        const redirect=this.$route.query.redirect;
        this.$router.push(redirect||'/');
     }
  },
  
  created:function(){
    if(this.userInfo.isLogin){
        const redirect=this.$route.query.redirect;
        this.$router.push(redirect||'/');
        
    }
  },
  computed:mapState(
      [
          'userInfo','global'
      ]
  )
}
</script>

<style>

</style>
