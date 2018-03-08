
<template>
<div>
    <cart-head-view viewType="confirm"></cart-head-view>
    <address-info :active="activeAddress" :toggleActive="toggleActive"></address-info>
    <div class="section-title">
        <i class="el-icon-document"style="margin-right: 8px; color: #b8c0cc"></i>
        <span>订单信息</span>
    </div>
    <el-table
        :data="gridData||[]"
        border
   
        ref="cartTable"
        style="width: 100%">
        <el-table-column
            label="商品"
            width="500"
            align="center">
            <template slot-scope="scope">
                <div class="goods-item">
                    <div class="v-middle m-20">
                        <router-link :to="'/shopDetail/'+scope.row.skuId">
                            <img class="goods-img dp-b" :src="scope.row.imgUrl">
                        </router-link>
                    </div>
                    <div class="v-middle border-box title-ctnr m-20">
                        <router-link class="title text-hide" :to="'/shopDetail/'+scope.row.skuId">{{scope.row.skuName}}</router-link>
                        <router-link class="spec text-hide" :to="'/shopDetail/'+scope.row.skuId">{{scope.row.attribute}}</router-link>
                    </div>
                </div>
            </template>
        </el-table-column>
        <el-table-column
            prop="price"
            label="单价"
            align="center">
        </el-table-column>
        <el-table-column
            prop="amount"
            sortable
            label="购买数量"
            width="150"
            align="center">
            <template slot-scope="scope">
                <div>
               {{scope.row.amount}}
               </div>
            </template>
        </el-table-column>
        <el-table-column
            prop="amount2"
            sortable
            label="小计"
            align="center">
            <template slot-scope="scope">
                <span>￥{{scope.row.price*scope.row.amount}}</span>
            </template>
        </el-table-column>
    </el-table>
    <div style="margin-bottom: 40px;" class="f-clear" >
        <div class="summary-panel t-r f-right"style="min-width:326px;" >
            <div class="text-section">
                <span class="label">总价：</span>
                <span class="value">￥
                {{allPrice}}</span>
            </div>
            <div class="text-section">
                <span class="vip-hint dp-ib v-bottom" style="display: none;">
                    <span class="triangle"></span>
                </span>
                <span class="label">优惠：</span>
                <span class="value">-￥{{discounts}}</span>
            </div>
            <div class="text-section">
                <span class="label">总计：</span>
                <span style="font-size: 40px" class="value">￥{{totalPrice}}</span>
            </div>
            <div class="btn-ctnr">
                <el-button type="info" plain @click="goPayHandle" class="colored" :disabled="gridData.length<=0||false" style="margin-right: 16px; font-size: 16px; width: 170px; height: 50px;">去付款</el-button>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import CartHeadView from '../../../components/Cart/headView'
import AddressInfo from '../../../components/Cart/addressInfo'
import {mapState} from 'vuex'
import {myCookies} from '../../../tools/storageTool.js'
import jsApi from '../../../tools/jsApi.js'
import {cartKey} from '../../../constans/cart.js'
export default {
  name: 'Confirm',
  data(){
      return {
            gridData:[],
            activeAddress:0,
            allPrice:0,
            discounts:0,
            totalPrice:0   
      }
  },
  components:{
    CartHeadView,AddressInfo
  },
  methods:{
    buildOrderNum(){
        let dateNum=jsApi.format(new Date(),"yyyyMMddhhmmss");
        return dateNum+''+(Math.floor(Math.random()*90000000)+10000000)
    },
    goPayHandle(){
        if(this.activeAddress===''){
            this.$message.error('请选择一条地址');
            return 
        }
        let ordersData=JSON.parse(myCookies.getCookie(this.userInfo.name+'orders'))||[];
        let result={
            grid:this.gridData,
            date:jsApi.format(new Date(),"yyyy-MM-dd hh:mm:ss"),
            ordersNum:this.buildOrderNum(),
            address:this.userInfo.address[this.activeAddress]
        }
        let cookieData=[result].concat(ordersData)
        myCookies.setCookie(this.userInfo.name+'orders',JSON.stringify(cookieData),30);

        let cartData=JSON.parse(myCookies.getCookie(this.userInfo.name + cartKey));
        this.gridData.map((gItem,gIndex)=>{
            cartData.map((cItem,cIndex)=>{
                if(gItem.skuId===cItem.skuId){
                    cartData[cIndex]['amount']-=gItem['amount'];
                    if(cartData[cIndex]['amount']<=0){
                        cartData.splice(cIndex,1);
                    }
                }
            })
        })
        


        myCookies.setCookie(this.userInfo.name + cartKey,JSON.stringify(cartData),30);

        this.$confirm('请在新的页面中完成支付', '提示', {
            confirmButtonText: '支付成功',
            type: 'warning',
            showClose:false,
            showCancelButton:false
        }).then(() => {
            this.$router.push('/my-orders')
        })       
    },
    addOrders(ordersData,){
        
    },
    countPrice(){
      let allPrice=0;
      let discounts=0;
      let totalPrice=0;
      this.gridData.map((item)=>{
        allPrice+=parseFloat(item.originalPrice*item.amount);
        discounts+=parseFloat(item.originalPrice*item.amount)-parseFloat(item.price*item.amount);
        totalPrice+=parseFloat(item.price*item.amount);
      })
      this.$store.dispatch('dispathCheckedData',{checkedData:this.checkedGrid})
      this.allPrice=allPrice.toFixed(2);
      this.discounts=discounts.toFixed(2);
      this.totalPrice=totalPrice.toFixed(2);
    },
    toggleActive(active){
        this.activeAddress=active;
    }
  },
  created:function(){
    if(!Array.isArray(this.cart.checkedData)||!this.cart.checkedData.length>0){
        this.$router.push('/cart/check');
        return 
    }
    this.gridData=this.cart.checkedData.concat();
    this.countPrice();
  },
  destroyed:function(){
    this.$store.dispatch('dispathCheckedData',{checkedData:[]})
  },
  computed:mapState([
      'cart','userInfo'
  ])
}
</script>

<style>
.section-title {
    margin: 15px 0;
    font-size: 16px;
    font-weight: 500;
    color: #222;
}
    .goods-img {
        width: 78px;
        height: 78px;
        display:block;
        background-color: #f0f8ff;
        border: 1px solid #e5e9ef;
    }
    .goods-item .m-20{
        margin-left: 20px;
    }
    .goods-item{
        text-align:left;
    }
    .goods-item>div{
        display: inline-block;
        height: 100%;
    }

    .v-m, .v-middle {
        vertical-align: middle;
    }
    .goods-item .title-ctnr {
        width: 350px;
        padding-right: 10px;
        word-break: break-all;
        word-wrap: break-world;
    }

    .v-t, .v-top {
        vertical-align: top;
    }
    .goods-item .title-ctnr .title {
        font-size: 16px;
        color: #222;
        margin-bottom: 6px;
    }
    .text-hide {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .goods-item .title-ctnr .spec {
        display: block;
        font-size: 12px;
        color: #99a2aa;
        line-height: 16px;
    }
    .el-table__row td{
        padding:0 !important;
    }
    .summary-panel {
        padding-top: 12px;
    }
    .t-r, .t-right {
        text-align: right;
    }
    .f-right {
        float: right;
    }
    .summary-panel .text-section {
        margin-top: 24px;
        position: relative;
    }
    .summary-panel .text-section .label {
        color: #99a2aa;
        font-size: 14px;
        display: block;
        float: left;
        position: absolute;
        bottom: 4px;
        left: 25px;
    }
    .summary-panel .text-section .value {
        color: #222;
        font-size: 20px;
    }
    .summary-panel .text-section {
        margin-top: 24px;
        position: relative;
    }
    .summary-panel .text-section .label {
        color: #99a2aa;
        font-size: 14px;
        display: block;
        float: left;
        position: absolute;
        bottom: 4px;
        left: 25px;
    }
    .summary-panel .btn-ctnr {
        margin-top: 40px;
    }
    .btn-default.colored {
        background-color: #f25d8e;
        color: #fff;
        border-color: #f25d8e;
    }
    .f-clear{
        clear: both;
        overflow: hidden;
    }
    .remove-select-link{
        font-size: 16px;
        margin-top: 36px;
    }
    .f-left {
        float: left;
    }
    .colored {
        background-color: #f25d8e !important;
        color: #fff !important;
        border-color: #f25d8e !important;
    }
    .colored:hover {
        background-color: #ff85ad !important;
        border-color: #ff85ad !important;
    }
</style>
