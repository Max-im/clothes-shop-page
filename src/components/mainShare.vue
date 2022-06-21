<template> 
  <div v-if="pageSize !== 'M'" class="mainProduct__shareWrap">
    
    <a 
      href="#"
      v-if="pageSize === 'L'"
      @click.prevent="showShare"
      class="mainProduct__shareBtn">Share it!
    </a>
    
    <div
      v-show="shareIsVisiable" 
      class="mainProduct__shareWindow">
      
      <h5 
        v-if="pageSize === 'L'"
        class="mainProduct__shareHeader">
        Share width
      </h5>
      
      <a 
        href="#" 
        v-if="pageSize === 'L'"
        @click.prevent="hideShare"
        class="mainProduct__shareClose">
      </a>
      
      <ul class="mainProduct__shareList">
        <li v-for="(item, index) in social">
          <a 
            :key="index"
            @click.prevent = "getShare"
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
  </div>
</template>




<script>

export default {
  name: 'mainShare',
  data () {
    return {
    }
  },
  props: ['pageSize', 'showShare', 'shareIsVisiable', 'hideShare', 'social', 'getShare'],
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
  &__shareWrap{
    display: inline-block;
    position: relative;
    margin: 0 0 0 15px;
  }
  &__shareBtn{
    font-weight: bold;
    color: $vBlue;
    font-size: 18px;
  }
  &__shareWindow{
    position: absolute;
    width: 290px;
    height: 110px;
    box-sizing: border-box;
    top: calc( 100% + 15px);
    left: calc(50% - 145px);
    background: #fff;
    padding: 15px 15px 20px 15px;
    color: $vBlue;
    font-weight: bold;
    font-size: 18px;
    z-index: 10;
    box-shadow: 0 0 5px rgba(0,0,0,.75);
    &:after{
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: -10px;
      left: calc(50% - 15px);
      background: #fff;
      z-index: -1;
      transform: rotate(45deg);
      box-shadow: 0 0 5px rgba(0,0,0,.75);
    }
    &:before{
      content: '';
      position: absolute;
      width: 40px;
      height: 20px;
      top: 0px;
      left: calc(50% - 25px);
      background: #fff;
      z-index: 0;
    }
  }
  &__shareHeader{
    margin: 0 0 10px 0;
  }
  &__shareClose{
    position: absolute;
    display: block;
    right: 10px;
    top: 10px;
    width: 15px;
    height: 15px;
    background: url('../assets/share/cancel.svg');
    background-size: cover;
  }
  &__shareList{
    display: flex;
    justify-content: space-between;
  }
  &__shareLink{
    width: 40px;
    height: 40px;
    display: block;
  }
  &__shareImg{
    width: 100%;
    height: 100%;
  }
}



 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {
.mainProduct{
 &__shareList{
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    z-index: 15;
    flex-direction: column;
  }
  &__shareLink{
    margin: 0 0 10px 0;
  }
}



}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {
.mainProduct{
    &__shareWrap{
    display: block;
    position: static;
    margin: 0px;
  }
  &__shareWindow{
    position: static;
    display: block;
    width: 100%;
    height: auto;
    left: 0;
    top: 0;
    background: none;
    padding: 0px;
    box-shadow: none;
    &:after{
      display: none;
    }
    &:before{
      display: none;
    }
  }
  &__shareList{
    position: static;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin: 30px 0;
  }
  &__shareLink{
    width: 40px;
    height: 40px;
    display: block;
    margin: 0px 10px 0 0;
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
