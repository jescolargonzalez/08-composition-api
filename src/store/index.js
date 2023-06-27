import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
//STORE GLOBAL
export default createStore({
  state: {
    todos:[
      {id:'1', text:'Awajandermordou', completed: true},
      {id:'2', text:'Peteklander', completed: false},
      {id:'3', text:'Juajijajoija', completed: true},
      {id:'4', text:'Oferta en batidos de heces', completed: true},
      {id:'5', text:'Calzoncillos meados', completed: false},
      {id:'6', text:'BONUS-TRACK!!', completed: false},
    ]    
  },
  mutations: {
    toggleTodo( state, id ) {
      const todoIdx = state.todos.findIndex( todo => todo.id === id) //Indice ToDo
      //  console.log('indexTodo: ',todoIdx)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },
    createTodo(state, text=''){      
      if ( text.length <= 1 ) return
      state.todos.push({
        id: uuidv4(),
        completed: false,
        text
      })
    }
  },
  actions: {
  },
  getters:{ 
    //rootState == estadoGlobal
    pendingTodos:( state , getters , rootState) => {
      return state.todos.filter(todo => !todo.completed)
    },
    allTodos: ( state , getters , rootState) => {
      console.log({state , getters , rootState});
      return state.todos     
    },
    completedTodos: ( state , getters , rootState ) =>  {
      return state.todos.filter(todo => todo.completed)
    },
    //funcion recursiva (se llama a si misma)
    getTodosByTab: ( _ , getters ) => ( tab ) => {
      switch ( tab ) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    }, 
    
  },
  modules: {
  }
})
