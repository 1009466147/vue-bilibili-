<template>
    <div class="handle-detail-container">
        <el-row >
            <el-col>
               <h2>{{skuList.skuName}}</h2>
            </el-col>
        </el-row>
        <el-row >
            <el-col>
               <span class="detail-label">价格&nbsp;&nbsp;:</span><span class="detail-price">￥{{skuList.salePrice}}</span>
            </el-col>
        </el-row>
        <div style="border-top:1px solid #ddd;margin-bottom:20px;">
        </div>
        <el-row >
  
            <el-col ><span  class="detail-label">{{skuList.attribute&&skuList.attribute[0].name}}</span><div  style="    display: inline-block;" v-for="(item,index) in skuList.attribute" :key="index"><div :class="(detailC==item.id?'active':'')+' choosing-btn'"  :attributeId="item.id" @click="attrClick(item.id)" :data-linkto="skuList.skuId">{{item.value}}</div></div></el-col>
            
        </el-row>
        <el-row style="margin-bottom:40px;">
            <el-col>
                <span class="detail-label">数量</span><el-input-number :min="1" :max="skuList.skuInventory" v-model="shopNumC":change="numChange()" size="small" label="数量"></el-input-number>  <span class="detail-label" style="margin-left:20px;width:auto;">库存{{skuList.skuInventory}}件</span>
            </el-col>
        </el-row>
        <el-row >
            <el-col>
                
                <el-button type="primary" @click="buyBtnHandle(skuList)"style="width:150px;height:45px;">立即购买</el-button>
                <el-button style="width:150px;height:45px;" @click="addCart(skuList)">加入购物车</el-button>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import jsApi from '../../tools/jsApi.js'
export default {
  name: 'handleDetail',
  data () {
    return {
      detailC:'',
      shopNumC:0
    }
  },
  props:{
    skuList:{type:[Array,Object]}  ,
    buyBtnHandle:Function,
    addCart:Function
  },
  methods:{
    attrClick(attrId){
        this.$emit('introduce',{
                num: this.shopNumC,
                detai: this.detailC
            })
        this.detailC=this.detailC === attrId?'':attrId;
    },
    numChange(){
        this.$emit('introduce',{
                num: this.shopNumC,
                detai: this.detailC
            })
    }
  },
  component:{
     
  },
  created:function(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .handle-detail-container{
        text-align:left;
    }
     .el-row {
        margin-bottom: 30px;
     
    }
    .detail-label{
        font-size: 14px;
        color: gray;
        display:inline-block;
        width:50px;
    }
    .detail-price{
        font-size: 36px;
        line-height: 36px;
        color: #f66;
    }
    .el-button.active{
        background:#20A0FF;
      color:#fff;
    }
    .choosing-btn {
        height: 34px;
        padding: 0 28px;
        background-color: #f6f6f6;
        color: #222;
        font-size: 14px;
        line-height: 34px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        -webkit-transition: all .2s;
        transition: all .2s;
        display: inline-block;
        cursor: pointer;
    }
    .choosing-btn.active {
        background-color: #fff0f5;
        color: #f25d8e;
        border-color: #f25d8e;
    }
</style>
