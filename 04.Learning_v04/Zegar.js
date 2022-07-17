let x;
let y;
let promien;

function setup() {
  createCanvas(720,620);
  x = width/2;
  y = height/2;
  srednica = width/2;
  secPro = srednica/2 * 0.81;
  minPro = srednica/2 * 0.55
  dotPro = srednica/2 * 0.91
  godzPro = srednica/2 * 0.41
}
function draw() {
  background(215,201,170);
  push();
  noFill();
  strokeWeight(10);
  stroke(25,83,95);
  ellipse(x,y,srednica);
  pop();
  push();
  fill(11,122,117);
  noStroke();
  ellipse(x,y,srednica-10);
  pop();
  push();
  strokeWeight(3);
  stroke(236,54,141);
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI
  let m = map(minute()+norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI
  let h = map(hour()+norm(minute(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI
  line(x,y,x+secPro*cos(s),y+sin(s)*secPro);
  pop();
  push();
  strokeWeight(6);
  stroke(170,109,163);
  line(x,y,x+minPro*cos(m),y+sin(m)*minPro);
  pop();
  push();
  strokeWeight(10);
  stroke(170,109,163);
  line(x,y,x+godzPro*cos(h),y+sin(h)*godzPro);
  pop();
  push();
  strokeWeight(3)
  stroke(0,50,50);
  beginShape(POINTS);
  for(let i=0;i<360;i += 6) {
    let angle = radians(i);
    let cx = x + cos(angle) * dotPro;
    let cy = y + sin(angle) * dotPro;
    vertex(cx,cy);
  }
  endShape();
  pop();
  noStroke();
  fill(0,50,50);
  ellipse(x,y,srednica/30);
}
