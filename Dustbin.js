class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		this.image=loadImage("sprite/dustbingreen.png");
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);


	}
	display()
	{
	var posBottom=this.bottomBody.position;
	var posLeft=this.leftWallBody.position;
	var posRight=this.rightWallBody.position;
			push()
			translate(posLeft.x, posLeft.y);
			imageMode(CENTER)
			angleMode(RADIANS)
			fill("white")
			stroke(0)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			imageMode(CENTER)
			angleMode(RADIANS)
			fill("white")
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			stroke(0)
			angleMode(RADIANS)
			fill("white")
			image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
			pop()
			
	}

}