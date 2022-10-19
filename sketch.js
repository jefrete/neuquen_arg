
let x = 100;
let y = 100;
let bellasA;
bellasA=random(0,255);

function setup () {

createCanvas(windowWidth,windowHeight);
background(0);
//line(15, 25, 70, 90);

}

function draw () {
 
let img = createImg("https://cdn140.picsart.com/314801323394211.png?type=webp&to=min&r=640");
img = loadImage('harold.png');
img.position(random(0,1024),random(0,600));
}
