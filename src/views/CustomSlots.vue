<template>
<h1>Aprendiendo Slots</h1>
<button @click="openModal">Abrir Modal</button>
<modal v-if="isOpen" title="Hola mundo" otherTitle="Otro Titulo" @on:close="closeModal"> <!--SLOT-->        
    <!-- 
    <h2>Titulo del modal</h2>
    <p>adifhñsdfhadskhfasdfh</p>
    <button>Salir</button>
    -->
    <template v-slot:header>
        <h2>Titulo del modal</h2>
    </template> 
    <template v-slot:footer>
        <button @click="closeModal">Salir</button>
    </template> 
    <template v-slot:body>
        <p>adifhñsdfhadskhfasdfh asdsa asd asd asd qwfqw q w</p>
    </template> 
    <template v-slot:exposed="{ newTitle }">
        <h2>{{newTitle}} !! </h2>
    </template>
</modal>
</template>

<script>
import Modal from '../components/Modal.vue'
import { ref } from 'vue'

export default {
    components: { Modal },
    setup() {

        const isOpen = ref(false)

        return{
            isOpen,
            //methods
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false

        }
    }
}
</script>

<style scoped>

</style>