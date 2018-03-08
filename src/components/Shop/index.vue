<template>
    <div class="shop-container ">
      <div class="container">
        <div class="shop-btn-content">
          <el-button @click="shopBtnClick(1,'pn=1&ps=32')" :class="btnAction==1?'action':''">全部</el-button>
          <el-button @click="shopBtnClick(2,'pn=1&ps=32&cid=16')" :class="btnAction==2?'action':''">3C周边</el-button>
          <el-button @click="shopBtnClick(3,'pn=1&ps=32&cid=20')" :class="btnAction==3?'action':''">抱枕萌物</el-button>
          <el-button @click="shopBtnClick(4,'pn=1&ps=32&cid=22')" :class="btnAction==4?'action':''">梦100周边</el-button>
        </div>
        <div class="">
          <el-row :gutter="10">
            <el-col :span="6" v-for="(item,index) in shopData.records" :key="index">
              <shop-list-component :shopData="item" :key="index" :shopMsgClick="shopMsgClick"></shop-list-component>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="shop-bottom-bg"></div>
    </div>
</template>

<script>

import {Carousel,CarouselItem} from 'element-ui'
import ShopListComponent from './list/index'
import {get} from '../../fetch/get.js'
export default {
  name: 'mainShop',
  data () {
    return {
      shopList:false
    }
  },
  props:{
      shopBtnClick:Function,
      btnAction:Number,
      shopData:{type:[Array,Object]},
      shopMsgClick:Function
  },
  components:{
    'el-carousel':Carousel,'el-carousel-item':CarouselItem,'shop-list-component':ShopListComponent
  },
  methods:{
    //shopBtnClick:shopBtnClick

  },
  created:function(){
    console.log(this)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    
    .shop-bottom-bg{
      height: 228px;
      background-image: url(http://bmall.bilibili.com/static/img/bb-img.4de878f.png);
      background-position: 50% 100%;
          background-repeat: no-repeat;
      margin: 60px auto 0;
    
    }
    .shop-btn-content{
      margin:30px 0;
      text-align:left;
    }
    .shop-btn-content .el-button{
      height:60px;
      width:120px;
      position:relative;
    }
    .shop-btn-content .action{
      background:#20A0FF;
      color:#fff;
    }
    .shop-btn-content .action:before {
        content: '';
        position: absolute;
        left: 50%;
        margin-left: -8px;
        bottom: -2px;
        border: 8px solid transparent;
        border-bottom: 8px solid #fff;
    }
    .el-col {
      margin-bottom: 20px;
    }
</style>
