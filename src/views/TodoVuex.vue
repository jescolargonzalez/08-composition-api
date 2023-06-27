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
<button @click="isOpen=true"> Crear Todo </button>
  <!-- Modal -->
  <modal v-if="isOpen" @on:close="isOpen = false">
    <template v-slot:header>
        <h1>Nueva Tarea</h1>
    </template>
    <template v-slot:body> 
        <form @submit.prevent="createTodo(newTodoText); isOpen=false">
            <input type="text" name="text" id="text" placeholder="Nueva Tarea.." v-model="newTodoText">
        <br><br>
        <button type="submit">Crear Tarea</button>
        </form>
    </template> 
</modal>
<!--
    Formulario
    submit.prevent
    createTodo
-->
</template> 



<!--   commit - ejecutar acciones/mutaciones   -->
<!--   dispatch - despachar acciones (asincrono)   -->
<script>
import { ref } from 'vue';
import useTodos from "../composables/useTodos";
import Modal from '../components/Modal.vue';

export default {
    components: { Modal },
// composition api , [!] no hay this! , Recomendacion NO USAR METODOS   
    setup() { 
        const { pending , currentTab , getTodosByTab , toggleTodo , createTodo } = useTodos()
     
        return {
            currentTab,
            getTodosByTab,
            pending,
            toggleTodo,
            createTodo,
            
            isOpen: ref(false),
            newTodoText: ref('')
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