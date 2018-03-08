var app=require('koa')()
var router=require('koa-router')()

//表格
var grid=require('./Grid/grid');
router.get('/api/shoplist:id?',function *(next){
     console.log(this.params);
    this.body=grid;
})

//复杂表格
var complexGrid=require('./Grid/complexGrid')
router.get('/api/complexGrid',function *(next){
    console.log(this.params);
    this.body=complexGrid;
})
app.use(router.routes()).use(router.allowedMethods());
app.listen(3010);