import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Meun from "./components/Meun"
import About from "./components/about/About"
import Admin from "./components/Admin"
import Login from "./components/Login"
import Register from "./components/Register"
Vue.use(VueRouter)
const routers = [
  {path:'/',component:Home},
  {path:'/meun',component:Meun},
  {path:'/about',component:About},
  {path:'/admin',component:Admin},
  {path:'/login',component:Login},
  {path:'/register',component:Register}
]
const router = new VueRouter({
  routers,
  mode:'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
