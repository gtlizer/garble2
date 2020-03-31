<template>
<div class="home">
  <!-- HEADER -->
  <header>
      <Quote/>
      <HeaderBlob/>
      <HeaderName/>
  </header>

  <!-- PORTFOLIO SECTION -->
  <section class="portfolio"> 

  </section>

  <!-- FOOTER -->
  <footer>
      <Clocks/>
  </footer>
</div>
</template>

<script>
import Quote from '../components/Quote'
import HeaderBlob from '../components/HeaderBlob'
import HeaderName from '../components/HeaderName'
import Clocks from '../components/Clocks'

export default {
  name: 'home',
  components:{
    Quote,
    HeaderBlob,
    HeaderName,
    Clocks
  },
}
</script>

<style scoped>

@media screen and (min-width: 0px){

  .home{
    height: 100%;
    padding: 0 0 20rem 0;
    width: 100vw;
    background-image: url(../../assets/static/Bitmap.svg);
    background-size: contain;
  }

  header{
    position: relative;
    height: 120vh;
    border: 2px red solid;

  }

}

@media screen and (min-width: 1000px){

  .home{
    background-image: url(../../assets/static/Bitmap-wide.svg);
    background-size: cover;
  }

  header{
    height: 100vh;

  }
  
    
}

</style>