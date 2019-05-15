new Vue({
    el:'#app-vue',
    data:{
        name:'',
        age:''
    },
    methods:{
        onPageDown:function () {
           this.name = this.$refs.name.value
            //  console.log(this.$refs.name.value)
        },
        logAge:function () {
            this.age = this.$refs.age.value
        }
    }
})