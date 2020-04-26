<template>
<div class="lightbox">
  <div class="photo-wrapper">
    <img :src="photoUrl(photo.filename)">
  </div>
  <div class="lightbox-nav">
      <i @click="previousImage" class="fa fa-long-arrow-left"/>
      <a @click="closeLightbox" class="grid-icon grid-icon--fill">
        <span class="layer layer--primary">
          <span></span>
        </span>
        <span class="layer layer--secondary">
          <span></span>
        </span>
        <span class="layer layer--tertiary">
          <span></span>
        </span>
      </a>
      <i @click="nextImage" class="fa fa-long-arrow-right"/>
  </div>
</div>
</template>


<script>
import photos from '@/photos.json';

export default {
  name: 'Photo',
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`@/assets/images/${filename}`);
    },
    closeLightbox() {
      this.$router.push('/photography');
    },
    async nextImage() {
      var nextimage = (parseInt(this.$route.params.id))+ 1;
      var currentroute = this.$route.path;
      var finalimg = photos.length -1 ;

      if(currentroute == `/photo/${finalimg}`){
        this.$router.push(`/photo/0`);
        location.reload();
      }else{
        this.$router.push(`/photo/${nextimage}`);
      }
      
    },
    async previousImage() {
      var previousimage = (parseInt(this.$route.params.id))- 1;
      var finalimg = photos.length -1 ;
      var currentroute = this.$route.path;

      if(currentroute == '/photo/0'){
        this.$router.push(`/photo/${finalimg}`);
        location.reload();
      }else{
        this.$router.push(`/photo/${previousimage}`);
      }
    },
  },
};
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){
    .lightbox {
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .photo-wrapper{
      width: 80%;
      height: 80%;
    }

    .lightbox img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .lightbox-nav{
      display: flex;
      align-items: center;

      i{
        font-size: 2.5rem;
        &:hover{
          cursor: pointer;
        }
      }
    }

    // GRID ICON

    .grid-icon {
      display: inline-block;
      margin: 2vw;
      &:hover{
        cursor: pointer;
      }
    }

    .grid-icon:hover > span > span {
      opacity: .7;
    }

    .grid-icon > .layer {
      width: 100%;
      position: absolute;
      left: 0;
    }
    .grid-icon--fill {
      position: relative;
      width: 26px;
      height: 26px;
    }

    .grid-icon--fill > .layer {
      width: 100%;
      height: 6px;
    }

    .grid-icon--fill > .layer--primary {
      top: 0;
    }

    .grid-icon--fill > .layer--secondary {
      top: 50%;
      margin-top: -3px;
    }

    .grid-icon--fill > .layer--tertiary {
      bottom: 0;
    }

    .grid-icon--fill > .layer > span {
      position: absolute;
      display: block;
      width: 6px;
      height: 100%;
      background-color: black;
    }

    .grid-icon--fill > .layer > span {
      left: 50%;
      margin-left: -3px;
    }

    .grid-icon--fill > .layer > span:before {
      display: block;
      content: "";
      width: 6px;
      height: 100%;
      background-color: black;
      left: -10px;
      position: absolute;
    }

    .grid-icon--fill > .layer > span:after {
      display: block;
      content: "";
      width: 6px;
      height: 100%;
      background-color: black;
      right: -10px;
      position: absolute;
    }

}


</style>
