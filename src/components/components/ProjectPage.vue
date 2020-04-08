<template>
<div class="projects">
  <header>
    <div class="name my-5">
        {{this.project.name}}
    </div>
    <div class="year mt-5">
        {{this.project.year}}
    </div>
  </header>

  <div class="details">
    <p>    
      {{project.description}}
    </p>
    <a :href="project.link">
      Explore Project
    </a>
  </div>

  <div class="image">
    <img :src="imgUrl(project.filename)" class="desktop">
    <img :src="imgUrlMobile(project.filename_mobile)" class="mobile">
  </div>
</div>
</template>


<script>
import projects from '@/projects.json';


export default {
  name: 'ProjectPage',
  data() {
    return {
      projects,
    };
  },
  computed: {
    project() {
      return this.projects.find((project) => {
        return project.id === this.$route.params.id;
      });
    },
  },
  methods: {
    imgUrl(filename) {
      return require(`@/assets/portfolio/${filename}`);
    },
    imgUrlMobile(filename_mobile) {
      return require(`@/assets/portfolio/${filename_mobile}`);
    },
  },
};
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){

  .projects{
    position: relative;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    color:#401C26;

    header{
      font-size: 4rem;
      text-align: left;
      width: 80%;
      margin-top: 1rem;
      margin-bottom: 8rem;
    }

    .details{
      background-color: #FCFCFF;
      font-family: DIN Regular;
      font-size: 1.7rem;
      padding: 3rem;
      line-height: 2.5rem;
      box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.30);
      display: flex;
      flex-direction: column;
      align-items: right;
      margin-bottom: 6rem;

      p{
        margin-bottom: 7rem;
      }

      a{
        font-size: 2rem;
        text-align: right;
        text-decoration: underline;
      }
    }

    .image{
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.30);

      .desktop{
        display: none;
      }

      .mobile{
        display: block;
        width:90vw;
      }
    }
  }
}

@media screen and (min-width: 1000px){

  .projects{
    position: relative;
    display: flex;
    padding: 0rem;

    header{
      font-size: 4rem;
      text-align: left;
      width: 80%;
      margin: 1rem 0 30rem 3rem;
    }

    .details{
      width: 60rem;
      font-size: 2.5rem;
      padding: 4rem;
      line-height: 3.5rem;
      display: flex;
      flex-direction: column;
      align-items: right;
      margin-bottom: -10rem;
      z-index: 10;
      position: absolute;
      top: 15%;
      right: 10%;

      p{
        margin-bottom: 7rem;
      }

      a{
        font-size: 2rem;
        text-decoration: underline;
        text-align: right;
      }
    }

    .image{
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.30);

      .desktop{
        display: inherit;
        width: 100%;
      }

      .mobile{
        display: none;
      }
    }
  }
}


</style>
