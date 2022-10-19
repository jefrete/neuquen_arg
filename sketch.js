
let bellasA;
bellasA=random(0,255);

function setup () {

//createCanvas(windowWidth,windowHeight);
createCanvas(1024,768);

background(0);
//line(15, 25, 70, 90);

}

function draw () {
 
let img = loadImage('harold.png');
img.position(random(0,1024),random(0,600));
}
