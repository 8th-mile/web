// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

const Events = {
  template: '<div> Events </div>'
}

const Schedule = {
  template: '<div> Template </div>'
}

const routes = [
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

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
