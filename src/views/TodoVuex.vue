<template>
    <h1><u>· Lista de Earl ·</u></h1>
    <!-- <h4> |· Tareas pendientes ·| {{ $store.state.todos.filter( t => !t.completed ).length }} </h4> -->
   <h3>Tareas pendientes : </h3>
   <p> {{ pending.length }} </p>   
 <!-- <h4> Todos: {{ all.length }} </h4> -->
 <!-- <h4> Completados: {{ completed.length }} </h4> -->
 <hr>
 <button :class="{'active': currentTab === 'all'}" @click="currentTab='all'"> Todos </button>
 <button :class="{'active': currentTab === 'pending'}" @click="currentTab='pending'"> Pendientes </button>
 <button :class="{'active': currentTab === 'completed'}"  @click="currentTab='completed'"> Completados</button>
 <hr>
 <div>
    <ul> <!-- IMPORTANTE KEY EN EL V-FOR -->
        <li v-for="todo in getTodosByTab" :key="todo.id" 
        :class="{ 'completed': todo.completed }"
        @dblclick="toggleTodo( todo.id )" >
        <!--Al devolver un bool se puede omitir "=== true" [ECMA6 JS]-->
           {{ todo.text }}
        </li>
    </ul>
</div>
</template> 


<!--   commit - ejecutar acciones/mutaciones   -->
<!--   dispatch - despachar acciones (asincrono)   -->
<script>
import useTodos from "../composables/useTodos";

export default {
    // composition api , [!] no hay this! , Recomendacion NO USAR METODOS   
    setup() { 
        const { pending , currentTab , getTodosByTab , toggleTodo } = useTodos()

        return {
            currentTab,
            getTodosByTab,
            pending,
            toggleTodo
        }

    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}
ul {
    width: 300px;
    text-align: left;
}
li {
    list-style: none;
    cursor: pointer;
}
.active{
    background-color:#2c3e50;
    color:white;
}
.completed {
    text-decoration: line-through 2px red;
}
</style>