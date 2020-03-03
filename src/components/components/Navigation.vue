<template>
<div>
  <div class="menu-icon">
    <input v-if="toggleMenu" type="checkbox">
  </div>
  <nav>
      <ul>
        <li 
          v-for="(linkObj, ind) in navList"
          :key="ind"
          >
            <router-link 
              :to="linkObj.path">
              {{linkObj.name}}
            </router-link>
        </li>
        <!-- Populates navigation links with a json array of objects -->
      </ul>
  </nav>
</div>
</template>

<script>
export default {
  data: () => ({
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
    ]
  }),
  methods:{
    toggleMenu(){
      
    }
  }

}
</script>

<style scoped lang="scss">
.menu-icon{
  border-radius: 10rem;
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);
  width: 5rem;
  height: 5rem;
  position: fixed;
  left: 5rem;
	top: 3rem;
  z-index: 100;
  color:white;
  font-size: 3rem;
  input{
    opacity: 0;
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

  }
}

nav{
  z-index: 1;
  background-color: white;
  color:black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // transform: translateX(-100%);
  ul{
    display: flex;
    flex-direction: row;
    li{
      font-size: 5rem;
      color:black;
      padding: 0rem 3rem;
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

</style>
