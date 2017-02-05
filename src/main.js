// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import App from './App'
import head from './head'

import Home from './components/Home'

const Events = {
  template: "<div class='title is-2'> Events </div>"
}

const Schedule = {
  template: "<div class='title is-2'> Schedule </div>"
}

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/events',
    component: Events
  },
  {
    path: '/schedule',
    component: Schedule
  }
]

const router = new VueRouter({routes})

// Vue.use(VueRouter)
Vue.use(VueHead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router: router,
  template: '<App/>',
  head: head,
  components: { App }
})
