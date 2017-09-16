// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//we want to apply VueResource and VueRouter
//to our Vue instance 
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

//pointing routes to the components they should use
router.map({
  '/home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  }
})

//any invalid route will redirect to home
router.redirect({
  '*': '/home'
})

router.start(App, '#app')
