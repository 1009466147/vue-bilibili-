
<template>
<div>
    <main-header></main-header>
    <div class="shop-container">
        <div class="top-banner"><div class="word">我的订单</div><div class="head-img"></div></div>
    </div>
    <order-component :orderList="orderList" ></order-component>
    <main-footer></main-footer>
</div>
    
</template>

<script>
import  mainHeader from '../../components/Header'
import  mainFooter from '../../components/Footer'
import {myCookies} from '../../tools/storageTool.js'
import {mapState} from 'vuex'
import OrderComponent from '../../components/Order/index'
export default {
  name: 'MyOrders',
  data(){
      return {
           orderList:[]
      }
  },
  components:{
      mainHeader,
  
      mainFooter,
      OrderComponent
  },
  methods:{

  },
  created:function(){
    let ordersData=JSON.parse(myCookies.getCookie(this.userInfo.name+'orders'))||[];
    this.orderList=ordersData
  },
  computed:mapState([
      'userInfo'
  ])
}
</script>

<style>
    .shop-container{
        width:1160px;
        text-align:left;
        margin:0 auto;
    }
    .top-banner{
        position:relative;
    }
    .top-banner .word {
        width: 1160px;
        border-bottom: 1px solid #d3d8e0;
        font-size: 24px;
        padding: 10px 0;
        margin: 75px 0 50px;
        text-indent: 110px;
    }
    .top-banner .head-img {
        position: absolute;
        bottom: -15px;
        left: 0;
        width: 120px;
        height: 120px;
        background: url(http://bmall.bilibili.com/static/img/icons.b2c72e4.png) -329px -388px no-repeat;
    }
</style>
