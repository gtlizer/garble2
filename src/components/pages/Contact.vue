<template>

<canvas id="canvas" ref="canvas"></canvas>
<!-- <div class="parent">
    <div 
      v-for="(mediaObj, ind) in mediaList"
      :key="ind"
      class="circle"
      :style="{background: mediaObj.gradient, top: mediaObj.top, left: mediaObj.left}"
      >
      <a :href="mediaObj.link">
        <div class="invisible-circle">
            <i :class="mediaObj.icon"></i>
        </div>
      </a>
    </div>
</div> -->
</template>


<script>
export default {
    data() {
      return {
        mediaList: [
          {
            name:'Instagram',
            icon:'fa fa-instagram',
            gradient:'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 40%,#cc2366 60%,#bc1888 70%, #5E60CD 100%)',
            link:'https://www.instagram.com/bestcoastgabe/',
            top: '',
            left: ''
          },
          {
            name:'LinkedIn',
            icon:'fa fa-linkedin',
            gradient:'linear-gradient(45deg, #0077b5,#00a0dc, #caccce)',
            link:'https://www.linkedin.com/in/gabelizer',
            top: '',
            left: ''
          },
          {
            name:'Github',
            icon:'fa fa-github',
            gradient:'linear-gradient(45deg, #0A0A0A,#252525, #404040)',
            link:'https://github.com/gtlizer',
            top: '',
            left: ''
          },
          {
            name:'Spotify',
            icon:'fa fa-spotify',
            gradient:'linear-gradient(120deg, #1db954, #20D760)',
            link:'https://open.spotify.com/user/317b724ub36qiirjoojw2pg7jiai?si=Y0p6xhP0S_O2CjaCmQOX5A',
            top: '',
            left: ''
          },
          {
            name:'Mail',
            icon:'fa fa-envelope',
            gradient:'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
            link:'mailto:gabelizer@gmail.com',
            top: '',
            left: ''
          },
          {
            name:'Medium',
            icon:'fa fa-medium',
            gradient:'linear-gradient(45deg,#04A669, #04A669,#11C264, #06DE6E, #33F589)',
            link:'https://medium.com/@gabelizer',
            top: '',
            left: ''          
          },
      ],
    }
  },
  mounted(){
    this.drawCircles();
  },
  methods:{
    drawCircles(){
          // Setting up the canvas
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext("2d");

        console.log(context)

        var window_height = window.innerHeight;
        var window_width = window.innerWidth;

        canvas.width = window_width;
        canvas.height = window_height;

        canvas.style.background = "black";

        // Designing the circles
        class Circle {
          constructor(xpos,ypos,radius,background,color,text,speed){
            this.xpos = xpos;
            this.ypos = ypos;
            this.radius = radius;
            this.background = background;
            this.color = color;
            this.text = text;

            // controls movement
            this.speed = speed;
            this.dx = 1*this.speed;
            this.dy = 1*this.speed;
          }

          draw(context){

            context.beginPath();

            // var gradient = context.createLinearGradient(0, 0, 0, 100);
            //     gradient.addColorStop(0, "#0077b5");
            //     gradient.addColorStop(.5, "#00a0dc");
            //     gradient.addColorStop(1, "#caccce");

            // Controls the circle size and color
            context.lineWidth = 5;
            
            context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI*2, false);
            context.fillStyle = "red";
            context.fill();
            context.stroke();
            context.closePath();

            // Controls to the inner text
            
            context.strokeStyle = this.color;
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.font = "20px Arial";
            context.fillStyle = "white";
            context.fillText(this.text,this.xpos, this.ypos);
          }

          // controls circle movement
          update(){
            // draw a new circle
            this.draw(context);

              // collision detections
                // right side of screen
                if((this.xpos + this.radius)>window_width){
                  this.dx = -this.dx;
                }
                // left side of screen
                if((this.xpos - this.radius)<0){
                  this.dx = -this.dx;
                }
                // top of screen
                if((this.ypos - this.radius)<0){
                  this.dy = -this.dy;
                }
                // bottom of screen
                if((this.ypos + this.radius)>window_height){
                  this.dy = -this.dy;
                }

            this.xpos += this.dx;
            this.ypos += this.dy;
          }//end of update
        }//end of class Circle

      // Creating the circles
            
        var all_circles = [];

        let getDistance = function(xpos1, ypos1, xpos2, ypos2){
          var result = Math.sqrt(Math.pow(xpos2-xpos1,2) + Math.pow(ypos2-ypos1,2));
          return result;
        }

        let randomNumber = function(min,max){
          var result = Math.random() * (max-min) + min;
          return result;
        }

        let createCircle = function(circle){
          circle.draw(context);
        }
              
        for (var i=0; i<this.mediaList.length; i++){
            // gives each circle a random location
            var radius = 75;
            var random_x = randomNumber(radius,(window_width - radius));
            var random_y = randomNumber(radius,(window_height - radius));

            for(var a=0;a<all_circles.length;a++){
              if((getDistance(random_x,random_y,all_circles[a].xpos,all_circles[a].ypos)-radius + all_circles[a].radius)<0){
                random_x = randomNumber(radius,(window_width - radius));
                random_y = randomNumber(radius,(window_height - radius));
              }
              a = all_circles.length
            }

            // generate circle
            let my_circle = new Circle(random_x,random_y,radius,"red","white", this.mediaList[i].name, 3);
            all_circles.push(my_circle);
            createCircle(all_circles[i])
        }
        console.log(all_circles)

        // move circles
        let updateCircle = function(){
          requestAnimationFrame(updateCircle);
          context.clearRect(0,0,window_width,window_height);
          all_circles.forEach(Element => {
            Element.update();
          })
        }
        updateCircle();
        
    }
  }
} 
</script>


<style scoped>

.parent{
  position: relative;
  overflow:hidden;
  width: 100vw;
  height: 100vh;
}

.circle{
  font-size: 7rem;
  border-radius: 50%;
  padding: 2rem;
  width: 15rem;
  height: 15rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.invisible-circle{
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>