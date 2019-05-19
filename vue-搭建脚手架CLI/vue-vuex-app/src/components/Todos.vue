<template>
  <div class="hello">
      <div :key="index" v-for="(todo,index) in todos">
          <TodoItem :todo="todo" @deleteItem="$emit('handleDelete',todo.id)" />
      </div>
  </div>
</template>

<script>
  import TodoItem from './TodoItem'
export default {
  name: 'Todos',
  props: {
    todos:{
      type:Array
    }
  },
  components:{
    TodoItem,
  }
}
</script>
<style scoped>

</style>
