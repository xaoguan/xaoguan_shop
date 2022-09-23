/* 
    入口js
*/

import Vue from 'vue'
import App from './App.vue'

import router from './router'

import store from './store'


// 关闭 Vue 的生产提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    router, // 使用 vue-router
    store, // 使用 vuex
});