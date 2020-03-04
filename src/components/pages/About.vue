<template>
  <div class="container">
      <div class="text">
        <h1>Gabe</h1>
        <h1>Tiger</h1>
        <h1>Lizer</h1>
      </div>
      <!-- <div class="bio">
        <h1>I fail big</h1>
        <h1>I learn fast</h1>
        <h1>I work hard</h1>
        <h1>I play always</h1>
        <p>Gabe Tiger is a web designer &#38; developer with a desire to be a polymath. He has done a little bit of everything and is always down to taste a new food, learn a new skill, or live a new experience. </p>
      </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@media screen and (min-width: 0px){
  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
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
  }

    
}


</style>