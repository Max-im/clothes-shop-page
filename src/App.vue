<template>
  <div id="app">
    <mainProduct></mainProduct>  
    
  </div>
</template>

<script>

import mainProduct from './components/mainProduct.vue';


export default {
  name: 'app',
  data () {
    return {
      msg: 'app'
    }
  },
  components: {
    mainProduct
  }
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}

body{
  color: #2c303d;
  background: #f6f6f6;
  font-family: 'Open Sans';
}

.container{
  margin: 0 auto;
  width: 100%;
  max-width: 835px;
  min-width: 320px;
  padding: 30px 50px;
  &_flex{
    @extend .container;
    display: flex;
    justify-content: space-between;
  }
}

a{
  text-decoration: none;
  outline: none;
}
ul{
  list-style: none;
}


/* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {
 

}






/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {



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
