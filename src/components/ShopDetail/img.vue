<template>
    <div class="img-detail-container">
        <el-tabs model="1" tab-position="bottom" >
            <el-tab-pane v-for="(item,index) in productRelate" :key="index"><span slot="label"><img :src="item.bfileLink" style="width:80px;heigaht:80px"></span> <img :src="item.bfileLink" style="width:100%;"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import {Tabs,TabPane} from 'element-ui'
export default {
  name: 'imgDetail',
  data () {
    return {
      activeName2: 'first'
    }
  },
  props:{
    productRelate:{type:[Array,Object]}  
  },
  component:{
      Tabs:'el-tabs',
      TabPane:'el-tab-pane'
  },
  created:function(){
      console.log(this.productRelate)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
