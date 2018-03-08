import {post} from '../post'

export function login(obj){
    const result=post('/postApi/ajax/miniLogin/login',obj);
    return result
}