import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home';

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Home}
]

new Vue({
  render: h => h(App),
}).$mount('#app')
