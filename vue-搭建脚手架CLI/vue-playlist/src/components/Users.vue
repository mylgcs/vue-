<template>
    <div class="Users">
      <h1>Hello Users</h1>
      <ul>
        <li v-for="user in users">{{user}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Users",
        data(){
          return {
            users:['Henry','Bucky','Emily']
          }
        }
    }
</script>

<style scoped>
h1{
  color: green;
}
</style>
