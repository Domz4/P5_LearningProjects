let oldx,oldy,x2,y2,r,vt;
let angleSlider;
let sizeSlider;
let incrementSlider;
let smoothSlider;
let size;
let increments;
let angle;
let smooth1
let p;
let skala = 1;
let skret = 0.1618;
let x3;
let y3;
function setup() {
  pixelDensity(2.0);
  createCanvas(800,800);
  oldx = width/2;
  oldy = height/2;
  sliders();
  napisy();
}
function draw() {
  background(0);
  size       =  sizeSlider.value();
  angle      =  angleSlider.value();
  increments =  incrementSlider.value();
  smooth1    =  smoothSlider.value();
  drawSpiralLog();

}

function drawSpiralArchimedes() {
  oldx = width/2;
  oldy = height/2;
  for(i=0; i < increments; i++) {
    vt = i/smooth1 * PI/4;
    x = width/2 + (vt * size)*cos(vt);
    y = height/2 + (vt * size)*sin(vt);
    stroke(255);
    line(oldx,oldy,x,y);
    oldx = x;
    oldy = y;
  }
}
function drawSpiralLog() {
  translate(width/2,height/2)
  oldx = 0
  oldy = 0

  for (i=0.01; i<100; i+=0.1) {

    x3 = skala*Math.pow(Math.E,skret*i)*Math.cos(i);

    y3 = skala*Math.pow(Math.E,skret*i)*Math.sin(i);

    stroke(255);
    line(oldx,oldy,x3,y3);
    oldx = x3;
    oldy = y3;

  }
}
function sliders() {
  sizeSlider = createSlider(1,100,10,1);
  sizeSlider.position(800,50);
  angleSlider = createSlider(PI/8,PI*2);
  angleSlider.position(800,100);
  incrementSlider = createSlider(1,500,1,5);
  incrementSlider.position(800,150);
  smoothSlider = createSlider(0.01,300,1,0.01);
  smoothSlider.position(800,200);
}
function napisy() {
  p = createP("size");
  p.position(850,0);
  p = createP("angle");
  p.position(845,50);
  p = createP("increments");
  p.position(830,100);
  p = createP("smooth");
  p.position(840,150);
}
