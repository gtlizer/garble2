<template>
<div>
<div class="clocks"
    v-for="(timezone,ind) in timezones" 
    :key="ind"
    >
      <img :src="timezone.path" alt="Blob"/>

</div>
</div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Clocks',
  data() {
    return {
      timezones: [
        {
          area: "Asia",
          location: "Tokyo",
          path:require("../../assets/static/blob1.svg"),
          time:''
        },
        {
          area: "Europe",
          location: "London",
          path:require("../../assets/static/blob2.svg"),
          time:''
        },
        {
          area: "America",
          location: "New_York",
          path:require("../../assets/static/blob3.svg"),
          time:''
        },
        {
          area: "America",
          location: "Denver",
          path:require("../../assets/static/blob4.svg"),
          time:''
        },
        {
          area: "America",
          location: "Los_Angeles",
          path:require("../../assets/static/blob5.svg"),
          time:''
        }
      ]
    };
  },
  mounted(){
    this.loadTime()
  },
  methods:{
    loadTime(){
      var a = 0;
      var i;
      for(i = 0; i < this.timezones.length; i++){
        axios.get("http://worldtimeapi.org/api/timezone/" + this.timezones[i].area + "/" + this.timezones[i].location)
        .then(function(data){
          var time = data.data.datetime;
          time = time.split('T').pop();
          if(time.includes('+')){
            time = time.split('+',1).pop()
          }else{
            time = time.split('-',1).pop();
          }
          time = time.split('.',1).pop()
          console.log(time)
          return time

        }).catch(function(){
          console.log("error")
        });
      } //END OF FOR LOOP
    }//END OF LOADTIME() FUNCTION
  }
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){

.clocks{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
  
  
}

@media screen and (min-width: 1000px){
  
  

}

</style>
