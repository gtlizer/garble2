<template>
<div class="name">
GABE <br>
TIGER <br>
LIZER
</div>
</template>


<script>
export default {
  name: 'HeaderName',
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
    bottom: 0;
    line-height: 7rem;
    letter-spacing: 3rem;
    text-align: left;

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
