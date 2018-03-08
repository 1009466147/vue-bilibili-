
<template>
    <div class="address-content">
        <div class="section-title">
            <i class="el-icon-info"style="margin-right: 8px; color: #b8c0cc"></i>
            <span>收货人信息</span>
        </div>
        <el-row>
            <template v-for="(item,index) in userInfo.address">

                <el-col :span="24">
                    <div :class="(activeAddress===index?'active':'')+' address-item'" @click="selectAddress(index)">
                        <i class="ic-select dp-ib v-t p-r"></i>
                        <span style="margin-right:30px;">{{item.name}}</span>
                        <span style="margin-right:30px;">{{item.address.toString()}}</span>
                        <span style="margin-right:30px;">{{item.detailDddress}}</span>
                        <span style="margin-right:30px;">{{item.phone}}</span>
                        <div style="float:right" class="address-btngroup">
                            <el-button type="primary"size="mini" icon="el-icon-edit" @click="addAddress(this,item)"></el-button>
                            <el-button type="warning"size="mini" icon="el-icon-delete" @click="delAddress(this,item,index)"></el-button>
                        </div>
                    </div>
                </el-col>
            </template>
        </el-row>
        <div class="address-item" @click="addAddress(this)">
            <i class="el-icon-plus address-icon"></i> 点击添加收货地址
        </div>
        <addAddress-alert :showDialog="showDialog" :closeDialog="closeDialog" :addressHandle="addressHandle" :formData="formData"></addAddress-alert>
    </div>
    
</template>

<script>
import {mapState} from 'vuex'
import AddAddressAlert from './addAddressAlert'
import {myCookies} from '../../tools/storageTool.js'
export default {
  name: 'AddressInfo',
  data(){
      return {
        showDialog:false,
        formData:false,
        activeAddress:0
      }
  },
  components:{
    AddAddressAlert,
  },
  props:{
    active:[Number,String],
    toggleActive:Function,
  },
  methods:{
    addAddress(vm,address){
        if(address){
            this.formData=address;
        }else{
            this.formData=false;
        }
        this.showDialog=true;
    },
    closeDialog(){
        this.showDialog=false;
        this.formData=false;
    },
    addressHandle(address,modify){
        if(modify){
            this.$store.dispatch('delAddress',modify);
        }
        this.$store.dispatch('addAddress',address);
        myCookies.setCookie(this.userInfo.name+'address',JSON.stringify(this.userInfo.address),30);
        this.formData=false;
    },
    delAddress(vm,address,index){
        if(index===this.activeAddress){this.activeAddress='';this.toggleActive('');}
        this.$store.dispatch('delAddress',address);
        myCookies.setCookie(this.userInfo.name+'address',JSON.stringify(this.userInfo.address),30);
    },
    selectAddress(index){
        this.activeAddress=index;
        this.toggleActive(index)
    },

  },
  created:function(){
        let addressData=JSON.parse(myCookies.getCookie(this.userInfo.name+'address'))||[];
        this.$store.dispatch('dispathAddress',addressData);
        if(addressData.length<=0){
            this.activeAddress='';
            this.toggleActive('')
        }else{
            this.activeAddress=this.active;
        }
        
  },
  watch:{
   
  },
  computed:mapState([
      'userInfo'
  ])
}
</script>

<style scoped>
    .address-content{
        text-align:left;
    }
    .section-title {
        margin-bottom: 26px;
        font-size: 16px;
        font-weight: 500;
        color: #222;
    }
    .address-item{
        padding: 18px 44px 18px 12px;
        margin: 0 0 10px;
        font-size: 14px;
        cursor: pointer;
        color: #222;
        border: 1px solid #ccd0d7;
        border-radius: 7px;
    }
    .address-icon{
        margin-right:12px;
        font-size:18px;
        color: #f25d8e;
        font-weight:600;
    }
    .address-btngroup button{
        padding:3px 10px;
    }
    .address-item.active .ic-select {
        border-color: #f25d8e;
    }
    .address-item .ic-select {
        width: 18px;
        height: 18px;
        margin-right: 18px;
        background-color: #fff;
        border: 2px solid #ccd0d7;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .address-item.active .ic-select:before {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid #fff;
        box-sizing: border-box;
        background-color: #f25d8e;
    }
</style>
