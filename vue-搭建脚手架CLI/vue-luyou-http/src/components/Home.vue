<template>
  <div id="home">
    <app--header v-bind:title="title"></app--header>
    <Users v-bind:title="users"></Users>
  </div>
</template>

<script>
  //import HelloWorld from './HelloWorld'
  import Header from  './Header'
  import Footer from  './Footer'
  import Users from './Users'

  export default {
    name: 'home',
    data(){
      return {
        users:[
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false},
          {name:'Henry',position:'Web开发',show:false}
        ]
      }
    },
    methods:{

    },
    components: {
      //HelloWorld,
      'app-Header':Header,
      'app-footer':Footer,
      'Users':Users
    }
  }
</script>

<style scoped>

</style>
