<template>
    <div>
        <form   @submit.prevent="addTodo">
            <input type="text" v-model="title" name="title" placeholder="请添加代办事项...">
            <input type="submit" value="添加" class="btn">
        </form>
    </div>
</template>

<script>
    //import uuid from 'uuid'
    export default {
        name: "AddTodo",
        data(){
            return {
                title:''
            }
        },
        methods:{
            addTodo(e){
               // e.preventDefault()//取消默认事件
                console.log(this.title)
                const newTodo = {
                    //id:uuid.v4(),
                    title: this.title,
                    completed:true
                }
                console.log(newTodo)
                //注册事件
                this.$emit('handleAdd',newTodo)
                this.title=''
            }
        }
    }
</script>

<style scoped>
    form{
        display: flex;
    }
    input[type='text']{
        flex: 10;
        padding: 5px;
    }
    input[type='submit']{
        flex: 2;
    }
</style>