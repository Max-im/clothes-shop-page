<template> 
  <div class="app">
      
    <section class="mainProduct">

      <div class="container_flex mainProduct__container">
       
        <h3 class="mainProduct__header" 
          v-if="pageSize !== 'L'">
          {{products[mainProduct].header}}
          <span class="mainProduct__headerTail">
            {{products[mainProduct].headerTail}}
          </span>
        </h3>
        
        <div class="mainProduct__imgWrap">
          <img 
            class="mainProduct__img"
            :src="'./src/assets/' + products[mainProduct].img"
            @click="showOverlay" 
            :alt="products[mainProduct].header">

            <ul v-if="pageSize === 'M'" class="mainProduct__shareList">
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
        



        <div class="mainProduct__info">

          <h3 class="mainProduct__header" v-if="pageSize === 'L'">
            {{products[mainProduct].header}}
            <span class="mainProduct__headerTail">
              {{products[mainProduct].headerTail}}
            </span>
          </h3>
        

          <p class="mainProduct__item">
            Item #: 
            <span class="mainProduct__id">
              {{products[mainProduct].id}}
            </span>
          </p>
        

          <p class="mainProduct__price">
            <span 
              :class="[products[mainProduct].newPrice == '' ? '' :  'mainProduct__oldPrice' ]">
              {{ products[mainProduct].price | currency }} 
            </span>
            <span 
              v-if="products[mainProduct].newPrice !== ''"
              class="mainProduct__newPrice">
              {{products[mainProduct].newPrice | currency}}
            </span>
          </p>

        
          <div class="mainProduct__starsAndShareWrap">
            
            <ul class="mainProduct__starsList">
              <li v-for="(item, index) in 5" 
              class="mainProduct__starListItem">
                <a 
                  key="index"
                  @mouseover="setStar(index)"
                  @click="estimateProduct(index)"
                  class="mainProduct__star" 
                  href="#" 
                  :class="[item > products[mainProduct].stars ? 'mainProduct__star_gray' : 'mainProduct__star_bright']">
                </a>
              </li>
            </ul>
            
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

          </div>
        

          <div class="mainProduct__aboutWrap">
            <h5 class="mainProduct__blockHeader">{{aboutHeader}}</h5>  
            <p class="mainProduct__about">
              {{products[mainProduct].about}}
            </p>
          </div>
        

          <div class="mainProduct__sizeWrap">
            <h5 class="mainProduct__blockHeader">{{sizeHeader}}:</h5>
            <ul class="mainProduct__sizeList">
              <li 
                v-for="(item, index) in products[mainProduct].size"
                :key="index"
                :data-number="index"
                @click.prevent="chooseSize">
                <a class="mainProduct__sizeListItem" href="#">
                  {{item}}
                </a>
              </li>
            </ul>
          </div>
        

          <div class="mainProduct__btnWrap">
            <a 
              href="#" 
              @click="addToCard"
              class="mainProduct__btn">
              add to cart
            </a>
          </div>


        </div> <!-- mainProduct__info -->

      </div> <!-- container -->
    </section>

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


    <div v-show="overlayShow" @click="hideOverlay" class="overlay">
      <img 
        class="overlay__img"
        :src="'./src/assets/' + products[mainProduct].img" 
        alt="products[mainProduct].header">
        <a 
          href="#" 
          @click.prevent="hideOverlay" 
          class="overlay__close">
        </a>
    </div>
    
  </div>
</template>




<script>

export default {
  name: 'app',
  data () {
    return {
      pageSize: '',
      productsStars: {},
      overlayShow: false,
      shareIsVisiable: false,
      mainProduct: 0,
      products: [
        {
          header: 'for gamers by gamers',
          headerTail: 'tee',
          img: 'product1.jpg',
          imgMin: 'product1.min.jpg',
          id: '701642853695',
          price: 29.50,
          newPrice: 15.99,
          stars: 4,
          about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit temporibus excepturi libero. Magni libero iusto, tempore sit quaerat fugiat voluptatem ducimus officiis ex temporibus ab animi labore quidem molestiae quo.',
          size: ['xs', 's', 'm', 'l']
        },
        {
          header: 'be awesome, be you',
          headerTail: 'tee',
          img: 'product2.jpg',
          imgMin: 'product2.min.jpg',
          id: '701642853696',
          price: 29.99,
          newPrice: 19.99,
          stars: 5,
          about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit temporibus excepturi libero. Magni libero iusto, tempore sit quaerat fugiat voluptatem ducimus officiis ex temporibus ab animi labore quidem molestiae quo.',
          size: ['s', 'l']
        },
        {
          header: 'take you\'s style',
          headerTail: 'tee',
          img: 'product3.jpg',
          imgMin: 'product3.min.jpg',
          id: '701642853697',
          price: 22.00,
          newPrice: '',
          stars: 3,
          about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit temporibus excepturi libero. Magni libero iusto, tempore sit quaerat fugiat voluptatem ducimus officiis ex temporibus ab animi labore quidem molestiae quo.',
          size: ['xs', 's', 'm', 'l', 'xl']
        },
        {
          header: 'gamer in the house',
          headerTail: 'tee',
          img: 'product4.jpg',
          imgMin: 'product4.min.jpg',
          id: '701642853698',
          price: 24.99,
          newPrice: '',
          stars: 4,
          about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit temporibus excepturi libero. Magni libero iusto, tempore sit quaerat fugiat voluptatem ducimus officiis ex temporibus ab animi labore quidem molestiae quo.',
          size: ['xs', 's', 'm', 'l']
        },
        {
          header: 'gaming for go',
          headerTail: 'tee',
          img: 'product5.jpg',
          imgMin: 'product5.min.jpg',
          id: '701642853699',
          price: 29.99,
          newPrice: 19.99,
          stars: 5,
          about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit temporibus excepturi libero. Magni libero iusto, tempore sit quaerat fugiat voluptatem ducimus officiis ex temporibus ab animi labore quidem molestiae quo.',
          size: [ 's', 'm', 'l']
        },
        {
          header: 'game in my soul',
          headerTail: 'tee',
          img: 'product6.jpg',
          imgMin: 'product6.min.jpg',
          id: '701642853700',
          price: 60.00,
          newPrice: '',
          stars: 5,
          about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit temporibus excepturi libero. Magni libero iusto, tempore sit quaerat fugiat voluptatem ducimus officiis ex temporibus ab animi labore quidem molestiae quo.',
          size: [ 's', 'm', 'l']
        },
        {
          header: 'super gamer',
          headerTail: 'tee',
          img: 'product7.jpg',
          imgMin: 'product7.min.jpg',
          id: '701642853701',
          price: 54.00,
          newPrice: '',
          stars: 4,
          about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit temporibus excepturi libero. Magni libero iusto, tempore sit quaerat fugiat voluptatem ducimus officiis ex temporibus ab animi labore quidem molestiae quo.',
          size: [ 's', 'm', 'l', 'xl']
        }
      ],
      social: ['fb.svg', 'twitter.svg', 'pinterest.svg', 'yt.svg', 'instagram.svg']     
    }
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
      const target = e.target;
      const slider = document.querySelector('.grid__list');
      const len = document.querySelectorAll('.grid__listItem').length;
      const switchEl = 280;
      let leftStyle = parseInt(slider.style.left) || 0;

      console.log(len)

      if(target.classList.contains('grid__controlLink_prev')){
        
        if( leftStyle === 0 ) {
          return;
        }

        leftStyle += switchEl;
      }
      else{
        
        console.log(len * switchEl);
        console.log(leftStyle)
        if( leftStyle === - (len - 1) * switchEl ) {
          return;
        }

        leftStyle -= switchEl;
      }
      
      slider.style.left = leftStyle + 'px';
    },

    addToCard: function() {
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
  &__imgWrap{
    flex: 0 0 50%;
    position: relative;
  }
  &__img{
    cursor: pointer;
    width: 100%;
  }
  &__info{
    margin: 0 0 0 60px;
  }
  &__header{
    text-transform: uppercase;
    font-family: Oswald;
    font-weight: bold;
    font-size: 24px;
    margin: 0 0 10px 0;
  }
  &__item{
    font-size: 10px;
    opacity: .7;
    margin: 0 0 20px 0;
  }
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
  &__starsAndShareWrap{
    margin: 0 0 20px 0;
  }
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
  &__about{
    color: $vGray;
    font-size: 12px;
    font-weight: 100;
    text-align: justify;
    margin: 0 0 30px 0;
  }
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
.mainProduct{
  &__container{
    flex-wrap: wrap;
  }
  &__header{
    font-size: 24px;
    flex: 0 0 100%;
    margin: 0 0 10px 0;
  }
  &__imgWrap{
    flex: 0 0 50%;
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
  &__price{
    font-weight: bold;
    font-size: 36px;
    margin: 0 0 10px 0;
  }
  &__newPrice{
    margin: 0 0 0 25px;
  }
  &__starsAndShareWrap{
    margin: 0 0 10px 0;
  }
  &__star{
    margin: 0 2px 0 0;
    width: 16px;
    height: 16px;
  }
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
  &__about{
    font-size: 12px;
    font-weight: 100;
    text-align: justify;
    margin: 0 0 15px 0;
  }
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
  
  &__btn{
    font-size: 18px;
    padding: 15px 50px;
    letter-spacing: 1.1px;
  }
 
}




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

.mainProduct{
  &__header{
    font-size: 24px;
    flex: 0 0 100%;
    padding: 0 35px;
    box-sizing: border-box;
    margin: 0 0 10px 0;
  }
  &__headerTail{
    display: block;
  }
  &__imgWrap{
    flex: 0 0 100%;
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
  &__price{
    font-weight: bold;
    font-size: 36px;
    margin: 0 0 10px 0;
  }
  &__newPrice{
    margin: 0 0 0 25px;
  }
  &__starsAndShareWrap{
    margin: 0 0 10px 0;
  }
  &__star{
    margin: 0 2px 0 0;
    width: 16px;
    height: 16px;
  }
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
  &__about{
    font-size: 14px;
    font-weight: 100;
    text-align: justify;
    margin: 0 0 30px 0;
  }
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
  &__btnWrap{
    text-align: center;
  }
  &__btn{
    font-size: 18px;
    padding: 15px 50px;
    letter-spacing: 1.1px;
  }
 
}




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
      left: 0;  
    }
    &_next{
      transform: rotate(180deg);
      right: 0;  
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
