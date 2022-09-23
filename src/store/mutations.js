/* 
    直接更新 state 的多个方法的对象
*/

import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
} from './mutation-types'

export default{
    [RECEIVE_ADDRESS](state, {address}){
        state.address = address
    },
    [RECEIVE_SHOPS](state, {shops}){
        state.shops = shops
    },
    [RECEIVE_CATEGORYS](state, {categorys}){
        state.categorys = categorys
    },
}