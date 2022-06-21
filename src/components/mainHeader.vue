<template> 
    <h3 class="mainProduct__header">
      {{pathHeader}}
      <span class="mainProduct__headerTail">
        {{pathTail}}
      </span>
    </h3>
</template>




<script>

export default {
  name: 'mainHeader',
  data () {
    return {
    }
  },
  props: ['pageSize', 'pathHeader', 'pathTail'],
  methods:{
   
  }
}



</script>






<style lang="scss">

 $btnColor: #8ae6cf;
  $vRed: #ce2c52;
  $vBlue: #2c87ce;
  $vGray: #282828;
  $vBlack: #2c303d;


.mainProduct{
  &__header{
    text-transform: uppercase;
    font-family: Oswald;
    font-weight: bold;
    font-size: 24px;
    margin: 0 0 10px 0;
  }
}



 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {
.mainProduct{
  &__header{
    font-size: 24px;
    flex: 0 0 100%;
    margin: 0 0 10px 0;
  }
}



}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {
.mainProduct{
  &__header{
    font-size: 24px;
    flex: 0 0 100%;
    padding: 0 35px;
    box-sizing: border-box;
    margin: 0 0 10px 0;
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
