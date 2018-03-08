export default{
    state:{
        loginShow:false
    },
    mutations:{
        //vuex 通过mutations改变状态
        dispathLoginShow(state,loginShow){
            state.loginShow=loginShow;
        }
    },
    actions:{
        /*辣鸡vuex。。。。*/
        //vuex 只能通过mutations改变状态 但是mutations无法做异步操作  actions可以做异步操作  所以改变状态在actions里做
        dispathLoginShow({state,commit},loginShow){
            //通过commit 触发mutations
            commit('dispathLoginShow',loginShow);
        }
    }
}