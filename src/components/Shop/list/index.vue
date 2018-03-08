<template>
    <div class="shop-list-container "@click="shopMsgClick(shopData.skuId)">
        <el-card :body-style="{ padding: '0px',cursor:'pointer'}" >
            <img :src="shopData.imgUrl" class="image" style="height:260px">
            <div style="padding: 14px;">
                <span class="shop-title">{{shopData.title}}</span>
                <div class="bottom clearfix">
                    <time class="shop-price">￥{{ shopData.salvePrice }}</time>

                </div>
            </div>
        </el-card>
    </div>
</template>

<script>

import {Carousel,CarouselItem,Card} from 'element-ui'
export default {
  name: 'ShopList',
  props:{
      shopData:Object,
      shopMsgClick:Function
  },
  components:{
    'el-card':Card
  },
  methods:{
    shopBtnClick:function(id){

    }
  },
  created:function(){
    //   console.log()
  }
}

</script>
<style>
    .shop-title{
        text-align:left;
        margin: 8px 0;
        height: 42px;
        line-height: 22px;
        font-size: 16px;
        color: #222;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .shop-title:hover{
        color:#f25d8e;
    }
    .shop-price{
        text-align:left;
        font-size:18px;
        display:block;
        color:#f66;
        font-weight:bold;
    }
    
</style>