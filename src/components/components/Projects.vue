<template>
<div class="projects">

  <div class="project-list"
      v-for="project in projects"
      :key="project.id">
      <router-link :to="`/project/${project.id}`">
          <p>{{project.name}}</p>
      </router-link>
  </div>

</div>
</template>


<script>
import projects from '@/projects.json';


export default {
  name: 'Projects',
  data() {
    return {
      projects
    }
  },
  methods: { 
    thumbUrl(filename) {
      return require(`@/assets/portfolio/${filename}`);
    },
    mouseOver: function(){
      this.active = !this.active;   
    }
  },
};
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){

.projects{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;

  
  .project-list{
    font-size: 4rem;
    z-index: 2;

    p{
      margin: 10rem 0;
      cursor: pointer;
    }

  }

  .project-image{
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: none;
  }
}
    

}


</style>
