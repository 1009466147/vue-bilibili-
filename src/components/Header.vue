<template>
    <div class="home-header">
        <div class="container">
            <el-row>
                <el-col :span="24">
                    <div class="float-left">
                        <router-link to="/"><a href="javascript:"><i class="el-icon-menu"></i>主站</a></router-link>
                        <a href="javascript:">画友</a>
                        <a href="javascript:">游戏中心</a>
                        <a href="javascript:">直播</a>
                        <el-badge value="new" class="new-badge">
                            <a href="javascript:">周边</a>
                        </el-badge>
                    </div>
                    <div class="float-right">
                        <template v-if="userInfo.isLogin">
                            <div>
                                <el-dropdown @command="handleCommand" style="cursor:pointer">
                                    <span class="el-dropdown-link">
                                        {{userInfo.name}}<i class="el-icon-caret-bottom el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item class="clearfix" command="clearCookie">
                                            清除cookie
                                            <el-badge class="mark"  />
                                        </el-dropdown-item>
                                        <el-dropdown-item class="clearfix" command="outLogin">
                                            退出
                                            <el-badge class="mark"  />
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>

                                <router-link to="/cart/check" target='_blank'><el-button type="primary"  size="small" :round="true" style="font-size:14px;padding:7px 12px;background:#f25d8e;border-color:#f25d8e">购物车</el-button></router-link>
                                <router-link to="/my-orders" target='_blank'><el-button type="primary"  size="small" :round="true" style="font-size:14px;padding:7px 12px;">我的订单</el-button></router-link>
                            </div>
                        </template>
                        <template v-else>
                            <div>
                                <a href="javascript:" @click="loginHandle()">登陆</a>
                                |
                                <a href="javascript:">注册</a>
                            </div>
                        </template>
                    </div>
                </el-col>
            </el-row>
        </div>
        <Login :show="global.loginShow"></Login>
  </div>
</template>

<script>
import {Router} from 'vue-router'

import {mapState} from 'vuex'
import Login from '../containers/Login/index'
import {Dropdown,DropdownMenu,DropdownItem} from 'element-ui'
import {cookieUserInfo} from '../constans/userInfoKey.js'
export default {
  name: 'Header',
  data () {
    return {
      
    }
  },
  components:{
    Login,
    'el-dropdown':Dropdown,
    'el-dropdown-menu':DropdownMenu,
    'el-dropdown-item':DropdownItem
  },
  created:function(){
      
    
  },
  methods:{
    loginHandle(){
        this.$store.dispatch('dispathLoginShow',true)
    },
    handleCommand(command){
        switch(command){
            case 'clearCookie':
                var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
                if(keys) {  
                    for(var i = keys.length; i--;)  
                        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
                }  
                this.$message('清除成功');
            break;
            case 'outLogin':
                document.cookie = cookieUserInfo + '=0;expires=' + new Date(0).toUTCString()  
                this.$store.dispatch('dispathLogin',{isLogin:false});
            break;
        }
    }
  },
  computed:mapState(
      [
          'userInfo','global'
      ]
  )
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .home-header{
        background:#fff;
        height:38px;
        line-height:38px;
        box-shadow: 2px 1px 2px rgba(0,0,0,.1);
    }
    a{
        font-size:12px;
        color:#222;
        padding:0 6px;
    }
    .el-icon-menu{
        font-size:14px;
        position:relative;
        top:1px;
        margin-right:4px;
    }
    .new-badge .el-badge__content{
        top: 10px;
        padding: 0px 2px;
        height: 14px;
        line-height: 14px;
    }
</style>
