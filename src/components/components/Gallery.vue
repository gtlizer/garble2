<template>
<div class="gallery">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
         <router-link :to="`/photo/${photo.id}`">
          <div class="img-wrapper" >
              <img :src="thumbUrl(photo.filename)">
              <div class="hover-text">
                <p>{{photo.title}}</p>
              </div>
          </div>
          </router-link>
    </div>
</div>
</template>


<script> 
import photos from '@/photos.json';

export default {
  name: 'Gallery',
  data() {
    return {
      active: false,
      photos
    }
  },
  methods:{
    thumbUrl(filename) {
      return require(`@/assets/images/thumbnails/${filename}`);
    },
    mouseOver: function(){
        this.active = !this.active;   
    }
  }
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){
  
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1.4rem;
    max-width: 100vw;
    margin: 15rem auto 0rem auto;
    padding: 0 2rem 10rem 2rem;
  }
  .gallery-panel img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

  .img-wrapper{
    position: relative;
  }

  .hover-text{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: rgba($color: #000000, $alpha: .6);
    opacity: 0;
    transition: all .3s ease;
    color:white;
  }

  .img-wrapper:hover .hover-text{
    opacity: 1;
  }

}
</style>
