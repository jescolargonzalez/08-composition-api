<template>
    <h1>- Counter View -</h1>
<hr>
    <h2> {{ counter }} </h2>
<hr>
    <button @click="increase"> +1 </button>
    <button @click="decrease"> -1 </button>
<hr>

</template>
    

<script>
import useCounter from '@/composables/useCounter'

export default {
    name: 'Counter',
    props: {},
    emits: [],
    setup() {

        const { counter, increase, decrease } = useCounter(25) // SE DESESTRUCTURA LO UTILIZADO: vars,function's...
       
         //** SE RETORNA LO QUE SE VA A USAR EN EL TEMPLATE **//
        return {
            counter, increase, decrease
        }
    },
}
</script>

<style>

</style>