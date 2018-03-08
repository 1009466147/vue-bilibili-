
<template>
    <div >
        <cart-head-view viewType="check"></cart-head-view>
       <el-table
        :data="gridData||[]"
        border
        height="400"
        @selection-change="checkChange"
        ref="cartTable"
        style="width: 100%">
        <el-table-column
            type="selection"
            width="35"
            prop="checked">
        </el-table-column>
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
                <div></div>
                <el-input-number :min="1" :max="scope.row.inventory" :change="shopCountHandle(scope)"  v-model="scope.row.amount" size="small" ></el-input-number>
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
        <el-table-column
            sortable
            label="操作"
            align="center">
            <template slot-scope="scope">
            <el-button
                @click.native.prevent="deleteRow(scope.$index, gridData)"
        
                icon="el-icon-delete"
                size="small">
            </el-button>
            </template>
        </el-table-column>
    </el-table>
    <div style="margin-bottom: 40px" class="f-clear" >
        <div class="summary-panel t-r f-right" >
            <div class="text-section">
                <span class="label">总价：</span>
                <span class="value">￥{{
                    allPrice
                }}</span>
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
                <el-button type="info" plain style="margin-right: 16px; font-size: 16px; width: 170px; height: 50px;">继续购物</el-button>
                <el-button type="info" plain @click="settleAccounts" class="colored" :disabled="checkedGrid.length<=0||false" style="margin-right: 16px; font-size: 16px; width: 170px; height: 50px;">去结算</el-button>
            </div>
        </div>
    </div>
    
    </div>
    
</template>

<script>
import CartHeadView from '../../../components/Cart/headView'
import {myCookies} from '../../../tools/storageTool.js'
import {cartKey} from '../../../constans/cart.js'
import {mapState} from 'vuex'
export default {
  name: 'Cart',
  data(){
      return {
            gridData:false,
            totalPrice:0,
            checkedGrid:[],
            allPrice:0,
            discounts:0,
            totalPrice:0     
        }
  },
  components:{
    CartHeadView
  },
  methods:{
      //删除
    deleteRow(index, rows) {
        rows.splice(index, 1);
        this.gridDataHandle();
    },
    //表格data存储
    gridDataHandle(){
        myCookies.setCookie(this.userInfo.name+cartKey,JSON.stringify(this.gridData),15);
        
    },
    //商品数量计算
    shopCountHandle(scope){
        this.gridDataHandle()
        this.checkedGrid.map((item,index)=>{
            if(item.skuId==scope.row.skuId){
                
                this.checkedGrid[index].amount=scope.row.amount;
            }
        })
        this.$store.dispatch('dispathCheckedData',{checkedData:this.checkedGrid})
        this.countPrice()
    },
    //控制checked
    checkChange(selection){
        this.checkedGrid=selection;
    },
    //计算价格
    countPrice(){
      let allPrice=0;
      let discounts=0;
      let totalPrice=0;
      this.checkedGrid.map((item)=>{
        allPrice+=parseFloat(item.originalPrice*item.amount);
        discounts+=parseFloat(item.originalPrice*item.amount)-parseFloat(item.price*item.amount);
        totalPrice+=parseFloat(item.price*item.amount);
      })
      this.$store.dispatch('dispathCheckedData',{checkedData:this.checkedGrid})
      this.allPrice=allPrice.toFixed(2);
      this.discounts=discounts.toFixed(2);
      this.totalPrice=totalPrice.toFixed(2);
    },
    //结算
    settleAccounts(){
        this.$router.push('/cart/confirm')
    }
  },
  watch: {  
        'checkedGrid': 'countPrice',  
  },
  created:function(){
    let userName = this.userInfo.name;
    let cartData=JSON.parse(myCookies.getCookie(userName + cartKey));
    this.gridData=cartData;
  },
  mounted:function(){
    if(Array.isArray(this.gridData)){
        this.gridData.map((item,index)=>{
            this.$refs.cartTable.toggleRowSelection(item,true);
        })
    }
  },
  computed:mapState([
    'userInfo'
    ])
}
</script>

<style >

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
