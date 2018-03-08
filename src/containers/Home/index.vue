
<template>
    <div>
        <main-header></main-header>
        <Carousel :carouselData="carouselData" ></Carousel>
        <shop :shopBtnClick="shopBtnClick" :shopData="shopData" :btnAction="btnAction" :shopMsgClick="shopMsgClick"></shop>
        <main-footer></main-footer>
    </div>
</template>

<script>
import  mainHeader from '../../components/Header'
import  Carousel from '../../components/Carousel/index'
import  Shop from '../../components/Shop/index'
import  mainFooter from '../../components/Footer'
import  getShopList from '../../fetch/GetShopList/GetShopList.js'
import {SERVER_URL} from '../../../static/constant.js'
export default {
  name: 'home',
  data(){
      return {
            carouselData:[
                'http://i0.hdslb.com/bfs/travel/0cb02bc5d79f9d60a2a78a19caeec27dc5c93c64.jpg',
                'http://i0.hdslb.com/bfs/travel/8923f634d2c9daf64056c360a8a132597f5204b6.jpg',
                'http://i0.hdslb.com/bfs/travel/dfbee44c8baf376865697c03674a69f4e9061775.jpg'
            ],
            shopBtnClick:(num,cid)=>{
                this.getShopListMethod(cid)
                this.btnAction=num
            },
            shopData:[],
            btnAction:1
      }
  },
  components:{
      mainHeader,
      Carousel,
      Shop,
      mainFooter,
  },
  methods:{
      //获取商品
      getShopListMethod:function(cid){
        const result=getShopList(cid);
        result.then(res=>{
            return res.json()
        }).then(json=>{
            if(json.message=='success'){
                this.shopData=json.result
            }
             
        })
      },
      shopMsgClick:function(id){
        window.open(SERVER_URL+'/shopDetail/'+id)
      }
  },
  created:function(){
      this.getShopListMethod('pn=1&ps=32')
  }
}
</script>

<style>

</style>
