let scl = 1;
let sclMax = 3;
let sclMin = 0.1;
let scrollMax = 0.05;
let x = 50
let y = 50
let r = 75
function setup () {
  createCanvas(800,800);
  angleMode(DEGREES);


}
function draw () {
  background(0);
  scale(scl);
  circle(x+350,y+350,200);
    rectMode(CENTER);
    rect(x,y,r);
    rect(x,y+700,r);
    rect(x+700,y,r);
    rect(x+700,y+700,r);


}
function mouseWheel(event) {
  scrollAmt = constrain(event.delta,-scrollMax,scrollMax);
  scl += scrollAmt
  scl = constrain(scl,sclMin,sclMax);
}
function mouseDragged() {
 x +=
}
