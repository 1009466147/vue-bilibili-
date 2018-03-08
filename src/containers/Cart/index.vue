
<template>
<div>
    <main-header></main-header>
    <div class="shop-container">
        <router-view></router-view>
    </div>
    <main-footer></main-footer>
</div>
    
</template>

<script>
import  mainHeader from '../../components/Header'
import  mainFooter from '../../components/Footer'
export default {
  name: 'Cart',
  data(){
      return {
           
      }
  },
  components:{
      mainHeader,
  
      mainFooter,
  },
  methods:{

  },
  created:function(){
  
  }
}
</script>

<style>
    .shop-container{
        width:1060px;
        text-align:left;
        margin:0 auto;
    }
</style>
