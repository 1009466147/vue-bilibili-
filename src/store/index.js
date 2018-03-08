import Vue from 'vue'
import vuex from 'vuex'
import userInfo from './userInfo'
import global from './global'
import cart from './cart'
Vue.use(vuex);
export default new vuex.Store({
    modules:{
        userInfo,
        global,
        cart
    }
})
