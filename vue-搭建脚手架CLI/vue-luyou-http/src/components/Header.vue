<template>
    <header>
      <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: "app-Header",
      data(){
          return {
            title:'vue.js Dome'
          }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
header{
  margin: 0;
  padding: 0;
  background: lightseagreen;
  padding: 10px;
}
  h1{
    margin: 0;
    padding: 0;
    color: #222222;
    text-align: center;
  }
</style>
