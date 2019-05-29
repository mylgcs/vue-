<template>
    <header class="header">
        <h1>代办事项</h1>
        <div class="nav">
            <router-link to="/">主页</router-link>
            <router-link to="/about">关于</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
.header{
    background: #333333;
    color: white;
    text-align: center;
    padding: 10px;
}
    .header a{
        color: white;
        text-decoration: none;
    }
</style>