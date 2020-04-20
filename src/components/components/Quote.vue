<template>
  <div class="quote">
      <div>
        {{ quoteList[Math.floor(Math.random() * this.quoteList.length)] }}
      </div>
  </div>
</template>


<script>
import photos from '@/photos.json';

export default {
  name: 'Quote',
  data() {
      return {
        selectedQuote:'',
        quoteList: [
          'EUDIAMONIA',
          'Fashion is just another way to tell time',
          'Money isn\'t everything but it is the thing that buys everything',
          'Never sacrifice health for wealth',
          'People come into your life for a reason a season or a lifetime',
          'I just want to look back and think that I\'ve always sent it',
          'Everyday I wake up is a wonderful day',
          'Don\'t be a dick to your dog, he\'s only a few years of your life, but you\'re all of his',
          'If you stand for nothing then you will fall for anything',
          'History is just something we tell ourselves',
          'A good name goes ahead of you and a bad name follows you',
          'Your perfect job may not even exist yet',
          'I\'d rather be happy than right any day',
          'The coolest kid is easy to spot, he\'s carrying around the biggest stuffed animal',
          'Leaders eat last',
          'If your photo isn\'t good enough then you aren\'t close enough',
          'I wonder if you look both ways before you cross my mind',
          'Find your ikagi',
          'Act like everyday is your birthday',
          'Not everything that can be counted counts and not everything that counts can be counted',
          'Little did he know',
          'Clark kent is superman\'s critique on the whole human race',
          'Time heals all wounds',
          'Once you\'ve accepted death then you can finally live',
  ]}}
}
</script>


<style scoped lang="scss">
@media screen and (min-width: 0px){
  
  .quote{
    font-family: Canela;
    font-size: 5.2rem;
    text-align: left;
    color:#512833;
    position: absolute;
    left:45%;
    top: 10%;
    transform: translateX(-50%);
    width: 80%;
    z-index: 20;
  }
    
}

@media screen and (min-width: 1000px){
  .quote{
    font-size: 10rem;
    top: 13%;
    left: 3%;
    transform: translateX(0);
  }

}
</style>
