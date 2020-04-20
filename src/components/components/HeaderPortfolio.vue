<template>
<div class="portfolio">
  <div class="column-wrapper">
    <div class="left" id="left">
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
    </div>
    <div class="right">
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
    display: flex;

    .left{
      position: relative;

      .left-wrapper{
        position: relative;

        .portfolio-header{
          font-size: 6rem;
          position: absolute;
          top: 40%;
          right: 15%;
        }

        .portfolio-text{
          font-size: 2rem;
          font-family: DIN Light;
          line-height: 2.5rem;
          width: 80%;
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
        }

        .white-blob{
          transform: translateX(-25%);
        }
        .pink-blob{
          position: absolute;
          top:30%;
          left: 0;
          transform: scale(1.5) translateX(-10%);
          z-index: 3;
        }
    }
    }
    .right{
      width: 100%;
      display: flex;
      flex-direction: column;

      .featured{
        font-size: 3rem;
        scroll-snap-type: y mandatory;
        
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
  
}

@media screen and (min-width: 1000px){
  
.portfolio{
  top:0px;
  width: 100%;
  z-index: 200;
    
  .column-wrapper{
    flex-direction: row;

    .left{
      width: 50%;

      .left-wrapper{

        .portfolio-header{
          font-size: 7rem;
          top: 30%;
          left: 15%;
        }

        .portfolio-text{
          font-size: 2.5rem;
          line-height: 4rem;
          top: 50%;
          left: 47%;
          transform: translateX(-50%);
        }

        .pink-blob{
          top:23%;
          left: 0;
          transform: scale(1.2) translateX(-15%);

        }
      }
    }

    .right{
      width: 50%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;

      .featured{

        .featured-project{
          width: 100%;
          height: 100vh;
          background-color: lightgreen;
          text-align: center;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-attachment:initial;


        }
        
      }
    }
  }

}

.portfolio-fixed{
  position: fixed;

  
}

  

}

</style>