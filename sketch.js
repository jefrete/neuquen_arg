let bellasA;
bellasA=random(0,255);

function setup () {

//createCanvas(windowWidth,windowHeight);
createCanvas(1024,768);

background(0);
//line(15, 25, 70, 90);

}

function draw () {
 
fill(bellasA,bellasA,bellasA);
text("HIDE YOUR PAIN", random(0,1024),random(0,600));

fill(random(0,255),random(0,255),random(0,255));
ellipse(random(0,width),random(0,height),50);     
   
fill(random(0,255),random(0,255),random(0,255));
ellipse(random(0,1024),random(0,600),random(0,100));
    
fill(random(0,255),random(0,255),random(0,255));
ellipse(random(0,1024),random(0,600),50);
    
/*stroke(0,255,0);
strokeWeight(5);
noFill();
line(pmouseX, pmouseY, mouseX, mouseY);
*/
  

fill(0,255,0)    
rect(mouseX,mouseY,50,50)    

 
let x = mouseX;
let y = mouseY;
let ix = width - mouseX;
let iy = height - mouseY;
fill(255, 150);
ellipse(x, height/2, y, y);
fill(0, 159);
ellipse(ix, height/2, iy, iy);  

ellipse(x, height/2, 20, 20);
x = x + 1;
        
fill(255);
rect(x,y,50,50);
}
