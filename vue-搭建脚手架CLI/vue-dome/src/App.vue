<template>
  <div id="app">
    <app--header/>
    <Users/>
    <app-footer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from  './components/Header'
import Footer from  './components/Footer'
import Users from './components/Users'

export default {
  name: 'App',
  components: {
    HelloWorld,
    'app-Header':Header,
    'app-footer':Footer,
    'Users':Users
  }
}
</script>

<style scoped>

</style>
