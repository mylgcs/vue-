<template>
  <div id="app">
    <!--<div :key="index" v-for="(todo,index) in todos">
    {{todo.title}}-{{index+1}}
  </div>-->
    <AddTodo @handleAdd="handleAdd"/>
    <todos :todos="todos" @handleDelete="handleDelete"/>
  </div>
</template>
<script>
  import todos from '../components/todos'
  import AddTodo from '../components/AddTodo'
  import axios from "axios"


  export default {
    name:'Home',
    components:{
      todos,
      AddTodo
    },
    data(){
      return {
        msg:'hello',
        todos:[
          /* {id:1,title:'代办事项1',completed:'false'},
           {id:2,title:'代办事项2',completed:'false'},
           {id:3,title:'代办事项3',completed:'false'}*/
        ]
      }
    },
    methods:{
      handleDelete(id){
        //console.log(id)
        axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
                .then(res => {
                  this.todos = this.todos.filter(todo => todo.id !== id)
                })
                .catch(err => console.log(err))
        //this.todos =  this.todos.filter(todo => todo.id !== id)
      },
      handleAdd(newTodo){
        //this.todos.unshift(newTodo)
        const {title,completed} = newTodo
        axios.post('http://jsonplaceholder.typicode.com/todos',{
          title,
          completed
        })
        //.then(res => (this.todos = [res.data,...this.todos]))
                .then(res => {
                  this.todos = [res.data, ...this.todos]
                })
                .catch(err => console.log(err))
        //this.todos = [...this.todos,newTodo]
      }
    },
    created() {
      //数据请求
      axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
              .then(res => {
                console.log(res)
                this.todos = res.data
              })
              .catch(err => console.log(err))
    }
  }
</script>
<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: Arial,Helvetica,sans-serif;
    line-height: 1.4;
  }
  .btn{
    display: inline-block;
    border: none;
    background: #555555;
    color: white;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover{
    background: #666666;
  }
</style>
