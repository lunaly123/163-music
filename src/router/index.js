import Vue from 'vue'
import Router from 'vue-router'
import { RouteConfig } from './routeConfig'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    ...RouteConfig
  ]
})
