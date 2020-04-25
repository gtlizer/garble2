<template>
  <footer class="footer">
      <ul>
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
        <li>
          <a href="https://soundcloud.com/gabe-tiger" target="_blank">
            <i class="fa fa-soundcloud"/>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@gabelizer" target="_blank">
            <i class="fa fa-medium"/>
          </a>
        </li>
      </ul>
      <router-link :to="`/photography`">
        Photos This Way &#8594;
      </router-link>
  </footer>
</template>


<script>

export default {
  name: 'Footer',
  data() {
      return {
      }
  }
}
</script>


<style scoped lang="scss">
@media screen and (min-width: 320px){

  footer{
    width: 100vw;
    height: 5rem;
    background-color: #565945;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    padding: 0 2rem;

    ul{
      display: flex;
      font-size: 1.8rem;
      li{
        margin: 0 2rem;
      }
    }
  }
  
}

@media screen and (min-width: 1000px){
  
  

}
</style>
