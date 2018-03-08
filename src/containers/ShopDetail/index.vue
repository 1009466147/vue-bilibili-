
<template>
<div>
    <main-header></main-header>
    <div class="main">
        <div style="float:left;width:500px;height:600px;">
            <img-detail :productRelate='shopDetailData?shopDetailData.productRelate:{}'></img-detail>
            
        </div>
        <div style="float:right;    width: 660px;padding-left: 60px;box-sizing:border-box;">
            <handle-detail :buyBtnHandle="buyBtnHandle":skuList='shopDetailData?shopDetailData.skuList[0]:{}' :shopNum="shopNum" :detailC="detail"  :addCart="addCart"@introduce="introduceSelf"></handle-detail>
        </div>
        <div style="clear:both">
            <shopDetailImg :htmlDescription="shopDetailData?shopDetailData.htmlDescription:''"></shopDetailImg>
        </div>
    </div>
    <main-footer></main-footer>
   
</div>
    
</template>

<script>
import  mainHeader from '../../components/Header'
import  mainFooter from '../../components/Footer'
import imgDetail from '../../components/ShopDetail/img'
import shopDetailImg from '../../components/ShopDetail/shopDetailImg'
import handleDetail from '../../components/ShopDetail/detailHandle'
import vuex from 'vuex'
import {getShopDetailData} from '../../fetch/shopDetailData/shopDetail.js'
import Router from 'vue-router'
import {SERVER_URL} from '../../../static/constant.js'
import {mapState} from 'vuex'

import {myCookies} from '../../tools/storageTool.js'
import {cartKey} from '../../constans/cart.js'
export default {
  name: 'shopDetail',
  data(){
      return {
           shopDetailData:false,
           shopNum:1,
           detail:''
      }
  },
  components:{
      mainHeader,mainFooter,
      imgDetail,handleDetail,
      shopDetailImg,
  },
  methods:{
      //cart 数据操作  目前存储在localStore
     cartDataHandle(isBuy){
        let shopCart=JSON.parse(myCookies.getCookie(this.userInfo.name+cartKey));
        //是否存在一条记录
        let blHas=false;
        //目标商品
        let shopDetailData=this.shopDetailData;
        let shopTarget=shopDetailData.skuList[0];

        //如果存在 并是个数组的话
        let cartIsArray=shopCart&&Array.isArray(shopCart);
        let shopMsg={
            amount:this.shopNum,
            attribute:shopDetailData.attribute+':'+this.detail,
            imgUrl:shopDetailData.imgUrl,
            inventory:shopTarget.skuInventory,
            originalPrice:shopTarget.oldPrice,
            price:shopTarget.salePrice,
            skuId:shopTarget.skuId,
            skuName:shopTarget.skuName,
            vipPrice:shopTarget.vipPlusPrice
        };
        if(cartIsArray){
            //遍历
            shopCart.map((item,index)=>{
                if(item.skuId==shopTarget.skuId){
                    ++shopCart[index].amount
                    blHas=true
                }
            })
            if(!blHas){
                shopCart.push(shopMsg)
            }
        }else{
            shopCart=[];
            //不存在则添加
            shopCart.push(shopMsg)
        }
        
        myCookies.setCookie(this.userInfo.name+cartKey,JSON.stringify(shopCart),15);
        if(isBuy){
            this.$store.dispatch('dispathCheckedData',{checkedData:[shopMsg]})
        }
     },
     addCart(){
        if(!this.detailHandle()){
            return
        }
        this.cartDataHandle();
        
     },
     buyBtnHandle(){
        if(!this.detailHandle()){
            return
        }
        this.cartDataHandle(true);
        this.$router.push('/cart/confirm')

     },
     detailHandle(){
        if(!this.userInfo.isLogin){
            //未登录
            this.$store.dispatch('dispathLoginShow',true)
            return false
        }else{
            //已登录
            if(!this.detail||this.shopNum<=0){
                //未选择款式  数量小于1
                
                 this.$alert('还有东西忘记选呢！', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                       
                    }
                });
                return false
            }
        }
        return true
     },
     introduceSelf(opt){
        this.shopNum=opt.num;
        this.detail=opt.detai;
     }
  },
  beforeCreate:function(){
    var shopId=this.$route.params.id;
    const result=getShopDetailData(shopId);
    result.then(res=>{
        return res.json()
    }).then(json=>{
        if(json.message=="success"){
            this.shopDetailData=json.result
        }else{
            window.location.href=SERVER_URL+'/404'
        }
    })
  },
  computed:mapState(
      [
          'userInfo','cart'
      ]
  ),//mapState({'isLogin':state=>state.userInfo.isLogin})
}
</script>

<style>
    .main{
        width:1160px;
        margin:0 auto;
        overflow:hidden;
        padding-top:30px;
    }
</style>
