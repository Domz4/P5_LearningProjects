let x0;
let y0;
let x1;
let y1;
let len;
let angle = 0;
let angle1 = 0;
let aAcc = 0;
let aVel = 0;
let aAcc1 = 0;
let aVel1 = 0;

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(0);

  len = 300;
  x0 = width / 2;
  y0 = 0;
  x1 = x0 + len * cos(angle);
  y1 = y0 + len * sin(angle);
  x2 = x1 + len * cos(angle1);
  y2 = y1 + len * sin(angle1);
  stroke(255);
  strokeWeight(3);
  line(x0, y0, x1, y1);
  noStroke();
  ellipse(x1, y1, 50);
  stroke(255);
  strokeWeight(3);
  line(x1, y1, x2, y2);
  noStroke(); 
  ellipse(x2, y2, 50);

  aAcc = 0.001 * cos(angle);
  angle += aVel;
  aVel += aAcc;
  aVel *= 0.999;

  aAcc1 = 0.01 * cos(angle1);
  angle1 += aVel1;
  aVel1 += aAcc1;
  aVel1 *= 0.99;
}