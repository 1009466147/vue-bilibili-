

<template>
<div style="margin-bottom:50px;">
    <div class="order-list">
        <template v-for="item in orderList">
            
                <order-item :orderData="item"></order-item>
            
        </template>
    </div>
</div>
    
</template>

<script>
import OrderItem from './subpage/index'
export default {
  name: 'OrderComponent',
  data(){
      return {
          
      }
  },
  props:{
    orderList:Array
  },
  components:{
      OrderItem
  },
  methods:{

  },
  created:function(){
    console.log(this.orderList)
  }
}
</script>

<style>
.order-list {
    position: relative;
    width: 1160px;
    margin: 0 auto;
    min-height: 500px;
}
</style>
