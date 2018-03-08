import {get} from '../get'

export function getShopDetailData(shopId){
    const result=get('/api/product/detail.do?skuId='+shopId);
    return result;
}