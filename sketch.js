function setup(){
//createCanvas(windowWidth,windowHeight);
createCanvas(1024,768);

background(0);
//line(15, 25, 70, 90);

}

function draw () {
 
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
}