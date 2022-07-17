let stars = [];
let speed;
function setup() {
  createCanvas(1200,800);
  slider = createSlider(1,50,5,0.1)
  slider.style('width','1198px');
  for (let i=0; i<1000; i++) {
    stars[i] = new Star();
  }
}

function draw() {
    speed = slider.value();
  background(0);
  translate(width / 2, height / 2);
  for(let i=0; i<stars.length; i++) {
    stars[i].update();
    stars[i].look();
  }
}
