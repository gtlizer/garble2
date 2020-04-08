<template>
<div class="portfolio">
  <div class="column-wrapper">
    <div class="left">
      <svg class="white-blob" xmlns="http://www.w3.org/2000/svg" width="150%" height="800px" viewBox="0 0 978.826 818.47">
        <g id="blob-shape_copy" data-name="blob-shape copy" transform="translate(0 505.518) rotate(-68)">
          <path id="Path_2" data-name="Path 2" d="M537.968,717.093C487.348,919.571,160.447,848.086,47.616,609.672-64.829,371.644,36.41-33.7,199.861,2.238,363.311,37.787,588.587,514.615,537.968,717.093Z" fill="#fafafa"/> 
        </g>
      </svg>
      <div class="portfolio-header">
        Work.
      </div>
      <svg class="pink-blob" xmlns="http://www.w3.org/2000/svg" width="150%" height="763.917" viewBox="0 0 982.15 763.917">
        <g id="blob-shape_copy" data-name="blob-shape copy" transform="translate(-439.328 494.908) rotate(-68)" opacity="0.532">
          <path id="Path_2" data-name="Path 2" d="M471.106,746.606C429.393,956.623,146.651,881.122,46.991,633.155c-99.324-247.564-15.9-668,125.47-630.048C313.83,40.657,512.818,536.589,471.106,746.606Z" transform="translate(213.107 385.584)" fill="#d9886a"/>
        </g>
      </svg>
      <div class="portfolio-text">
        Talk about your work Clients and skills set. Talk about your work Clients and skills set. Talk about your work Clients and skills set. Talk about your work Clients and skills set. Talk about your work Clients and skills set.
      </div>
    </div>
    <div class="right">
      <div class="featured"
        v-for="project in portfolio"
        :key="project.id"
        >
        {{project.name}}
      </div>
    </div>
  </div>
</div>
</template>


<script>
import projects from '@/projects.json';
import charlie from '@/assets/portfolio/charlie_burg.jpg'

export default {
  name: 'HeaderPortfolio',
  data() {
    return {
      projects,
      portfolio:[],
      charlie
    }
  },
  mounted() {
    for(var i=0;i<=this.projects.length;i++){
      if (this.projects[i].featured){
        this.portfolio.push(projects[i])
      }
    }
  },
  methods:{
    imgUrl(filename) {
      return require(`@/assets/portfolio/${filename}`);
    },
  }
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){

.portfolio{
  margin-bottom: 10rem;

  .column-wrapper{
    display: flex;
    flex-direction: column;

    .left{
      position: relative;
      border: red 1px solid;

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
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
      }

      .white-blob{
        transform: translateX(-25%);
      }
      .pink-blob{
        position: absolute;
        top:25%;
        left: 0;
        transform: scale(1.2) translateX(-10%);
        z-index: 3;
      }
    }
    .right{
      border: 1px solid blue;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;

      .featured{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  

}
  
}

@media screen and (min-width: 1000px){
  
.portfolio{
    
  .column-wrapper{
    flex-direction: row;

    .left{
      width: 50%;

      .portfolio-header{
        font-size: 10rem;
        top: 30%;
        left: 15%;
      }

      .portfolio-text{
        font-size: 3rem;
        line-height: 4rem;
        top: 55%;
        left: 55%;
        transform: translateX(-50%);
      }

      .white-blob{
        
        
      }
      .pink-blob{
        top:25%;
        left: 0;
      }
    }

    .right{
      border: 1px solid blue;
      width: 50%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      .featured{
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
    }
  }

}

  

}

</style>
