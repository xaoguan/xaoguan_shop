/* 
    通过 mutation 间接更新 state 的多个方法的对象
*/

import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
} from './mutation-types'

import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqSearchShops,
    reqCaptcha,
    reqLogin,
    reqSendCode,
    reqPhoneCode,
    reqUserInfo,
    reqLogout,
} from '../api'

export default {

    // 异步获取地址
    async getAddress({commit, state}){
        // 发送 异步 ajax 请求
        const geohash = state.latitude + ',' + state.longitude;
        const result = await reqAddress(geohash)
        if(result.code === 0){
            const  address = result.data
            // 提交一个mutation
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    
    // 异步获取食品分类列表
    async getCategorys({commit}){
        // 发送 异步 ajax 请求
        // const geohash = state.latitude + ',' + state.longitude;
        const result = await reqFoodCategorys()
        // 提交一个mutation
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },

    // 异步获取商家列表
    async getShops({commit, state}){
        // 发送 异步 ajax 请求
        const {latitude,longitude} = state
        const result = await reqShops(longitude, latitude)
        // 提交一个mutation
        if(result.code === 0){
            const  shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    }

}