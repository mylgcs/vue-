<template>
    <div class="todos">
        <div :key="index" v-for="(todo,index) in todos">
           <Todoitem :todo="todo" @deleteItem="$emit('handleDelete',todo.id)"/>
        </div>
    </div>
</template>

<script>
    import Todoitem from './Todoitem'
    export default {
        name: "todos",
        //props:['todos']
        props:{
            todos:{
                type:Array
            }
        },
        components:{
            Todoitem
        },
        methods:{
           /* deleteItem(id){
                console.log((id))
            }*/
        }
    }
</script>

<style scoped>

</style>