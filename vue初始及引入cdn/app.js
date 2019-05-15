new Vue({
    el:'#app-vue',
    data:{
        name:'米斯特马',
        job:'web前端',
        weblist:'http://www.thenewstep.com',
        websiteTag:'<a href="http://www.thenewstep.com">Thenewstep</a>'
    },
    methods:{
        greet: function () {
            return 'Good Morning'
        }
    }
})
/*
*  el : element 需要获取的元素，一定时html中的跟容器元素
*  data : 用于数据储存
*  methods:用于存储各种方法
* data-binding:给属性绑定对应的值
* */