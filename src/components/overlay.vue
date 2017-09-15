<template> 
    <div v-show="overlayShow" @click="hideOverlay" class="overlay">
      <img 
        class="overlay__img"
        :src="'./src/assets/' + pathImg" 
        alt="pathImg">
        <a 
          href="#" 
          @click.prevent="hideOverlay" 
          class="overlay__close">
        </a>
    </div>
</template>




<script>

export default {
  name: 'overlay',
  data () {
    return {
    }
  },
  props: ['hideOverlay', 'pathImg', 'overlayShow'],
  methods:{
   
  }
}



</script>






<style lang="scss">


.overlay{
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
  background: rgba(0,0,0,.7);
  &__img{
    margin: auto;
    width: 400px;
    height: auto;
    transform: scale(1.5);
  }
  &__close{
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 30px;
    right: 30px;
    background: url('../assets/share/cancel.svg');
    background-size: cover;
    opacity: .3;
    &:hover{
      opacity: .5;
    }
  }
}


 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {
.overlay{
  &__img{
    width: 400px;
    transform: scale(1.3);
  }
  &__close{
    width: 30px;
    height: 30px;
    top: 30px;
    right: 30px;
  }
}



}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {
.overlay{
  &__img{
    width: 400px;
    transform: scale(1.1);
  }
  &__close{
    width: 20px;
    height: 20px;
    top: 30px;
    right: 30px;
  }
}


}



/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {

}





/* Custom, iPhone Retina */
@media only screen and (max-width : 320px) {



}






/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {




}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {



}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {



}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {



}


</style>
