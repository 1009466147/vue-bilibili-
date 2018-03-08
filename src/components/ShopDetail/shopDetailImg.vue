<template>
    <div class="shop-detail-img">
        <h3 style="text-align:left;margin:20px 0 10px 0;line-height:50px;font-weight:400;font-size:18px;">商品详情</h3>
        <el-row style="border-top:1px solid #ddd">
            <el-col v-html="htmlDescription">
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'shopDetailImg',
  data () {
    return {
      
    }
  },
  props:{
    htmlDescription:{type:[String]}  
  },
 
  created:function(){
     console.log(this.htmlDescription)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
