<template>
<div class="portfolio">
  <div class="column-wrapper">
      <!--<div class="left" id="left">
            <div class="left-wrapper">
              <svg class="white-blob" xmlns="http://www.w3.org/2000/svg" width="150%" height="800px" viewBox="0 0 978.826 818.47">
                <g id="blob-shape_copy" data-name="blob-shape copy" transform="translate(0 505.518) rotate(-68)">
                  <path id="Path_2" data-name="Path 2" d="M537.968,717.093C487.348,919.571,160.447,848.086,47.616,609.672-64.829,371.644,36.41-33.7,199.861,2.238,363.311,37.787,588.587,514.615,537.968,717.093Z" fill="#fafafa"/> 
                </g>
              </svg>
              <svg class="pink-blob" xmlns="http://www.w3.org/2000/svg" width="150%" height="763.917" viewBox="0 0 982.15 763.917">
                <g id="blob-shape_copy" data-name="blob-shape copy" transform="translate(-439.328 494.908) rotate(-68)" opacity="0.532">
                  <path id="Path_2" data-name="Path 2" d="M471.106,746.606C429.393,956.623,146.651,881.122,46.991,633.155c-99.324-247.564-15.9-668,125.47-630.048C313.83,40.657,512.818,536.589,471.106,746.606Z" transform="translate(213.107 385.584)" fill="#d9886a"/>
                </g>
              </svg>
              <div class="portfolio-header">
                Work.
              </div>
              <div class="portfolio-text">
                To blow the minds of clients and consumers I trust in co-creation, the latest technology, and intuition.  
              </div>         
        </div> 
      </div> -->
      <div class="featured"
        v-for="project in portfolio"
        :key="project.id"
        >
        <router-link :to="`/project/${project.id}`">
          <div class="featured-project" :style="{ backgroundImage: `url(${imgUrl(project.filename_medium)})`}">
            <div class="project-title">
              {{project.name}}
            </div>
          </div>
        </router-link>
      </div>
  </div>
</div>
</template>


<script>
import projects from '@/projects.json';

export default {
  name: 'HeaderPortfolio',
  data() {
    return {
      backgroundImg:"",
      projects,
      portfolio:[],
    }
  },
  mounted() {
    for(const project of this.projects){
      if (project.featured){
        this.portfolio.push(project)
      }
    }
  },
  methods:{
    imgUrl(filename_mobile) {
      return require(`@/assets/portfolio/${filename_mobile}`);
    },
  }
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){

.portfolio{
  margin-top: 10rem;

  .column-wrapper{

      .featured{
        font-size: 3rem;
        height: 100vh;
        width: 100vw;

        .featured-project{
          width: 100vw;
          text-align: center;
          height: 100vh;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          .project-title{
            color:white;
            font-size: 5rem;
            text-shadow: 1px 1px black;
          }

      }
    }
  }
}
}

@media screen and (min-width: 1000px){
  
  .portfolio{
    margin-top: 10rem;

    .column-wrapper{
      display: flex;
      flex-wrap: wrap;

        .featured{
          font-size: 3rem;
          height: 100vh;
          width: 50vw;

          .featured-project{
            width: 50vw;
            text-align: center;
            height: 100vh;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            .project-title{
              color:white;
              font-size: 5rem;
              text-shadow: 1px 1px black;
            }

        }
      }
    }
  }
}


@media screen and (min-width: 1300px){
  
  .portfolio{
    margin-top: 10rem;

    .column-wrapper{

        .featured{
          font-size: 3rem;
          height: 100vh;
          width: 25vw;

          .featured-project{
            width: 25vw;
            text-align: center;
            height: 100vh;
            background-size:contain;
            background-position: center center;
            background-attachment: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transform: rotateZ(0deg);
            transition: all .5s ease;

            .project-title{
              color:white;
              font-size: 5rem;
              text-shadow: 1px 1px black;
            }
          &:hover{
            
          transform: rotateZ(15deg);
          }
        }
      }
    }
  }
}

</style>