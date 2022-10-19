
let x = 100;
let y = 100;
let bellasA;
bellasA=random(0,255);

function setup () {

createCanvas(1024,600);
background(0);
//line(15, 25, 70, 90);

}

function draw () {
 
let img = createImg("https://www.meme-arsenal.com/memes/615dc2dfdc3914c5e9d0ece48ee3c679.jpg");

img.position(random(0,1024),random(0,600));
}
