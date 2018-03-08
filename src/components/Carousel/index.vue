<template>
    <div class="home-carousel">
        <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="item in carouselData" :key="item">
                <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>

import {Carousel,CarouselItem} from 'element-ui'

export default {
  name: 'Carousel',
  data () {
    return {
      
    }
  },
  props:{
      carouselData:Array
  },
  components:{
    'el-carousel':Carousel,'el-carousel-item':CarouselItem
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    
</style>
