<template>
    <div class="todo-item" :class="{'is-complete':!todo.completed}">
        <p>
            <input type="checkbox" @change="markComplete">
            {{todo.title}}
            <button class="del" @click="$emit('deleteItem',todo.id)">x</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Todoitem",
        props:['todo'],
        methods:{
            markComplete(){
               // console.log(this.todo)
                this.todo.completed = !this.todo.completed
            }
        }
    }
</script>

<style scoped>
    .todo-item{
        background: #F4F4F4;
        padding: 10px;
        border-bottom: 1px dotted #cccccc;
    }
    .is-complete{
        text-decoration:line-through;
    }
    .del{
        background: #ff0000;
        color: white;
        border: none;
        padding: 5px 9px;
        cursor: pointer;
        float: right;
        border-radius: 50%;
    }
</style>