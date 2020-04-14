<template>
<div class="home">

  <Navigation/>
  <!-- HEADER -->
  <header>
      <Quote/>
      <HeaderBlob/>
      <HeaderName/>
  </header>

  <!-- PORTFOLIO SECTION -->
  <section id="portfolio"> 
    <HeaderPortfolio/>
  </section>

  <!-- FOOTER -->
  <footer>
      <Clocks/>
  </footer>
  <div class="green-block">
    <router-link :to="`/photography`">
      Photos!
    </router-link>
  </div>

</div>
</template>

<script>
import Navigation from '../components/Navigation'
import Quote from '../components/Quote'
import HeaderBlob from '../components/HeaderBlob'
import HeaderName from '../components/HeaderName'
import HeaderPortfolio from '../components/HeaderPortfolio'
import Clocks from '../components/Clocks'
import ScrollMagic from "scrollmagic"


export default {
  name: 'home',
  components:{
    Navigation,
    Quote,
    HeaderBlob,
    HeaderName,
    HeaderPortfolio,
    Clocks
  },
  created (){
    var controller = new ScrollMagic.Controller();
    var portfolioPin = new ScrollMagic.Scene({
        duration: 4208,	// the scene should last for a scroll distance of 1052px
        tiggerElement: '#portfolio'
      })
      .setPin("#portfolio", {pushFollowers: false}) // pins the element for the the scene's duration
      .addTo(controller);
  }
}
</script>

<style scoped>

@media screen and (min-width: 0px){

  .home{
    height: 100%;
    width: 100vw;
    background-image: url(../../assets/static/Bitmap.svg);
    background-size: contain;
    position: relative;
  }

  header{
    position: relative;
    height: 120vh;

  }

  .green-block{
    width: 100vw;
    height: 2rem;
    background-color: #565945;
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #565945;
    font-size: 1.5rem;
  }

}

@media screen and (min-width: 1000px){

  .home{
    background-image: url(../../assets/static/Bitmap-wide.svg);
    background-size: contain;
  }

  header{
    height: 100vh;

  }

  .portfolio{
    position: relative;
  }
  
    
}

</style>