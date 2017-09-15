<template> 
  <div class="mainProduct__btnWrap">
    <a 
      href="#" 
      @click.prevent="addToCard"
      class="mainProduct__btn">
      add to cart
    </a>
  </div>
</template>




<script>

export default {
  name: 'mainBtn',
  data () {
    return {
    }
  },
  props: ['addToCard'],
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
  &__btnWrap{
    position: relative;
  }
  &__btn{
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: $vBlack;
    display: inline-block;
    background: $btnColor;
    padding: 15px 55px;
    border-radius: 50px;
  }
  &__errorMsg{
    position: absolute;
    border: 2px solid $vRed;
    padding: 5px 15px;
    background: lighten($vRed, 30%);
    border-radius: 30px;
    top: calc(100% + 20px);
    left: 15px;
    &:after{
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border: 2px solid $vRed;
      background: lighten($vRed, 30%);
      position: absolute;
      transform: rotate(45deg);
      top: -6px;
      z-index: 0;
      left: calc(50% - 10px / 2 );
    }
    &:before{
      content: '';
      display: block;
      width: 20px;
      height: 12px;
      z-index: 5;
      background: lighten($vRed, 30%);
      position: absolute;
      top: 0px;
      left: calc(50% - 8px);
    }
  }
  &__successMsg{
    @extend .mainProduct__errorMsg;
    background: lighten($vBlue, 30%);
    border: 2px solid $vBlue;
    left: 0;
    &:after{
      border: 2px solid $vBlue;
      background: lighten($vBlue, 30%);
    }
    &:before{
      background: lighten($vBlue, 30%);
    }
  }
}



 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {
.mainProduct{
 &__btn{
    font-size: 18px;
    padding: 15px 50px;
    letter-spacing: 1.1px;
  }
}



}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {
.mainProduct{
    &__btnWrap{
    text-align: center;
  }
  &__btn{
    font-size: 18px;
    padding: 15px 50px;
    letter-spacing: 1.1px;
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
