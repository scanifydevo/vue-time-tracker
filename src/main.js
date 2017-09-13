// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//we want to apply VueResource and VueRouter
//to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

//pointing routes to the components they should use
router.map({
  '/hello': {
    component: Hello
  }
})

//any invalid route will redirect to home
router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
