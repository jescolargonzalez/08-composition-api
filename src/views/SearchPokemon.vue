<template>
    <h1>Buscar pokémon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
        <!--DATA-BINDINGS-->
        <input 
            type="number"
            placeholder="Número del pokémon"
            v-model="pokemonId" 
            ref="txtSearchId"
        >
    </form>
    <br>
    <span>Presione enter para buscar</span>
    <hr>
   
    
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router' //Router = navegacion | Route = ruta

export default {
    
    setup() { //((NO HAY ACCESO AL .THIS))//
        
        const router = useRouter()

        const pokemonId = ref(1) // Valor por defecto
        const txtSearchId = ref() //Solucion problema foco 1/2

        onActivated(() => {
            // txtSearchId.value.focus()
            txtSearchId.value.select() //Solucion problema foco 2/2
        })

        return {
            pokemonId,
            txtSearchId,

            onSubmit: () => {
                // console.log('pokemon a buscar:', pokemonId.value )
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
            }
        }
    }
}
</script>
