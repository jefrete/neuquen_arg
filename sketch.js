
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
 
let img = createImg("https://s3.getstickerpack.com/storage/uploads/sticker-pack/hide-the-pain-harold/sticker_5.png?35bc9a5413d14b83fb1eabdb6fe2523d&d=200x200");

img.position(random(0,1024),random(0,600));
}
