<template>
<div class="blob">
  <div class="blob-wrapper">
    <svg  class="header-blob" id="blob-shape" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 480.666 443.179">
      <path id="Path_1" data-name="Path 1" d="M-162.029-429.279c37.662,41.79,88.06,56.237,120.122,92.112C-9.845-301.39,3.88-244.184-17.421-198.9c-21.411,45.377-77.959,78.925-129.345,72.817-51.277-6.205-97.5-52.067-160.09-67.969-62.477-15.8-141.424-1.745-168.654-23.658-27.231-21.816-2.855-79.6,10.98-137.392s17.019-115.479,51.057-157.85,99.04-69.326,143.949-48.286S-199.691-471.166-162.029-429.279Z" transform="translate(487.842 568.547)" fill="#F7FCFE"/>
    </svg>
    <svg class="header-blob-wide" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 984 1027.416">
      <path id="header_blob" data-name="header_blob" d="M179.149-245.684c77.1,96.88,180.273,130.372,245.909,213.541C490.694,50.8,518.792,183.42,475.184,288.392c-43.832,105.2-159.594,182.971-264.791,168.81C105.422,442.816,10.789,336.5-117.335,299.631c-127.9-36.639-289.516-4.046-345.262-54.846-55.745-50.575-5.844-184.544,22.478-318.513S-405.278-341.44-335.6-439.669-132.845-600.387-40.91-551.61,102.05-342.789,179.149-245.684Z" transform="translate(487.842 568.547)" fill="#F7FCFE"/>
    </svg>
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
  name: 'HeaderBlob',
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){
  .blob{
    position: absolute;
    top: 30%;
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

    svg{
      position: relative;
    }
  }

  .blob-text{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 70%;
    text-align: left;
    font-family: DIN Regular;
    font-size: 2.5rem;

    div{
      width: 55%;
      margin-bottom: 5rem;
    }

    p{
      font-family: DIN Light;
      font-size: 1.5rem;
      line-height: 2.5rem;
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
    div{
      width: 70%;
    }
  }

}

</style>
