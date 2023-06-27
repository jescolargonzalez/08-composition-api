//COMPOSABLE'S FUNCTIONS    //**  ES COMO EL SCRIPT SETUP Y SE IMPORTA EN LA VISTA **/
import { ref } from 'vue'

const useCounter = ( initValue = 5 ) => {  // initValue sirve para que tenga un valor por defecto si no se define explicitamente
     //var reactivas
    const counter = ref( initValue )

    return {
        //obj reactivo
        counter,
        //metodos
        decrease: () => counter.value--,
        increase: () => counter.value++,
    }

}


export default useCounter