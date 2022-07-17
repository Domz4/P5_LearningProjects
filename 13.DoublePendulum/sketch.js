let pendulums = []

function setup() {
 
  createCanvas(1600, 900);
  for (i = 0; i < 5; i++) {
    pendulums[i] = new pendulum(90, 45+i/5);
    }
  
}

function draw() {
  background(0);
  translate(width / 2, 200)
  for (i = 0; i < pendulums.length; i++) {
    pendulums[i].update();
    pendulums[i].show();
  }
}