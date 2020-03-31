<template>
<div class="name">
GABE <br>
TIGER <br>
LIZER
</div>
</template>


<script>
export default {
  name: 'Header Name',
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){

  .name{
    font-size: 5rem;
    font-family: DIN Light;
    color:#512933;
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    bottom: 5%;
    line-height: 6rem;
    letter-spacing: 1rem;
  }
  
}

@media screen and (min-width: 1000px){
  
  .name{
    transform: translateX(0);
    left: 10%;
    bottom: 20%;
  }

}

</style>
