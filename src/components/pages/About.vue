<template>
  <div class="container">
      
        <div class="text" v-if="showText" @click='toggleText()'>
            <div>
              <h1>Gabe</h1>
              <h1>Tiger</h1>
              <h1>Lizer</h1>
            </div>
        </div>
        
        <div class="text" v-else @click='toggleText()'>
            <div>
              <h1>I fail big</h1>
              <h1>I learn fast</h1>
              <h1>I work hard</h1>
              <h1>I play always</h1>
              <p>Gabe Tiger is a web designer, web developer, &#38; polymath. He has done a little bit of everything and is always down to taste a new food, learn a new skill, or live a new experience. </p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: true
    }
  },
  methods:{
    toggleText(){
      this.showText = !this.showText
    }
  }
} 

</script>

<style scoped>

@media screen and (min-width: 0px){
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  h1{
    font-size: 6rem;
    font-weight: 500;
  }

  p{
    font-size: 1.9rem;
    margin-top: 5rem;
    line-height: 2.5rem;
  }
  
  .text{
    font-family: Helvetica, sans-serif;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    
}


@media screen and (min-width: 768px){
  .text{
    width: 70%;
  }

  h1{
    font-size: 7rem;
  }

  p{
    font-size: 2rem;
  }

}

@media screen and (min-width: 992px){
  .text{
    width: 50%;
  }

  h1{
    font-size: 7rem;
  }

  p{
    font-size: 2.5rem;
  }


}

@media screen and (min-width: 1228px){

  h1{
    font-size: 7rem;
  }

  p{
    font-size: 2.5rem;
    line-height: 3rem;
  }

}




</style>