import Vue from 'vue'
import App from './App.vue'

import vueRouter from 'vue-router'
import CountDown from 'vue2-countdown'

import router from './assets/js/router.js'
Vue.use(vueRouter)

import Mint from 'mint-ui';
Vue.use(Mint);
import acc from '../node_modules/mint-ui/lib/style.css'
import './assets/css/cssreset.css'
import './assets/css/common.css'

import zepto from 'zepto'

import axios from 'axios'
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
