<template>
    <div class="home-footer footer">
        <div class="footer-wrp">
            <div class="footer-cnt clearfix">
            <ul class="boston-postcards">
                <li>
                    <div class="tips">Bilibili</div>
                    <div class="cards">
                        <a target="_blank" href="//www.bilibili.com/html/aboutUs.html">关于我们</a>
                    </div>
                    <div class="cards"><a target="_blank" href="//www.bilibili.com/html/friends-links.html">友情链接</a></div>
                    <div class="cards"><a target="_blank" href="//bmall.bilibili.com/">哔哩哔哩周边</a></div>
                    <div class="cards"><a target="_blank" href="//www.bilibili.com/html/contact.html">联系我们</a></div>
                    <div class="cards"><a target="_blank" href="//www.bilibili.com/html/join.html">加入我们</a></div>
                </li>
                <li>
                    <div class="tips">传送门</div>
                    <div class="cards"><a target="_blank" href="//www.bilibili.com/html/help.html">帮助中心</a></div>
                    <div class="cards"><a target="_blank" href="//www.bilibili.com/video/av120040/">高级弹幕</a></div>
                    <div class="cards"><a target="_blank" href="//www.bilibili.com/event">活动专题页</a></div>
                    <div class="cards"><a target="_blank" href="//www.bilibili.com/html/copyright.html">侵权申诉</a></div>
                    <div class="cards"><a target="_blank" href="https://account.bilibili.com/answer/addq">分院帽计划</a></div>
                    <div class="cards"><a target="_blank" href="//activity.bilibili.com/">活动中心</a></div>
                    <div class="cards"><a target="_blank" href="//www.bilibili.com/html/contact.html">建议/BUG汇报</a></div>
                    <div class="cards"><a target="_blank" href="//h.bilibili.com/wallpaper?action=list">壁纸站</a></div>
                    <div class="cards"><a target="_blank" href="//www.bilibili.com/html/cele.html">名人堂</a></div>
                </li>
                <li>
                    <div class="block right">
                        <a target="_blank" href="//app.bilibili.com/">
                            <div class="phone">
                                <div class="pic"></div>
                                <em>手机端下载</em>
                                <div class="qrcode-box-wrp">
                                    <div class="qrcode-box qrcode-app">
                                        <div class="qrcode-box-arrow"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a target="_blank" href="//weibo.com/bilibiliweb">
                            <div class="weibo">
                                <div class="pic"></div>
                                <em>新浪微博</em>
                                <div class="qrcode-box-wrp">
                                    <div class="qrcode-box qrcode-weibo">
                                        <div class="qrcode-box-arrow"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a id="weixin">
                            <div class="weixin">
                                <div class="pic"></div>
                                <em>官方微信</em>
                                <div class="qrcode-box-wrp bigvip-qrcode">
                                    <div class="qrcode-box qrcode-weixin">
                                        <div class="qrcode-box-arrow"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <div class="partner"><div class="block left"><div class="partner-banner"></div></div><div style="margin: 0 0 0 20px" class="block left"><p>广播电视节目制作经营许可证：<span>（沪）字第1248号 </span></p><p>网络文化经营许可证：<span>沪网文[2013]0480-056号</span></p><p>信息网络传播视听节目许可证：<span>0910417</span></p></div><div style="margin: 0 0 0 20px" class="block left"><p>互联网ICP备案：<span>沪ICP备13002172号-3</span></p><p>沪ICP证：<span>沪B2-20100043</span></p></div><div style="width: 274px" class="block right"><p>违法不良信息举报邮箱：<span>help@bilibili.com</span></p><p>违法不良信息举报电话：<span>4000233233 转 3</span></p><p><a href="http://www.shjbzx.cn" target="_blank"><i class="icons-footer icons-footer-report"></i><span>上海互联网举报中心</span></a></p></div></div></div></div>    
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer .footer-wrp {
        background-color: #f6f9fa;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .footer .footer-cnt {
        width: 980px;
        margin: 0 auto;
        overflow:hidden;
    }
    .footer .boston-postcards {
        list-style: none;
        margin: 0 auto;
        float: left;
        margin-bottom: 30px;
    }
    .footer .boston-postcards li {
    float: left;
    text-align: left;
    list-style: none;
    width: 300px;
    height: 112px;
    padding-right: 25px;
    padding-left: 24px;
    line-height: 1;
    border-left: solid 1px #e5e9ef;
    font-size: 14px;
}
    .footer .boston-postcards li:first-child {
        border-left: 0;
        padding-left: 0!important;
    }
    .footer .boston-postcards li .tips {
        margin-bottom: 22px;
    }
    .footer .boston-postcards li .cards {
        float: left;
        width: 100px;
        position: relative;
        margin-bottom: 16px;
    }
    .footer .boston-postcards li:last-child {
        width: 280px;
        padding-right: 0;
    }
    .footer .block.right {
        position: relative;
        width: 100%;
    }
    .footer .block.right div {
    position: relative;
    width: 82px;
    height: 80px;
    float: left;
}
.footer .block.right .phone .pic {
    background: url(http://static.hdslb.com/images/base/icons.png) no-repeat -1024px -194px;
}
.footer .block.right em {
    position: absolute;
    width: 82px;
    line-height: 14px;
    float: left;
    bottom: 0;
    left: 0;
    text-align: center;
}
.footer .block.right .qrcode-box-wrp {
    width: 130px;
    height: 130px;
    background: #fff;
    margin-top: -146px;
    right: -23px;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: .2s;
    z-index: 100000;
}
.footer .block.right .qrcode-box.qrcode-app {
    background: url(http://static.hdslb.com/images/base/app-qrcode.png) center center no-repeat;
}
.footer .block.right .qrcode-box .qrcode-box-arrow {
    width: 130px;
    height: 141px;
    background: url(http://static.hdslb.com/images/base/app-qrcode.png) bottom center no-repeat;
}
.footer .partner {
    padding: 0;
    text-align: left;
    margin: 0 auto;
    height: 80px;
}
.footer .partner .left, .footer .partner .right {
    line-height: 24px;
}
.left, .b-f-left {
    float: left;
}
.footer .partner .partner-banner {
    background: url(http://static.hdslb.com/images/v2images/footpic.png) no-repeat;
    width: 100px;
    height: 80px;
}
.footer .right {
    float: right;
}
p{
    font-size:12px;
}
*{
    background-repeat:no-repeat;
}
.footer .block.right .pic {
    position: relative;
    margin-left: 11px;
    width: 60px;
    height: 60px;
}
a{
    padding:0;
}
</style>
