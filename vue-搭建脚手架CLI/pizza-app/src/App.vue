<template>
  <div id="app">
    <div class="container">
      <app--header></app--header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./vivew/Header";

export default {
  name: 'app',
  components:{
    'app-Header':Header
  }
}
</script>

<style>

</style>
