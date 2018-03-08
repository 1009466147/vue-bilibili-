export const myCookies={
    getCookie:function(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
        }
        else
        return null;
    },
    setCookie:function(name,value,expiredays){
        var Days = expiredays;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
}
 
export const localStoreTool={
    getItem:function(key){
        let value;
        try{
            value=localStorage.getItem(key);
        }catch(ex){
            // 开发环境下提示error
            if (__DEV__) {
                console.error('localStorage.getItem报错, ', ex.message)
            }
        }finally {
            return value
        }
    },
    setItem:function(key,value){
        try {
            // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
            localStorage.setItem(key, value)
        } catch (ex) {
            // 开发环境下提示 error
            if (__DEV__) {
                console.error('localStorage.setItem报错, ', ex.message)
            }
        }
    }
}

export const sessionStorageTool={
    getItem:function(key){
        let value=window.sessionStorage.getItem(key);
        return value
    },
    setItem:function(key,val){
        window.sessionStorage.setItem(key,val);
    }
}