<template>
<div class="home">

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
  <div id="portfolioStop"></div>

  <Clocks/>

  <!-- FOOTER -->
  <div id="footer">
    <Footer/>
  </div>

</div>
</template>

<script>
import Quote from '../components/Quote'
import HeaderBlob from '../components/HeaderBlob'
import HeaderName from '../components/HeaderName'
import HeaderPortfolio from '../components/HeaderPortfolio'
import Clocks from '../components/Clocks'
import ScrollMagic from "scrollmagic"
import Footer from '../components/Footer'


export default {
  name: 'home',
  components:{
    Quote,
    HeaderBlob,
    HeaderName,
    HeaderPortfolio,
    Clocks,
    Footer
  }
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 0px){

  .home{
    height: 100%;
    width: 100vw;
    background-image: url(../../assets/static/Bitmap.svg);
    background-size: contain;
    position: relative;
    cursor: url('/src/assets/static/glabe_dark.png'), auto;
  }

  header{
    position: relative;
    height: 120vh;

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