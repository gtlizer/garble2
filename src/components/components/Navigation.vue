<template>
<div>

  <!-- Toggle Icon -->
  <div class="menu-icon" @click='toggleMenu()'>
    <img width="5rem" src="~@/assets/static/watercolor-button.png"/>
  </div>

  <!-- Navigation -->
  <transition name="slide-down" mode="out-in">
    <nav v-if="toggle">
      <ul>
        <li 
          v-for="(linkObj, ind) in navList"
          :key="ind"
          >
            <router-link 
              :to="linkObj.path"
              >
              {{linkObj.name}}
            </router-link>
        </li>
        <!-- Populates navigation links with a json array of objects -->
      </ul>
    </nav>
  </transition>
  
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
              path:'/'
            },
            {
              name:'About',
              path:'/about'
            },
            {
              name:'Photography',
              path:'/photography'
            },
            {
              name:'Work',
              path:'/work'
            },
            {
              name:'Contact',
              path:'/contact'
            }
      ],
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
  .menu-icon, img{
    height: 10rem;
    width: 10rem;
    position: fixed;
    right: 3rem;
    top: 3rem;
    z-index: 100;
  }

  nav{
    z-index: 99;
    top:0;
    left:0;
    position: absolute;
    background-image: url("~@/assets/static/paint-bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // filter: invert(1);
    ul{
      display: flex;
      flex-direction: column;
      li{
        font-size: 5rem;
        color:black;
        padding: 2rem 0rem;
        a{
          display: inline-block;
          position: relative;
          &::after{
            content: "";
            position: absolute;
            background-color:black;
            width: 2rem;
            height: .2rem;
            bottom:0;
            left: 0;
            transform: translate(0%, 0%);
            transition: all .3s ease;
          }
          &:hover{
            text-decoration: none;
            color:black;
            &::after{
              width: 100%;
            }
          }
        }
      }
    }
  }

  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .3s ease;
  }
  .slide-down-enter, .slide-down-leave-to /* .slide-down-leave-active below version 2.1.8 */ {
    transform: translateY(-100%);
  }


}

@media screen and (min-width: 1035px){
// controls the responsiveness of the navigation
  nav{
    flex-direction: row;
    ul{
      flex-direction: row;
      li{
        padding: 0rem 3rem;
      }
    }
  }
  
}


</style>
