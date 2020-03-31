<template>
<div class="blob">
  <div class="blob-wrapper">
    <img class="header-blob" src="../../assets/static/headerblob.svg" alt="">
    <img class="header-blob-wide" src="../../assets/static/headerblob-wide.svg" alt="">
    <div class="blob-text">
      <div>
        I help brands and sometimes create my own
      </div>
      <p>
        Artworks and illustrations were my gateway to the creative industry which led to the foundation of my own studio and to first steps in the digital world. A user-centered mindset and sensitivity for design turned out to be the perfect fit when collaborating with agencies, clients and brands to develop digital concepts and solve problems together.
      </p>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'Header Blob',
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){
  .blob{
    position: absolute;
    top: 25%;
    right: 50%;
    transform: translateX(50%);
  }

  .header-blob-wide{
    display: none;
  }

  .header-blob{
    display: block;
    filter: drop-shadow(0 4rem 0 rgb(138,139,112));
  }

  .blob-wrapper{
    position: relative;

    img{
      transform: scale(1.2);
    }
  }

  .blob-text{
    position: absolute;
    top:22%;
    right: 50%;
    width: 48%;
    transform: translateX(50%);
    text-align: right;
    font-family: DIN Regular;
    font-size: 2rem;

    p{
      font-family: DIN Light;
      font-size: 1.8rem;
      line-height: 2.1rem;
      margin-top: 3rem;
    }
  }
}

@media screen and (min-width: 1000px){
  .blob{
    font-size: 10rem;
    top: 30%;
    right: 5%;
    transform: scale(1.2);
  }

  .header-blob-wide{
    display: block;
    filter: drop-shadow(0 4rem 0 rgb(138,139,112));
    
  }

  .header-blob{
    display: none;
  }

  .blob-text{
    top:17%;
    font-size: 2.5rem;
    transform: translateX(0);
    right: 20%;

    p{
      font-size: 1.9rem;
      line-height: 2.3rem;
    }
  }

}

</style>
