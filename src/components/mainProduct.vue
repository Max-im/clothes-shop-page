<template> 
  <div class="app">
      
    <section class="mainProduct">

      <div class="container_flex mainProduct__container">
       
        <mainHeader 
          v-if="pageSize !== 'L'"
          :pathHeader="products[mainProduct].header"
          :pathTail="products[mainProduct].headerTail"
          :pageSize="pageSize">
        </mainHeader>


        <mainImg 
          :pathImg="products[mainProduct].img"
          :alt="products[mainProduct].header"
          :social="social"
          :showOverlay="showOverlay"
          :pageSize="pageSize">
        </mainImg>


        <div class="mainProduct__info">
          
          <mainHeader 
            v-if="pageSize === 'L'"
            :pathHeader="products[mainProduct].header"
            :pathTail="products[mainProduct].headerTail"
            :pageSize="pageSize">
          </mainHeader>
        

          <p class="mainProduct__item">
            Item #: 
            <span class="mainProduct__id">
              {{products[mainProduct].id}}
            </span>
          </p>
        

          <mainPrice 
            :pathProduct="products[mainProduct]">
          </mainPrice>

        
          <div class="mainProduct__starsAndShareWrap">
            
            <starsList 
              :setStar="setStar"
              :estimateProduct="estimateProduct"
              :pathProduct="products[mainProduct]">
            </starsList>
            

            <mainShare 
              :shareIsVisiable="shareIsVisiable"
              :social="social"
              :hideShare="hideShare"
              :showShare="showShare"
              :pageSize="pageSize">
            </mainShare>
          </div>
        

          <div class="mainProduct__aboutWrap">
            <h5 class="mainProduct__blockHeader">{{aboutHeader}}</h5>  
            <p class="mainProduct__about">
              {{products[mainProduct].about}}
            </p>
          </div>
        

          <size 
            :pathSize="products[mainProduct].size"
            :chooseSize="chooseSize"
            :sizeHeader="sizeHeader">
          </size>
        

          <mainBtn 
            :addToCard="addToCard">
          </mainBtn>

        </div> <!-- mainProduct__info -->

      </div> <!-- container -->
    </section>

    <grid 
      :makeItomMain="makeItomMain"
      :mainProduct="mainProduct"
      :sliderControl="sliderControl"
      :pageSize="pageSize"
      :products="products">
    </grid>


    <overlay 
      :pathImg="products[mainProduct].img"
      :overlayShow="overlayShow"
      :hideOverlay="hideOverlay">
    </overlay>

    
  </div>
</template>




<script>
import mainHeader from './mainHeader.vue';
import mainImg from './mainImg.vue';
import mainPrice from './mainPrice.vue';
import starsList from './starsList.vue';
import mainShare from './mainShare.vue';
import size from './size.vue';
import mainBtn from './mainBtn.vue';
import grid from './grid.vue';
import overlay from './overlay.vue';


const data = require('../assets/db/db');


export default {
  name: 'app',
  data () {
    return {
      pageSize: '',
      productsStars: {},
      overlayShow: false,
      shareIsVisiable: false,
      mainProduct: 0,
      products: data.db,
      social: ['fb.svg', 'twitter.svg', 'pinterest.svg', 'yt.svg', 'instagram.svg']     
    }
  },
  components: {
    mainHeader,
    mainImg,
    mainPrice,
    starsList,
    mainShare,
    size,
    mainBtn,
    grid,
    overlay
  },

  computed:{
    sizeHeader: function() {
      return this.pageSize === 'L' ? 'size' : 'select a size';
    },
    aboutHeader: function() {
      return this.pageSize !== 'M' ? '' : 'details:';
    }
  },
  methods:{
    chooseSize: function(e){
      const target = e.target;
      const currentActive = document.querySelector('.mainProduct__sizeListItem_active');
      if(currentActive){
        currentActive.classList.remove('mainProduct__sizeListItem_active');
      }
      target.classList.add('mainProduct__sizeListItem_active')
    },
    
    setStar: function(index) {
      if(!this.productsStars[this.mainProduct]){
        this.products[this.mainProduct].stars = index + 1;
      }
    },

    estimateProduct: function(e){
      this.productsStars[this.mainProduct] = e;
    },

    showShare: function() {
      this.shareIsVisiable = !this.shareIsVisiable;
    },
    
    hideShare: function() {
      this.shareIsVisiable = false;
    },
    
    makeItomMain: function(index) {
      const size = document.querySelector('.mainProduct__sizeListItem_active');
      if(size){
        size.classList.remove('mainProduct__sizeListItem_active');
      }
      this.mainProduct = index;
    },

    showOverlay: function() {
      this.overlayShow = true;
    },
    
    hideOverlay: function(e) {

      if(e.target.nodeName === 'IMG') return;
      this.overlayShow = false;
    },
    
    sliderControl: function(e){
      const target = e.target.closest('a');
      const slider = document.querySelector('.grid__list');
      const len = document.querySelectorAll('.grid__listItem').length;
      const switchEl = 280;
      let leftStyle = parseInt(slider.style.left) || 0;

      if(target.classList.contains('grid__controlLink_prev')){
        
        if( leftStyle === 0 ) {
          return;
        }

        leftStyle += switchEl;
      }
      else{
        if( leftStyle === - (len - 1) * switchEl ) {
          return;
        }

        leftStyle -= switchEl;
      }
      
      slider.style.left = leftStyle + 'px';
    },

    addToCard: function(e) {
      const sizeEl = document.querySelector('.mainProduct__sizeListItem_active');
      if(!sizeEl) {
        addMsg('Please select a size', 'mainProduct__errorMsg');
        return;
      };
      function addMsg(txt, className){
        const parent = document.querySelector('.mainProduct__btnWrap');
        const msg = document.createElement('p');
        msg.classList.add(className);
        msg.innerHTML = txt;
        parent.insertBefore(msg, null);
        setTimeout(function(){
          parent.removeChild(msg);
        }, 3000);
      }

      const index = sizeEl.closest('li').getAttribute('data-number');
      const vPath = this.products[this.mainProduct];
      const newProduct = {
        id: vPath.id,
        header: vPath.header,
        img: vPath.img,
        imgMin: vPath.imgMin,
        price: vPath.price,
        newPrice: vPath.newPrice,
        size: vPath.size[index]
      };
      addMsg('The product was added', 'mainProduct__successMsg');
      console.table(newProduct);
    },

    resizeWidow: function(){
      const pageWidth = window.innerWidth;
      if( pageWidth > 935 ) {
        this.pageSize = "L";
        this.shareIsVisiable = false;
      }
      else if ( pageWidth > 730 ) {
        this.pageSize = "M";
        this.shareIsVisiable = false;
      }
      else{
        this.pageSize = "S";
        this.shareIsVisiable = true;
      }
    }
  },

  created: function() {
    this.resizeWidow();
    window.addEventListener('resize', this.resizeWidow);
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
  &__info{
    margin: 0 0 0 60px;
  }
  &__item{
    font-size: 10px;
    opacity: .7;
    margin: 0 0 20px 0;
  }
  &__starsAndShareWrap{
    margin: 0 0 20px 0;
  }
  &__about{
    color: $vGray;
    font-size: 12px;
    font-weight: 100;
    text-align: justify;
    margin: 0 0 30px 0;
  }
}




 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Small Devices, Tablets */
@media only screen and (max-width : 935px) {
.mainProduct{
  &__container{
    flex-wrap: wrap;
  }
  &__info{
    flex: 0 0 50%;
    margin: 0px;
    padding: 0 0 0 20px;
    box-sizing: border-box;
  }
  &__item{
    font-size: 10px;
    margin: 0px;
  }
  &__starsAndShareWrap{
    margin: 0 0 10px 0;
  }
  &__about{
    font-size: 12px;
    font-weight: 100;
    text-align: justify;
    margin: 0 0 15px 0;
  }
}


}




/* Extra Small Devices, Phones */
@media only screen and (max-width : 730px) {

.mainProduct{
  &__headerTail{
    display: block;
  }
  &__info{
    flex: 0 0 100%;
    margin: 20px 0 0 0;
    padding: 0 35px;
    box-sizing: border-box;
  }
  &__item{
    font-size: 10px;
    margin: 0px;
  }
  &__starsAndShareWrap{
    margin: 0 0 10px 0;
  }

  &__about{
    font-size: 14px;
    font-weight: 100;
    text-align: justify;
    margin: 0 0 30px 0;
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
