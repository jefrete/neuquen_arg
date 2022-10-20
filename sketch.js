let t = 0;

function setup() {
  createCanvas(700, 600);
  fill(340, 200, 40);
}

function draw() {
  background(0, 11);
  
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  stroke(255);
  fill(random(20,115))
  polygon(0, 0, 150, 3);
  pop();
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  stroke(2);
  fill(random(20,115))
  polygon(0, 0, 100, 3);
  pop();
  
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 60.0);
  stroke(0);
  fill(random(20,115));  
  polygon(0, 0, 150, 3);
  pop();
  
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 60.0);
  stroke(0);
  fill(random(0,255),(0,255),(0,255));  
  polygon(0, 0, 100, 3);
  pop();
  
  noStroke();
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
    const anguloX = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const anguloY = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
    const angulo = anguloX * (x / width) + anguloY * (y / height);
    const myX = x + 20 * cos(2 * PI * t + angulo);
    const myY = y + 20 * sin(2 * PI * t + angulo);

 ellipse(myX, myY, 10); // dibujar partícula
    }
  }

  t = t + 0.013; // actualizar tiempo
}
   
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
