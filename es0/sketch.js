// Obiettivo: realizzare un primo sketch seguendo la guida passo passo.
// Vincoli: seguire la guida dal capitolo 1 alla fine e scrivere il codice a mano.

let tono;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 0);
}

function mousePressed() {
  tono = random(360);
}

function draw() {
  if (mouseIsPressed) {
    noStroke();
    fill(tono, 100, 100);
    let x = mouseX;
    let y = mouseY;
    let dx = 2.5;
    let dy = 2.5;
    for (let i = 0; i < 50; i = i + 1) {
      x = x + dx;
      y = y + dy;
      rect(x, y, (50 - i) / 2, (50 - i) / 2);
      if (random() < 0.1) {
        dx = random(-10, 10);
        dy = random(-10, 10);
      }
    }
    if (random() < 0.02) {
      tono = random(360);
    }
  }
}