// P5 STUFF ONLY

// var inData;

// var theColor;

var sensor1;
var sensor2;
var fillR;
var	fillG;
var	fillB;

var bubbles=[];

var brightness; //map brightness to mouseX

function setup() {
	createCanvas(windowWidth, windowHeight);

//  fillR = floor(random(0,255));
// 	fillG = floor(random(0,255));
// fillB = floor(random(0,255));
background('lavender');

}

function draw() {

	for (var i=0; i< bubbles.length; i++){
		bubbles[i].display();
	}

	// fillR = floor(random(0,255));
	// fillG = floor(random(0,255));
	// fillB = floor(random(0,255));
	
	// fill('darkcyan');
	// noStroke();
	// ellipse(width/2, height/2, sensor1+10, sensor2+10);

	// ellipse(width/2, height/2, 100, 100);

	// ellipse(sensor1, sensor1, 50, 50);

	// ellipse(width- sensor1, sensor1, 50, 50);
  
 // 	ellipse(sensor1, height- sensor1, 50, 50);
  
 //  	ellipse(width- sensor1,height- sensor1, 50, 50);

 //  	if(sensor2 > 0){
 //    	fill(fillR, fillG, fillB);
 //    	// console.log(sensor2);
 //    	// console.log("sensor is pressed");
 //    }
 //  	else{
 //    	fill(0);
    
 //  	}
  	
  	//brightness should be a vlaue btwn 0-255
  	brightness = Math.floor(map(mouseX, 0, width, 0, 255));



}

function mouseClicked(){

	bubbles.push(new Bubble(mouseX,mouseY));
	console.log(bubbles);
	//send brightness to the server
	socket.emit('led', brightness);

	console.log(brightness);
}
function Bubble(theX, theY){
	this.x = theX; 
	this.y = theY; 
	this.size = random (1, 75);

	brightness = Math.floor(map(this.size, 1, 75, 0, 255));

	this.display = function(){
		stroke("darkcyan");
		strokeWeight(3);
		ellipse(this.x, this.y, this.size, this.size);
	}
}

////////////////////////////////////////////////

// all non-p5 javascript needs to go inside init() 
// so that this code executes only AFTER the page has loaded

function init(){



}

window.addEventListener('load', init);


