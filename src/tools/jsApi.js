let jsApi={
    hasClass:function(obj, cls) {  
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
    },
    addClass:function(obj, cls) {  
        if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
    },
    removeClass:function(obj, cls) {  
        if (this.hasClass(obj, cls)) {  
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
            obj.className = obj.className.replace(reg, ' ');  
        }  
    },
    toggleClass:function(obj,cls){  
        if(this.hasClass(obj,cls)){  
            this.removeClass(obj, cls);  
        }else{  
            this.addClass(obj, cls);  
        }  
    },
    format:function(date,fmt){ 
        //author: meizz   
        var o = {   
            "M+" : date.getMonth()+1,                 //月份   
            "d+" : date.getDate(),                    //日   
            "h+" : date.getHours(),                   //小时   
            "m+" : date.getMinutes(),                 //分   
            "s+" : date.getSeconds(),                 //秒   
            "q+" : Math.floor((date.getMonth()+3)/3), //季度   
            "S"  : date.getMilliseconds()             //毫秒   
        };   
        if(/(y+)/.test(fmt))   
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
        for(var k in o)   
            if(new RegExp("("+ k +")").test(fmt))   
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
        return fmt;   
    }  
}
export default jsApi