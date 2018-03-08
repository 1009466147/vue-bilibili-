// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select ,Option,OptionGroup,Row,Col,Badge,Tabs,TabPane,InputNumber,FormItem,Form,Input,MessageBox,Dialog,Table,TableColumn,Message  } from 'element-ui'
import './static/comm.css'
import Header from './components/Header.vue'
import store from './store/index'
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(Header)
Vue.use(Badge)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(InputNumber)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.config.productionTip = false
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message;
/* eslint-disable no-new */
import {myCookies} from './tools/storageTool.js'
import {cookieUserInfo} from './constans/userInfoKey.js'


//自动登陆操作
const cUserInfo=JSON.parse(myCookies.getCookie(cookieUserInfo));
if(cUserInfo&&cUserInfo.une&&cUserInfo.pwd){
    store.dispatch('dispathLogin',{name:cUserInfo.une,isLogin:true})
}
//拦截器
router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin) {  // 判断该路由是否需要登录权限
        if (store.state.userInfo.isLogin) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App}
})
