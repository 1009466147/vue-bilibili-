var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({target: 'http://bmall.bilibili.com/', changeOrigin: true}));
app.listen(3333);