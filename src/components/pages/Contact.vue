<template>
<div class="parent">
    <div 
      v-for="(mediaObj, ind) in mediaList"
      :key="ind"
      class="circle"
      :style="{background: mediaObj.gradient, top: mediaObj.top, left: mediaObj.left}"
      >
      <a :href="mediaObj.link">
        <div class="invisible-circle">
            <i :class="mediaObj.icon"></i>
        </div>
      </a>
    </div>
</div>
</template>


<script>
export default {
    data() {
      return {
        mediaList: [
          {
            name:'Instagram',
            icon:'fa fa-instagram',
            gradient:'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 40%,#cc2366 60%,#bc1888 70%, #5E60CD 100%)',
            link:'https://www.instagram.com/bestcoastgabe/',
            top: '',
            left: ''
          },
          {
            name:'LinkedIn',
            icon:'fa fa-linkedin',
            gradient:'linear-gradient(45deg, #0077b5,#00a0dc, #caccce)',
            link:'https://www.linkedin.com/in/gabelizer',
            top: '',
            left: ''
          },
          {
            name:'Github',
            icon:'fa fa-github',
            gradient:'linear-gradient(45deg, #0A0A0A,#252525, #404040)',
            link:'https://github.com/gtlizer',
            top: '',
            left: ''
          },
          {
            name:'Spotify',
            icon:'fa fa-spotify',
            gradient:'linear-gradient(120deg, #1db954, #20D760)',
            link:'https://open.spotify.com/user/317b724ub36qiirjoojw2pg7jiai?si=Y0p6xhP0S_O2CjaCmQOX5A',
            top: '',
            left: ''
          },
          {
            name:'Mail',
            icon:'fa fa-envelope',
            gradient:'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
            link:'mailto:gabelizer@gmail.com',
            top: '',
            left: ''
          },
          {
            name:'Medium',
            icon:'fa fa-medium',
            gradient:'linear-gradient(45deg,#04A669, #04A669,#11C264, #06DE6E, #33F589)',
            link:'https://medium.com/@gabelizer',
            top: '',
            left: ''          
          },
      ],
    }
  },
  mounted(){
    // triggers the position top and left on load
    this.positionTop()
    this.positionLeft()
  },
  methods:{
    positionTop(){
      var x = 0 //initialize counter 
      var topValues = [] //initialize array
      // for every item in the mediaList create a random variable for top and then assign it the top property
      for(var i=1;i<=this.mediaList.length; i++){
        var top = (Math.floor(Math.random()*80)) + '%';
        // if (topValues.length){

        // }
        // else{
        //   continue
        // }
        this.mediaList[x].top = top
        x++
      }
    },
    positionLeft(){
      var x = 0 //initialize counter
      // for every item in the mediaList create a random variable for left and then assign it the left property
      for(var i=1;i<=this.mediaList.length; i++){
        var left = (Math.floor(Math.random()*90)) + '%';
        this.mediaList[x].left = left
        x++
      }
    }
  }
} 

</script>


<style scoped>

.parent{
  position: relative;
  overflow:hidden;
  width: 100vw;
  height: 100vh;
  padding-left: 10rem;

}

.circle{
  font-size: 7rem;
  border-radius: 50%;
  padding: 2rem;
  width: 15rem;
  height: 15rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.invisible-circle{
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>