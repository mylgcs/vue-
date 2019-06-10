<template>
    <div>
        <h3>添加内容</h3>
        <div class="ad">
            <form @submit.prevent="onSubmit">
                <input type="text" v-model="title" placeholder="添加代办事项">
                <input type="submit" value="添加">
            </form>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "AddTodos",
        data(){
            return {
                title:''
            }
        },
        methods:{
            ...mapActions(['AddTodo']),
            onSubmit(){
                //分发actions
                this.AddTodo(this.title);
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
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}
input[type='submit']{
    flex: 2;
    background: #41b883;
    color: #ffffff;
    border: 1px solid #41b883;
    cursor: pointer;
}
</style>