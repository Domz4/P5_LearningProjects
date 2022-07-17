let buttons = [
  ["7", "8", "9", "/"],
  ["4", "5", "6", "x"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
];
let cols = 4;
let rows = 4;

function setup() {
  createCanvas(400, 400);
  background(0);
  drawCalculator();
}

function draw() {}

function drawCalculator() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * 100;
      let y = i * 100;
      rect(x, y, 100);
    }
  }
}

function buttonFunctioning() {}
