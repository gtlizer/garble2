<template>
<div>

  <nav>
  <!-- Toggle Icon -->
    <div class="menu-icon" @click='toggleMenu()'>
      <img src="~@/assets/static/glabe_dark.png"/>
    </div>
    
    <ul v-if="toggle">
      <li>
        <a href="https://www.instagram.com/bestcoastgabe/" target="_blank">
          <i class="fa fa-instagram"/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/gabelizer/" target="_blank">
          <i class="fa fa-linkedin"/> 
        </a>
      </li>
    </ul>
  </nav>

</div>
</template>

<script>
export default {
  data() {
    return {
      toggle: true,
      navList: [
        {
          name:'Home',
          path:'/',
          icon:'fa fa-home',
        },
        {
          name:'Photography',
          path:'/photography',
          icon: 'fa fa-image',
        },
        {
          name:'Portfolio',
          path:'/portfolio',
          icon: 'fa fa-bookmark',
        }
      ]
    }
  },
  methods:{
    toggleMenu(){
      this.toggle = !this.toggle
    }
  },
  watch:{
    $route (){
      this.toggle = false;
    }
} 
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){
  nav{
    position: absolute;
    right: 2%;
    top: .3%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-icon{
    cursor: pointer;
  }

  i{
    font-size: 2.5rem;
    text-align: center;
    padding-top: 1.5rem;
    color: #512833;
  }
  
  nav img{
    height: 7rem;
    width: 6rem;
  }
}

@media screen and (min-width: 1000px){
  nav{
    top: 1%;
  }
}

</style>
