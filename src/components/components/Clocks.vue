<template>
<div class="clock-wrapper">
  <div class="clocks" >
    <div class="clock"
        v-for="(timezone,ind) in timezones" 
        :key="ind"
        :style="{ backgroundImage: `url(${timezone.path})` }"
        >
        <div class="clock-text">{{timezone.city}} <br/> {{timezone.time}}</div>
    </div>
  </div>
  <div class="sayhi">
    <a href="mailto: gabelizer@gmail.com">
      Say Hi!
    </a>
  </div>
</div>
</template>


<script>
import axios from 'axios';
import blob1 from '../../assets/static/blob1.svg'
import blob2 from '../../assets/static/blob2.svg'
import blob3 from '../../assets/static/blob3.svg'
import blob4 from '../../assets/static/blob4.svg'
import blob5 from '../../assets/static/blob5.svg'

export default {
  name: 'Clocks',
  data() {
    return {
      timezones: [
        {
          city: 'Tokyo',
          path: blob1,
          time:null
        },
        {
          city: 'London',
          path: blob2,
          time:null
        },
        {
          city: 'New York',
          path: blob3,
          time:null
        },
        {
          city: 'Denver',
          path: blob4,
          time:null
        },
        {
          city: 'Los Angeles',
          path: blob5,
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

      function calcTime(offset) {
          // create Date object for current location
          var d = new Date();

          // convert to msec
          // subtract local time zone offset
          // get UTC time in msec
          var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

          // create new Date object for different city
          // using supplied offset
          var nd = new Date(utc + (3600000*offset));

          // return time as a string
          return nd.toLocaleString();
      }

      // Running function to get hour of Los Angeles
      var time = calcTime(-8);
      var timeArray = time.split(" ");
      timeArray = timeArray.splice(1,2)
      var ampm = timeArray.splice(1,2)
      var timeInt = timeArray
      timeInt = timeInt.toString();
      ampm = ampm.toString();

      var hourNumber = timeInt.split(":");
      var hourInt = hourNumber[0];
      hourInt = parseInt(hourInt)
      // Conditional Statement to normalize hour to 24 hour time based off ampm
      if (ampm == "PM"){
        hourInt = hourInt + 12
      }


      var currentTime = new Date ( );
      var losAngeles = hourInt;
      var currentMinutes = currentTime.getMinutes ( );

      var tokyo = losAngeles + 16
      var london = losAngeles + 8
      var newYork = losAngeles + 3
      var denver = losAngeles + 1

      var cities = [losAngeles,tokyo,london,newYork,denver]
      console.log(cities)
      

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

@media screen and (min-width: 320px){

.clock-wrapper{
    padding: 10rem 0;
}

.clocks{
  display: flex;
  flex-direction: column;
  justify-content: center;

  a{
    display: block;
  }

  .clock:last-child{
    transform: scale(1.4);
    margin: 10rem auto;
    .clock-text{
      font-size: 1.7rem;
    }
  }

  .clock{
    position: relative;
    margin: 0rem auto;
    width: 300px;
    height: 300px;
    transform: scale(1);
    
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

.sayhi{
  color:black;
  text-align: center;
  font-size: 2.5rem;
  a{
    display: block;
    width: 70px;
    margin: auto;
    position: relative;
    padding-bottom: .7rem;
    transition: all ease .4s;
  
    &::after{
      content: "";
      bottom: 0px;
      width: 0px;
      height: 2px;
      margin: 5px 0 0;
      transition: all .4s ease-in-out;
      opacity: 0;
      left: 0;
      background-color:black;
      position: absolute;
      display: block;
    }

    &:hover::after {
      width: 100%;
      opacity: 1;
    }
  }
}
}

@media screen and (min-width: 1000px){
  
  .clocks{
    flex-direction: row;
    align-items: center;
  }
}


@media screen and (min-width: 1300px){
  
.clocks{
  padding: 0 3rem;
}

}

</style>
