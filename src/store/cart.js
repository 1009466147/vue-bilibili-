export default{
    state:{
        checkedData:[]
    },
    mutations:{
        dispathCheckedData(state,result){
            state.checkedData=result.checkedData;
        }
    },
    actions:{
        /*辣鸡vuex。。。。*/
        dispathCheckedData({state,commit},result){
            commit('dispathCheckedData',result);
        }
    }
}