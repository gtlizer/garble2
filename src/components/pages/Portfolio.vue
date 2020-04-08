<template>
<div class="portfolio">
  <Projects />
  <ProjectPage />
</div>
</template>


<script>
import Projects from '../components/Projects';
import ProjectPage from '../components/ProjectPage'

export default {
  name: 'Portfolio',
  components: {
    Projects,
    ProjectPage
  },
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){

  .portfolio{
    background-color: beige;
    color:black;
    height: 100vh;
  }

}


</style>
