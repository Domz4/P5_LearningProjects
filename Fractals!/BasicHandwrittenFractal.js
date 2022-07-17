let len;
let angle;
let multi;
function setup () {
  createCanvas(1200,800);
  slider1 = createSlider(0,PI, PI/12,0.001);
  slider1.style('width','1198px');
  // slider2 = createSlider(0,);
}
function draw () {
  background(0);
  angle = slider1.value();
  translate(600,height);
  branch(200);
}
function branch(len) {
  stroke(255);
  strokeWeight(1);
  line(0,0,0,-len);
  translate(0,-len);
  if (len>4) {
    push();
    rotate(angle);
    branch(len*0.71);
    pop();
    push();
    rotate(-angle);
    branch(len*0.71);
    pop();
  }
}



































// class Line {
//   constructor(x,y,x1,x2) {
//   this.x = x
//   this.y = y
//   this.x1 = x1
//   this.x2 = x2
// }
//   show() {
//   }
//
//
//
// }
