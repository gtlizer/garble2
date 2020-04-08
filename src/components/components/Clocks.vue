<template>
<div class="clocks">
  <div class="clock"
      v-for="(timezone,ind) in timezones" 
      :key="ind"
      >
        <img :src="timezone.path" alt="Blob"/>
      <div class="clock-text">{{timezone.city}} <br/> {{timezone.time}}</div>
  </div>
</div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Clocks',
  data() {
    return {
      losAngelesTime:null,
      timezones: [
        {
          city: 'Los Angeles',
          path:require("../../assets/static/blob5.svg"),
          time:null
        },
        {
          city: 'Tokyo',
          path:require("../../assets/static/blob1.svg"),
          time:null
        },
        {
          city: 'London',
          path:require("../../assets/static/blob2.svg"),
          time:null
        },
        {
          city: 'New York',
          path:require("../../assets/static/blob3.svg"),
          time:null
        },
        {
          city: 'Denver',
          path:require("../../assets/static/blob4.svg"),
          time:null
        }
      ]
    };
  },
  mounted(){
    this.updateClock(),
      window.setInterval(() => {
        this.updateClock()
      }, 1000)
  },
  methods:{
    updateClock(){

      // axios
      //   .get('http://worldtimeapi.org/api/timezone/America/Los_Angeles')
      //   .then(response => (this.losAngelesTime = response.data.datetime));

      var currentTime = new Date ( );
      var losAngeles = currentTime.getHours ( );
      var currentMinutes = currentTime.getMinutes ( );

      var tokyo = losAngeles + 16
      var london = losAngeles + 8
      var newYork = losAngeles + 3
      var denver = losAngeles + 1

      var cities = [losAngeles,tokyo,london,newYork,denver]
      

      function dickTime(city){
        currentMinutes = currentTime.getMinutes ( );
          // // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

        // Choose either "AM" or "PM"
        if (city>=24){city = city-24}

        var timeOfDay = ( city < 12 ) ? "AM" : "PM";

        // Convert the hours component to 12-hour format
        city = ( city > 12 ) ? city - 12 : city;

        // Convert an hours component of "0" to "12"
        city = ( city == 0 ) ? 12 : city;

        // Compose the string for display
        var currentTimeString = city + ":" + currentMinutes +  " " + timeOfDay;

        return currentTimeString
      }
      
      
      for(var i = 0;i<cities.length;i++){
        var city = cities[i]
        var result = dickTime(city);
        this.timezones[i].time = result;
      }
              
    }
  }
}
</script>


<style scoped lang="scss">

@media screen and (min-width: 0px){

.clocks{
  display: flex;
  flex-direction: column;
  justify-content: center;

  .clock{
    position: relative;
    margin: 1rem auto;
    width: 300px;
    
    .clock-text{
      font-size: 2rem;
      color:white;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      line-height: 2.3rem;
    }
  }
  
}
  
}

@media screen and (min-width: 1000px){
  
.clocks{
  flex-direction: row;
  
  .clock{
    width: 200px;
  }

  img{
    width: 200px;
  }

}

  

}


@media screen and (min-width: 1300px){
  
.clocks{
  flex-direction: row;
  
  .clock{
    width: 300px;
  }

  img{
    width: 300px;
  }

}

  

}

</style>
