<template>
<div class="page">
    <router-link :to="`/`">
      <div class="gallery-cover">
        <img src="~@/assets/static/skating.gif" alt="" height="130px">
      </div>
    </router-link>
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

.gallery-cover{
  width: 100vw;
  height: 14rem;
  background-color: white;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
}


</style>