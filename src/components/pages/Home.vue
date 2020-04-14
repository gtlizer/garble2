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
  <section class="portfolio"> 
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