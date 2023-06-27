<template>
<div class="modal-background fade-in" @click.self="$emit('on:close')"> <!-- con .self no afecta a los hijos el scope-->
    <div class="modal-container">
        <slot name="header"/>
        <!-- <slot/> -->
        <slot name="body">
            <!--Recibimos el SLOT-->
            <div class="center"> <!-- Envolver para aplicar css -->
                Esto aparecera si no tenemos contenido.
            </div> 
        </slot>

        <slot name="footer"/>
        <!-- variable asignada a slot -->
        <slot name="exposed" :newTitle="newTitle"></slot>
        <!-- ver props {{ slot.props }} -->
    </div>
</div>
</template>

<script>
export default {
    props:['title'],
        //  title:{
        //    type:String,
        //    required:true
        //  }
    
    emits: ['on:close'],
// diferencia entre atributo y property : si esta definida en el setup.
// props se reciben como argumento y pueden ser utilizadas y si no esta definida en el setup se considera atributo
    setup( props, context ){
        console.log({props, context})
        return{
            newTitle: props.title?.toUpperCase()
        }
    }
}
</script>

<style scoped>
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}
.modal-container {
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}

/*ANIMACIONES*/
.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>