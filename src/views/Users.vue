<template>
    <h2 v-if="isLoading">Espere por favor...</h2>    
    <h2 v-else>Usuarios</h2>
    <hr>
    <h5 v-if="errorMessage" class="error">{{ errorMessage }}</h5>
    <hr>


    <div v-if="users.length > 0">
        <UserList :users="users" v-slot="{user}">
            <h5>{{user.first_name}} - {{user.last_name}}</h5>
            <span>{{user.email}}</span>
        </UserList>
    </div>
    <hr>
    <hr>
    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>
    <span> Página: {{ currentPage }}</span>
    <hr>

</template>

<script>
import useUsers from '../composables/useUsers'
import UserList from '../components/UserList.vue';
export default {
    components:{ UserList },
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