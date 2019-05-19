import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Hemo from  './vivew/Hemo'
import Meun from "./vivew/Meun"
import Login from "./vivew/Login"
import Regsiter from "./vivew/Regsiter"
import Admin from "./vivew/Admin"
import About from "./vivew/About/About"
//二级路由
import Contact from './vivew/About/Contact'
import Delivery from "./vivew/About/Delivery"
import History from "./vivew/About/History"
import Ordering from "./vivew/About/Ordering"
//三级路由
import Phone from "./vivew/About/contact/Phone"
import Personname from "./vivew/About/contact/Personname"


Vue.use(VueRouter)
const router = new VueRouter({
  router,
  mode:'history',
  routes:[
    {path:'/',name:'hemoLink',component:Hemo},
    {path:'/meun',component:Meun},
    {path:'/login',component:Login},
    {path:'/regsiter',component:Regsiter},
    {path:'/admin',component:Admin},
    {path:'/about',redirect:'/about/contact',component:About,children:[
        {path:'/about/contact',name: 'contactLink',redirect: "/personname",component:Contact,children: [
            {path:'/phone',name:'phoneNumber',component:Phone},
            {path:'/personname',name:'personName',component:Personname}
          ]},
        {path:'/delivery',name:'deliveryLink',component:Delivery},
        {path:'/history',name:'historyLink',component:History},
        {path:'/ordering',name:'orderingLink',component:Ordering}
      ]}
  ]
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
