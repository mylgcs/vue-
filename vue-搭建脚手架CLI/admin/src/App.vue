<template>
  <div id="app">
    <app-header></app-header>
<!--    <app-content></app-content>-->
<!--    <app-footer></app-footer>-->
  </div>
</template>

<script>
  import Header from './pages/Header'
  import Footer from "./pages/Footer"
  import Content from "./pages/Content";
export default {
  name: 'app',
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-content':Content
  }
}
</script>

<style>

</style>
