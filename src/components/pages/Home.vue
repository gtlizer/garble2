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
  <div id="portfolioStop"></div>

  <!-- FOOTER -->
  <footer id="footer">
      <Clocks/>
  </footer>
  <div class="green-block">
    <router-link :to="`/photography`">
      Photos This Way &#8594;
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
  mounted (){
    var controller = new ScrollMagic.Controller();
    var portfolioPin = new ScrollMagic.Scene({
        triggerElement: '#portfolio',
        triggerHook: 0
      })
      .setClassToggle("#portfolio", "fix-work")
      .addTo(controller);

    var footerPin = new ScrollMagic.Scene({
        triggerElement: '#footer',
        triggerHook: 1
      })
      .setClassToggle("#portfolio", "footer-pinned")
      .addTo(controller);

  }
}
</script>

<style lang="scss">
.column-wrapper {
      position: relative;
      width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      .left {
          z-index: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
           .left-wrapper {
              height: 1000px;
              overflow: hidden;
            }
      }
    }
 .fix-work {
   .column-wrapper {
     height: auto;
   }
   .left {
     position: relative;
     .left-wrapper {
       position: fixed !important;
       left: 0;
       top: 0;
       width: 50%;
      height: 1000px;
      overflow: hidden;
     }
   }
}
.fix-work.footer-pinned {
  .left {
     position: relative;
     justify-content: flex-end;
     .left-wrapper {
        position: relative !important;
        width: 100%;
        height: 1063px;
        overflow: hidden;
     }
   }
}
</style>

<style lang="scss" scoped>

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
    height: 5rem;
    background-color: #565945;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    padding-right: 2rem; 
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