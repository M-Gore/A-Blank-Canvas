//For counter
var a=0;
//For height of rectangle
var b=470;

function setup() {
  createCanvas(1000,600);
}

function draw() {
  stroke(0,0,0);
  fill(255,255,255);
  if (a<200){
    background(0,255,0);
  }
  if (a>200 && a<400){
    background(0,0,255);
  }
  if (a>400 && a<8000){
    background(255,0,0);
  }
  
  //Face
  ellipse(600,300,400,400);
  
  //Anger Meter
  quad(150,490,200,490,200,b,150,b);
  
  //Happy Face- Smile
  if (a<200) {
    arc(600,350,200,200,0,PI);
    ellipse(485,250,50,50);
    ellipse(715,250,50,50);
    textSize(14);
    textFont("Verdana");
    text("Calm",570,520);
  }
  //Content Face- Eyebrows and Mouth
   if (a>200 && a<400) {
    line(475,375,725,375);
    line(460,220,510,220);
    line(690,220,740,220);
    ellipse(485,250,50,50);
   ellipse(715,250,50,50);
    textSize(16);
    textFont("Verdana");
    text("Slightly Annoyed...",520,520);
  }
  
  //Angry Face- Eyebrows and Frown
   if (a>400 && a<8000) {
    arc(random(595,605),random(390,395),300,300,PI,0);
    line(460,220,510,230);
    line(690,230,740,220);
    fill(240,14,14);
    ellipse(random(480,490),random(245,255),random(45,55),random(45,55));
    ellipse(random(710,720),random(245,255),random(45,55),random(45,55));
    fill(255,255,255)
    textSize(32);
    textFont("Verdana");
    text("MAXIMUM RAGE!",460,540);
  }
  
  

  if (mouseIsPressed) {
    a=a+1;
    b=b-1;
  }
  //Counter
  fill(255,255,255)
  textSize(12);
  textFont("Verdana");
  text(a,165,505);
  text("Rage Meter", 140, 520)
}