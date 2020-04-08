<template>
<div class="page">
    <div class="gallery-cover"></div>
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
}

.page{
  overflow: scroll;
}

</style>