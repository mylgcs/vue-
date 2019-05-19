<template>
    <form @submit.prevent="AddTodo">
        <input v-model="title" type="text" name="title" placeholder="请添加代办事项">
        <input type="submit" value="添加" class="btn" >
    </form>
</template>

<script>
    export default {
        name: "AddTodo",
        data(){
            return {
                title:''
            }
        },
        methods:{
            AddTodo(e){
                const newTodo = {
                    title: this.title,
                    completed:false
                };
                //console.log(newTodo);
                this.$emit('handleAdd',newTodo);
                this.title=''
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }
</style>