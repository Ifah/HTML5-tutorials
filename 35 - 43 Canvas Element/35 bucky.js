function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');

//36 Drawing shapes on canvas 
//	canvas.fillStyle="blue";
//	canvas.strokeStyle="red";
//	canvas.strokeRect(10,10,100,100);
//	canvas.fillRect(10,120,100,100);
//	canvas.clearRect(20,130,45,65);

//37 Gradients on the Canvas
//	var g = canvas.createLinearGradient(0,0,100,100);
//	g.addColorStop(.0,"blue");
//	g.addColorStop(1,"red");
//	canvas.fillStyle=g;
//	canvas.fillRect(0,0,100,100);

//making custom shapes
//	canvas.beginPath();
//	canvas.moveTo(50,50);
//	canvas.lineTo(70,250);
//	canvas.lineTo(300,200);
//	canvas.closePath();
//	canvas.stroke();

//39 Working with Text and Shadows
//	canvas.font="bold 36px Tahoma";
//	canvas.textAlign="end";
//	canvas.strokeText("Cool", 300,100);
//	canvas.fillText("Cool", 300,100);

//39 How to draw a shadow
//draw the shadow before text
//	canvas.shadowOffsetX = 4;
//	canvas.shadowOffsetY = 4;
//	canvas.shadowBlur = 6;
//	canvas.shadowColor = 'rgba(0,0,255,.5)';

//	canvas.font="bold 36px Tahoma";
//	canvas.textAlign="end";
//	canvas.fillText("Cool", 300,100);


//40 Transformations
//	canvas.font="bold 36px Tahoma";
//	canvas.textAlign="start";
//	canvas.fillText("Start", 10,30);

//	canvas.translate(100,150);
//	canvas.fillText("after translate", 0,0);

//	canvas.rotate(1); //1 is radian
//	canvas.fillText("after rotate", 0,0);

//	canvas.scale(1.5,4)
//	canvas.fillText("after scale", 0,20);


//41 Saving and Restoring the Canvas
//	canvas.font="bold 22px Tahoma";
//	canvas.textAlign="start";

//	canvas.save();
//	canvas.fillText("lets begin", 10,30);

//	canvas.rotate(1);
//	canvas.fillText("after rotation", 60,10);

//	canvas.restore();
//	canvas.fillText("after restoring", 10,30);


//42 Images on the Canvas
//	var pic = new Image();
//	pic.src="Penguins.jpg";
//	pic.addEventListener("load", function(){canvas.drawImage(pic,0,0)}, false);
//	//pic.addEventListener("load", function(){canvas.drawImage(pic,0,0,x.width,x.height)}, false);


//43 Animation for Games
	window.addEventListener("mousemove", bucky, false);
}

function bucky(e){
	canvas.clearRect(0,0,600,400);
	var xPos = e.clientX;
	var yPos = e.clientY;
	canvas.fillRect(xPos,yPos,100,100);
}
window.addEventListener("load", doFirst, false);