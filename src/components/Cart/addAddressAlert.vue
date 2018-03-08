
<template>
    <div class="address-content">
        <el-dialog title="收货地址" :visible.sync="cShowDialog" center :before-close="closeDialog" width="750px"   >
            <el-form :model="form" :rules="rules" style="width:600px" ref="addressForm">
                <el-form-item label="收货人姓名" :label-width="formLabelWidth"  prop="name" >
                    <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="所在地区" :label-width="formLabelWidth" prop="address">
                    <el-cascader :options="addressOptions" style="width:100%" v-model="form.address" expand-trigger="hover" ></el-cascader>
                </el-form-item>
                <el-form-item label="详细地址" :label-width="formLabelWidth" prop="detailDddress">
                    <el-input  v-model="form.detailDddress"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth" prop="phone" >
                    <el-input v-model="form.phone" ></el-input>
                </el-form-item>
                <el-form-item label="邮政编码" :label-width="formLabelWidth">
                    <el-input v-model="form.zipCode"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="addAddress">确 定</el-button>
            </div>
        </el-dialog>

    </div>
    
</template>

<script>
import addressJson from '../../constans/address.js'
import {Cascader} from 'element-ui'
let addData=[];
export default {
  name: 'AddressInfo',
  data(){
      return {
        
        form: {
            
        },
        formLabelWidth: '120px',
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'change' }
          ],
          address:{ required: true, message: '请选择地区', trigger: 'blur' },
          detailDddress:{ required: true, message: '请输入详细地址', trigger: 'blur' },
          phone:[
              { required: true, message: '请输入手机号', trigger: 'blur' },
              { min: 6, max: 20, message: '请输入正确的手机号', trigger: 'blur' }
          ]
        },
        cShowDialog:false,
        addressOptions:[]
      }
  },
  props:{
    showDialog:Boolean,
    closeDialog:Function,
    addressHandle:Function,
    formData:{
        default:false,
        type:[Object,Boolean]
    }
  },
  components:{
    'el-cascader':Cascader
  },
  methods:{
    addAddress(){
        this.$refs['addressForm'].validate((valid) => {
          if (valid) {
            this.addressHandle(this.form,this.formData);
            this.closeDialog();
            this.form={};
          } else {
            return false;
          }
        });
        
    },
    synShowDialog(){
        this.cShowDialog=this.showDialog
    },
    thenAddress(json){
        for(var i=0;i<json.length;i++){
            if(json[i]['cities']||json[i]['areas']){
                json[i]['children']=(json[i]['cities']||json[i]['areas']).concat()

                json[i]['label']=json[i]['name'];
                json[i]['value']=json[i]['name'];
           
                this.thenAddress(json[i]['children'])
            }
            else{
                json.unshift({'label':json[i],value:json[i]})
                json.splice(i+1,1)
            }
        }
        
    },
    updataFormData(){
        this.form=(this.formData?Object.assign({},this.formData):{});
    }
  },
  created:function(){
      this.thenAddress(addressJson)
      this.addressOptions=addressJson
      this.cShowDialog=this.showDialog
      this.form=(this.formData?Object.assign({},this.formData):{});
  },
  watch:{
      'showDialog':'synShowDialog',
      'formData':'updataFormData'
  },

}
</script>

<style scoped>
 
</style>
