<template> 
  <ul class="mainProduct__starsList">
    <li v-for="(item, index) in 5" 
    class="mainProduct__starListItem">
      <a 
        key="index"
        @mouseover="setStar(index)"
        @click="estimateProduct(index)"
        class="mainProduct__star" 
        href="#" 
        :class="[item > pathProduct.stars ? 'mainProduct__star_gray' : 'mainProduct__star_bright']">
      </a>
    </li>
  </ul>
</template>




<script>

export default {
  name: 'starsList',
  data () {
    return {
    }
  },
  props: ['setStar', 'estimateProduct', 'pathProduct'],
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
  &__starsList{
    display: inline-block;
  }
  &__starListItem{
    display: inline-block;
  }
  &__star{
    display: inline-block;
    margin: 0 2px 0 0;
    width: 16px;
    height: 16px;
  }
  &__star_bright{
    background: url('../assets/star-bright.svg');
    background-size: cover;    
  }
  &__star_gray{
    background: url('../assets/star-gray.svg');
    background-size: cover;    
  }
}



 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {
.mainProduct{
 &__star{
    margin: 0 2px 0 0;
    width: 16px;
    height: 16px;
  }
}



}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {
.mainProduct{
  &__star{
    margin: 0 2px 0 0;
    width: 16px;
    height: 16px;
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
