

<template>
<div>

        
    <div class="order-item">
        <div class="item-top">
            <span class="order-time">{{orderData.date}}</span>
            <span class="order-id">
                <span class="ddh">订单号 </span>
                <span>{{orderData.ordersNum}}</span>
            </span>
            <div class="right-side">
                <p class="tips"> </p>
                <p class="order-status">
                    <span class="status-ico iconfont icon-shibai red"></span>
                    <span class="word">已关闭</span>
                </p>
            </div>
        </div>
        <div class="item-container">
            <template v-for="item in orderData.grid">
                <div class="left-items">
                    <div class="left-item">
                        <router-link :to="'/shopDetail/'+item.skuId" target='_blank'>
                            <div class="item-img" :style="'background-image: url('+item.imgUrl+');'"></div>
                            <div class="item-info"> 
                                <div class="item-name">{{item.skuName}}</div>
                                <div class="item-desc">{{item.attribute}}</div>
                            </div>
                        </router-link>
                        <div class="item-num">*{{item.amount}}</div>
                        <div class="item-price">￥{{item.price*item.amount}}</div>
                    </div>
                </div>
            </template>
            <div class="order-buyer"> 
                <span class="icon iconfont icon-lianxiren"></span><span class="name" @click="showAddress(orderData.ordersNum)">{{orderData.address.name}}</span>
                <div class="popup" :style="'display:'+(active==orderData.ordersNum?'block':'none')+';'">
                    <div class="blank-box"></div>
                    <div class="triangle_border">
                        <span><em> </em></span>
                    </div>
                    <div class="popBox"> 
                        <div class="pop-top">收货信息</div>
                        <ul class="pop-mid">
                            <li><span>收货人</span><p>{{orderData.address.name}}</p></li>
                            <li><span>地址</span><p>{{orderData.address.address.toString()+'  '+orderData.address.detailDddress}}</p></li>
                            <li><span>手机</span><p>{{orderData.address.phone}}</p></li>
                        </ul>
                        <div class="pop-bottom" @click="closeAddress()">知道了</div>
                    </div>
                </div>
            </div>
            <div class="order-handle"><p class="status">已关闭</p></div>
        </div>
    </div>

</div>
    
</template>

<script>

export default {
  name: 'OrderItem',
  data(){
      return {
           orderList:[],
           active:''
      }
  },
  props:{
    orderData:Object
  },
  components:{

  },
  methods:{
    showAddress(ordersNum){
        console.log(ordersNum)
        this.active=ordersNum
    },
    closeAddress(){
        this.active='';
    }
  },
  created:function(){
    console.log(this.orderData)
  }
}
</script>

<style>
.order-item {
    position: relative;
    width: 1160px;
    border: 1px solid #e5e9ef;
    margin: 20px 0 0;
}
.order-item .item-top {
    position: relative;
    width: 1160px;
    padding: 0;
    height: 40px;
    line-height: 40px;
    background: #f4f5f7;
    font-size: 14px;
    color: #222;
}
.order-item .item-top .order-time {
    margin: 0 50px 0 20px;
}
.order-item .item-top .order-id .ddh {
    color: #6d757a;
}
.order-item .item-top .right-side {
    float: right;
    height: 40px;
}
.order-item .item-top .right-side .tips {
    font-size: 12px;
    float: left;
    color: #99a2aa;
    margin-right: -45px;
}
.order-item .item-top .right-side .order-status {
    float: left;
    width: 200px;
    text-align: center;
    color: #222;
}
.order-item .item-top .right-side .order-status .word {
    color: #222;
}
.order-item .item-container {
    display: table;
    width: 100%;
}
.order-item .item-container .left-items {
    float: left;
    width: 780px;
}
.order-item .item-container .left-items .left-item {
    display: table;
    width: 100%;
}
.order-item .item-container .left-items .left-item .item-img {
    float: left;
    width: 78px;
    height: 78px;
    margin: 20px;
    background-size: cover;
    background-position: 50%;
    border: 1px solid #e5e9ef;
}
.order-item .item-container .left-items .left-item .item-info {
    float: left;
    width: 300px;
    height: auto;
    margin: 20px 0;
}
.order-item .item-container .left-items .left-item .item-info .item-name {
    color: #222;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 6px;
}
.order-item .item-container .left-items .left-item .item-info .item-desc {
    color: #99a2aa;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.order-item .item-container .left-items .left-item .item-num, .order-item .item-container .left-items .left-item .item-price {
    float: left;
    width: 180px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    margin: 20px 0;
    font-size: 14px;
}
.order-item .order-buyer {
    display: table-cell;
    width: 180px;
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    border-left: 1px solid #e5e9ef;
    border-bottom: 20px solid transparent;
    border-top: 20px solid transparent;
}
.order-item .order-buyer .name {
    cursor: pointer;
    color: #f25d8e;
}
.order-item .order-buyer .popup {
    position: relative;
    top: 18px;
    left: -181px;
}
.order-item .order-buyer .popup .blank-box {
    position: absolute;
    width: 150px;
    height: 20px;
    top: -20px;
    right: -190px;
}
.order-item .order-buyer .popup .triangle_border {
    position: absolute;
    top: -27px;
    right: -116px;
    z-index: 11;
}
.triangle_border em, .triangle_border span {
    display: block;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    position: absolute;
}
.triangle_border em {
    border-color: transparent transparent #fff;
    top: -9px;
    left: -10px;
}
.order-item .order-buyer .popup .popBox {
    position: absolute;
    width: 360px;
    border: 1px solid #d3d8e0;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 1px 4px #d3d8e0;
    z-index: 10;
}
.order-item .order-buyer .popup .popBox .pop-top {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d3d8e0;
}
.order-item .order-buyer .popup .popBox .pop-mid {
    width: 100%;
}
.order-item .order-buyer .popup .popBox .pop-mid li {
    display: table;
    width: 100%;
}
.order-item .order-buyer .popup .popBox .pop-mid li span {
    width: 80px;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding: 20px 0 20px 20px;
    color: #99a2aa;
}
.order-item .order-buyer .popup .popBox .pop-mid li p {
    width: 240px;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding: 20px 20px 20px 0;
    border-bottom: 1px solid #d3d8e0;
}
.order-item .order-buyer .popup .popBox .pop-bottom {
    display: block;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #d3d8e0;
    cursor: pointer;
}
.order-item .order-handle {
    display: table-cell;
    width: 200px;
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    border-left: 1px solid #e5e9ef;
    border-bottom: 20px solid transparent;
    border-top: 20px solid transparent;
}
.order-item .order-handle .status {
    color: #222;
}
.triangle_border span {
    border-color: transparent transparent #d3d8e0;
    top: 7px;
    left: -20px;
}
</style>
