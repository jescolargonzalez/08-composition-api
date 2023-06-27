import { computed , ref } from 'vue'
import { useStore } from 'vuex'
//   COMPOSABLE
const useTodos = () => {

    const store = useStore()
    const currentTab = ref('all')        

    return {  
        currentTab,
        // al ser solo utilizada en el template, se coloca aqui en vez de una const fuera del return como el store.
        pending: computed( () => store.getters['pendingTodos']),// Array's
        all: computed( () => store.getters['allTodos']),// Array's
        completed: computed( () => store.getters['completedTodos']),// Array's
        getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value) ),
        //Method's
        toggleTodo: ( id ) => { store.commit('toggleTodo', id) }       
    }   
}

export default useTodos