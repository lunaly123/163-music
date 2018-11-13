import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
// import 'common/fonts/iconfont.css'

Vue.config.productionTip = false
// 解决移动端300ms延迟
FastClick.attach(document.body)

// 定义懒加载插件
Vue.use(VueLazyload, {
  error: require('./assets/img/404nofind.jpg'),
  loading: require('./assets/img/assetimg.jpg'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
