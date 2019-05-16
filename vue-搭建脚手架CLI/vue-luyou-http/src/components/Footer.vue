<template>
    <footer>
        <p>{{copyright}}</p>
    </footer>
</template>

<script>
    export default {
        name: "app-footer",
      data(){
          return {
            copyright:'Copy right 2017 vue.js'
          }
      }
    }
</script>

<style scoped>
  footer{
    background: #222222;
    padding: 6px;
  }
  p{
    color: lightseagreen;
    text-align: center;
  }
</style>
