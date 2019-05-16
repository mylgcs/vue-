// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hemo from "../../pizza-app/src/vivew/Hemo";

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:Hemo}
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
