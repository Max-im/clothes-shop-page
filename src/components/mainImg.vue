<template> 
  <div class="mainProduct__imgWrap">
    <img 
      class="mainProduct__img"
      :src="'./src/assets/' + pathImg"
      @click="showOverlay" 
      :alt="alt">

      <ul v-if="pageSize === 'M'" class="mainProduct__shareList">
            <li v-for="(item, index) in social">
              <a 
                :key="index"
                class="mainProduct__shareLink" 
                href="#">
                <img 
                  :src="'./src/assets/share/'+item" 
                  class="mainProduct__shareImg"
                  alt="item">
              </a>
            </li>
          </ul>
  </div>
</template>




<script>

export default {
  name: 'mainImg',
  data () {
    return {
    }
  },
  props: ['showOverlay', 'pathImg', 'alt', 'pageSize', 'social'],
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
 &__imgWrap{
    flex: 0 0 50%;
    position: relative;
  }
  &__img{
    cursor: pointer;
    width: 100%;
  }
}



 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {
.mainProduct{
  &__imgWrap{
    flex: 0 0 50%;
  }
}



}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {
.mainProduct{
   &__imgWrap{
    flex: 0 0 100%;
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
