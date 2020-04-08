<template>
<div>

  <nav>
  <!-- Toggle Icon -->
    <div class="menu-icon" @click='toggleMenu()'>
      <img src="~@/assets/static/glabe_dark.png"/>
    </div>
    
    <ul v-if="toggle">
      <li 
        v-for="(linkObj, ind) in navList"
        :key="ind"
        >
          <router-link :to="linkObj.path">
            <i v-bind:class="linkObj.icon"></i>
          </router-link>
      </li>
    </ul>
  </nav>

</div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      navList: [
        {
          name:'Home',
          path:'/',
          icon:'fa fa-home',
        },
        {
          name:'Library',
          path:'/library',
          icon:'fa fa-book',
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
    top: 1%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-icon{
    cursor: pointer;
  }

  i{
    font-size: 3.5rem;
    text-align: center;
    padding-top: 1.5rem;
  }
  
  nav img{
    height: 7rem;
    width: 6rem;
  }
}

</style>
