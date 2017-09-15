<template> 
  <section class="grid">
      <div class="container">
        
        <h3 class="grid__header">you may also like</h3>
        
        <div class="grid__slider">
          <div class="grid__listWrap">
            <ul class="grid__list">
              <li 
                class="grid__listItem"
                v-for="(item, index) in products" 
                @click.prevent="makeItomMain(index)"
                v-if="index !== mainProduct">
                  <a href="#">
                    <img 
                      :src="'./src/assets/'+item.imgMin" 
                      class="grid__img"
                      alt="item.header">
                    
                    <p class="grid__price">
                    <span 
                      :class="[products[index].newPrice == '' ? '' :  'grid__oldPrice' ]">
                      {{ products[index].price | currency }} 
                    </span>
                    <span 
                      v-if="products[index].newPrice !== ''"
                      class="grid__newPrice">
                      {{products[index].newPrice | currency}}
                    </span>
                  </p>
            
                  </a>
              </li>
            </ul>
          </div>
          <div class="grid__listControl" v-if="pageSize === 'S'">
            <a 
              class="grid__controlLink grid__controlLink_prev" 
              @click.prevent="sliderControl"
              href="#">
            </a>
            <a 
              class="grid__controlLink grid__controlLink_next" 
              @click.prevent="sliderControl"
              href="#">
            </a>            
          </div>
        </div>


      </div> <!-- container -->
    </section> <!-- grid -->

</template>




<script>

export default {
  name: 'grid',
  data () {
    return {
    }
  },
  props: ['products', 'makeItomMain', 'mainProduct', 'pageSize', 'sliderControl'],
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


.grid{
  &__header{
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 15px 0;
  }
  &__listWrap{
    position: relative;
  }
  &__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__listItem{
    margin: 0 0 15px 0;
    position: relative;
  }
  &__img{
    width: 100%;
    height: 100%;
  }
  &__price{
    position: absolute;
    bottom: 20px;
    right: 0;
    padding: 0 5px;
    background: $btnColor;
    font-weight: bold;
    font-size: 16px;
    color: $vBlack;
  }
  &__oldPrice{
    text-decoration: line-through;
  }
  &__newPrice{
    color: $vRed;
    margin: 0 0 0 10px;
  }
}




 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {

.grid{
  &__header{
    margin: 0 0 15px 0;
    text-align: center;
  }
  &__list{
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__listItem{
    margin: 0 0 15px 0;
    width: 300px;
  }
  &__price{
    position: absolute;
    bottom: 0px;
    left: 0;
    padding: 0px;
    background: rgba(138,230,207,.8);
    font-size: 22px;
    text-align: center;
    line-height: 30px;
  }
  &__oldPrice{
    display: none;
  }
  &__newPrice{
    color: $vRed;
    margin: 0 0 0 10px;
  }
}





}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {

.grid{
  &__header{
    margin: 0 0 15px 0;
    font-size: 24px;
    text-align: center;
  }
  &__slider{
    position: relative;
  }
  &__listWrap{
    width: 280px;
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
  }
  &__list{
    flex-wrap: nowrap;
    justify-content: flex-start;
    position: relative;
    left: 0;
    transition: all .5s ease-in-out;
  }
  &__listItem{
    margin: 0px;
    width: 280px;
    flex: 0 0 280px;
  }
  &__controlLink{
    position: absolute;
    z-index: 20;
    display: block;
    width: 30px;
    height: 50px;
    background: url('../assets/chevron.svg');
    background-size: cover;
    top: calc( 50% - 15px);
    opacity: .7;
    &:hover{
      opacity: 1;
    }
    &_prev{
      left: 10px;  
    }
    &_next{
      transform: rotate(180deg);
      right: 10px;  
    }
  }
  &__price{
    position: absolute;
    bottom: 0px;
    left: 0;
    padding: 0px;
    background: rgba(138,230,207,.8);
    font-size: 22px;
    text-align: center;
    line-height: 30px;
  }
  &__oldPrice{
    display: none;
  }
  &__newPrice{
    color: $vRed;
    margin: 0 0 0 10px;
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
