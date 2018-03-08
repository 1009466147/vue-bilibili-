
<template>
    <LoginComponent v-show="show" :loginHandle="loginHandle"></LoginComponent>
    
</template>

<script>
import LoginComponent from '../../components/Login/index'
import {login} from '../../fetch/Login/login.js'
import {mapState} from 'vuex'
import {myCookies} from '../../tools/storageTool.js'
import {cookieUserInfo} from '../../constans/userInfoKey.js'
export default {
  name: 'Login',
  data(){
      return {
           
      }
  },
  components:{
     LoginComponent
  },
  props:{
        show:Boolean,
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
        this.$store.dispatch('dispathLoginShow',false);
        myCookies.setCookie(cookieUserInfo,JSON.stringify({une:data.account,pwd:data.pass}),1);
     }
  },
  
  created:function(){

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
