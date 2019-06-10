const state = {
    todos:[
        /*{userId:1,id:1,title:"delectus aut autem",completed:false },
        {userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:false },
        {userId:1,id:3,title:"fugiat veniam minus",completed:false },*/
    ]
}

const getters = {
    allTodos: state => state.todos
};

const mutations = {
    setTodos:(state,todos) =>(state.todos = todos),
    newTodo:(state,todo) => state.todos.unshift(todo),
    removeTodo:(state,id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    updateTodo:(state,updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1){
            state.todos.splice(index ,1 ,updTodo)
        }
    }
};

const actions = {
    async fetchTodos({commit}){
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        //console.log(response)
        commit('setTodos',response.data)
    },
    async AddTodo({commit},title) {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed: false})
        commit('newTodo',response.data);
    },
    async deleteTodo({commit},id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo',id);
    },
    async filterTodos({commit},count) {
        //console.log(count)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`);
        commit('setTodos',response.data);
    },
    async updateTodo({commit},updTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
        commit('updateTodo',response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}