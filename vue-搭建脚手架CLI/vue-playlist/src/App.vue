<!--1.模板：html结构-->
<template>
  <div id="app">
    hello vue
    <h1>{{title}}</h1>
    <users/>
  </div>
</template>
<!--2.行为：处理逻辑-->
<script>
  //局部注册组件
import Users from './components/Users'

export default {
  name: 'App',
  data(){
    return {
      title:'这是我的第一个vue脚手架项目'
    }
  },
  components:{
    'users':Users
  }
}
</script>
<!--3.样式：解决样式-->
<style scoped>
h1{
  color: purple;
}
</style>
