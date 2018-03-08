import {get} from '../get'
export default function GetShopList(cid){
    const result=get('/api/product/list.do?'+cid);
    return result
}