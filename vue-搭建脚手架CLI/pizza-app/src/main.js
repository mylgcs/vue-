import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Hemo from  './vivew/Hemo'
import Meun from "./vivew/Meun";
import Login from "./vivew/Login";
import Regsiter from "./vivew/Regsiter";
import Admin from "./vivew/Admin";
import About from "./vivew/About/About";

Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:Hemo},
    {path:'/meun',component:Meun},
    {path:'/login',component:Login},
    {path:'/regsiter',component:Regsiter},
    {path:'/admin',component:Admin},
    {path:'/about',component:About}
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
