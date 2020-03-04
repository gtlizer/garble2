<template>
<div>
    <div 
      v-for="(mediaObj, ind) in mediaList"
      :key="ind"
      class="circle"
      :class="mediaObj.gradient"
      >
        <i :class="mediaObj.icon"></i>
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
              gradient:'insta-gradient',
              link:'https://www.instagram.com/bestcoastgabe/'
            },
            {
              name:'LinkedIn',
              icon:'fa fa-linkedin',
              gradient:'linkedin-gradient',
              link:'https://www.linkedin.com/in/gabelizer'
            },
            {
              name:'Github',
              icon:'fa fa-github',
              gradient:'github-gradient',
              link:'https://github.com/gtlizer'
            },
            {
              name:'Spotify',
              icon:'fa fa-spotify',
              gradient:'spotify-gradient',
              link:'https://open.spotify.com/user/317b724ub36qiirjoojw2pg7jiai?si=Y0p6xhP0S_O2CjaCmQOX5A'
            },
            {
              name:'Mail',
              icon:'fa fa-envelope',
              gradient:'mail-gradient',
              link:'mailto:gabelizer@gmail.com'
            },
            {
              name:'Medium',
              icon:'fa fa-medium',
              gradient:'medium-gradient',
              link:'https://medium.com/@gabelizer'
            },
      ],
    }
  },
  methods:{
    
  }
} 

</script>


<style scoped>

.circle{
  font-size: 7rem;
  border-radius: 50%;
  padding: 2rem;
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.insta-gradient{
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 40%,#cc2366 60%,#bc1888 70%, #5E60CD 100%);;
}

.linkedin-gradient{
  background: linear-gradient(45deg, #0077b5,#00a0dc, #caccce);
}

.github-gradient{
  background: linear-gradient(45deg, #0A0A0A,#252525, #404040);
}

.spotify-gradient{
  background:linear-gradient(120deg, #1db954, #20D760);
}

.mail-gradient{
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);;
}

.medium-gradient{
  background: linear-gradient(45deg,#04A669, #04A669,#11C264, #06DE6E, #33F589);
}



</style>