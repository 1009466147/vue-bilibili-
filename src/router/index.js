import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home/index.vue'
import ShopDetail from '../containers/ShopDetail/index.vue'
import NotFind from '../containers/404.vue'
import Cart from '../containers/Cart/index.vue'
import Check from '../containers/Cart/subpage/check.vue'
import Confirm from '../containers/Cart/subpage/confirm.vue'
import LoginView from '../containers/Login/loginView.vue'
import MyOrders from '../containers/MyOrders/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shopDetail/:id',
      name: 'shopDetail',
      component: ShopDetail
    },
    {
      path:'/login',
      component:LoginView
    },
    {
      path:'/cart',
      component:Cart,
      meta: {
        requireLogin:true,
      },
      children:[
        {
          path:'check',
          meta: {
            requireLogin:true,
          },
          component:Check
        },
        {
          meta: {
            requireLogin:true,
          },
          path:'confirm',
          component:Confirm
        }
      ]
    },
    {
      path:'/my-orders',
      component:MyOrders,
      meta: {
        requireLogin:true,
      }
    },
    
    {
      path:'*',
    
      component:NotFind
    },
  ]
})
