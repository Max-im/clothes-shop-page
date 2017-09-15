<template> 
  <p class="mainProduct__price">
    <span 
      :class="[pathProduct.newPrice == '' ? '' :  'mainProduct__oldPrice' ]">
      {{ pathProduct.price | currency }} 
    </span>
    <span 
      v-if="pathProduct.newPrice !== ''"
      class="mainProduct__newPrice">
      {{pathProduct.newPrice | currency}}
    </span>
  </p>
</template>




<script>

export default {
  name: 'mainPrice',
  data () {
    return {
    }
  },
  props: ['pathProduct'],
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
 &__price{
    font-weight: bold;
    font-size: 24px;
    margin: 0 0 20px 0;
    word-spacing: -10px;
  }
  &__oldPrice{
    text-decoration: line-through;
  }
  &__newPrice{
    color: $vRed;
    margin: 0 0 0 25px;
  }
}



 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {
.mainProduct{
 &__price{
    font-weight: bold;
    font-size: 36px;
    margin: 0 0 10px 0;
  }
  &__newPrice{
    margin: 0 0 0 25px;
  }
}



}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {
.mainProduct{
  &__price{
    font-weight: bold;
    font-size: 36px;
    margin: 0 0 10px 0;
  }
  &__newPrice{
    margin: 0 0 0 25px;
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
