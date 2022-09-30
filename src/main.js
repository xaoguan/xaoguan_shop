/* 
    入口js
*/

import Vue from 'vue'

import {Button} from 'mint-ui'
import App from './App.vue'

import router from './router'

import store from './store'

import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

import './filters' // 加载过滤器

import  './mock/mockServer'  // 加载mockServer即可

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button></mt-button>

Vue.use(VueLazyload,{ // 内部自定义了一个指令lazy
    loading,
})

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    router, // 使用 vue-router
    store, // 使用 vuex
});