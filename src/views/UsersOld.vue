<template>
    <h2 v-if="isLoading">Espere por favor...</h2>    
    <h2 v-else>Usuarios</h2>
    <hr>
    <h5 v-if="errorMessage" class="error">{{ errorMessage }}
        <hr>
    </h5>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="{ first_name, last_name, email, id } in users" :key="id"> <!-- Desestruracion :) -->
                <h3>{{ first_name }} {{ last_name }}</h3>
                <h4>{{ email }}</h4>
            </li>
        </ul>
    </div>
    <hr>
    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span> Página: {{ currentPage }}</span>

</template>

<script>
import useUsers from '../composables/useUsers'

export default {

    setup() {

        const { 
            currentPage,
            errorMessage,
            isLoading,
            nextPage,
            prevPage,
            users,
         } = useUsers()
 // Desestructuraccion completa ((SE BORRA EL RESTO DE SETUP Y SE DEJA EN RETURN))
        return {
            //...useUsers()  
            isLoading,
            errorMessage,
            users,
            prevPage,
            nextPage,
            currentPage,
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 250px;
    list-style: none;
}
</style>