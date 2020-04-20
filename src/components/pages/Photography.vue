<template>
<div class="page">
    <router-link :to="`/`">
      <div class="menu-icon">
          <img src="~@/assets/static/glabe_dark.png"/>
      </div>
  </router-link>
    <div class="gallery-cover">
      <img src="~@/assets/static/skating.gif" alt="" height="130px">
    </div>
    <Gallery />
    <Photo />
</div>
</template>

<script>
import Gallery from '../components/Gallery';
import Photo from '../components/Photo';

export default {
  name: 'photography',
  components: {
    Gallery,
    Photo
  } 
}
</script>


<style scoped lang="scss">

.menu-icon{
  position: fixed;
  right: 2%;
  top: 2%;
  z-index: 11;
  
  img{
    height: 7rem;
    width: 6rem;
  }
}

.gallery-cover{
  width: 100vw;
  height: 14rem;
  background-color: white;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
}


</style>