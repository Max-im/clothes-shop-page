<template> 
    <div class="mainProduct__sizeWrap">
      <h5 class="mainProduct__blockHeader">{{sizeHeader}}:</h5>
      <ul class="mainProduct__sizeList">
        <li 
          v-for="(item, index) in pathSize"
          :key="index"
          :data-number="index"
          @click.prevent="chooseSize">
          <a class="mainProduct__sizeListItem" href="#">
            {{item}}
          </a>
        </li>
      </ul>
    </div>
</template>




<script>

export default {
  name: 'size',
  data () {
    return {
    }
  },
  props: ['sizeHeader', 'pathSize', 'chooseSize'],
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
 &__sizeWrap{
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    margin: 0 0 15px 0;
  }
  &__blockHeader{
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__sizeList{
    @extend .mainProduct__sizeWrap;
  }
  &__sizeListItem{
    display: block;
    border: 1px solid $vBlack;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    text-transform: uppercase;
    color: $vBlack;
    background: #fff;
    font-size: 10px;
    font-weight: bold;
    margin: 0 0 0 10px;
    transition: all .3s;
    &:hover{
      background: $vBlack;
      color: #fff;
      transition: all .3s;
    }
    &_active{
      background: $vBlack;
      color: #fff;
    }
  }
}



 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {
.mainProduct{
   &__sizeWrap{
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    margin: 0px 0 10px 0;
  }
  &__blockHeader{
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    width: 100%;
    margin: 0 0 10px 0;
  }
  
  &__sizeListItem{
    margin: 0 15px 0 0px;
  }
}



}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {
.mainProduct{
  &__sizeWrap{
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    margin: 0px 0 30px 0;
  }
  &__blockHeader{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    margin: 0 0 10px 0;
  }
  &__sizeList{
    margin: 0 auto;
  }
  &__sizeListItem{
    margin: 0 10px;
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
