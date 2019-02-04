//The sprite Object
var Goomba = (function (context, x, y) {
	this.sourceX = 0;
	this.sourceY = 16;
	this.sourceWidth = 16;
	this.sourceHeight = 16;
	this.width = 16;
	this.height= 16;
	this.x = x;
	this.y = y;
	this.x = 100;
	this.y = 480;
	this.vx  = 0;
	this.vy = 0;
	this.isActive = false;

	this.image = new Image();
	this.source = "images/enemies.png";
	this.image.src = this.source;

	this.numberOfFrames = 2;
	this.currentFrame = 0;

	this.UpdateAnimation = function () {
		this.sourceX = this.currentFrame * this.sourceWidth;
		
		if (this.currentFrame < this.numberOfFrames) {
			this.currentFrame++;
			if (this.currentFrame === this.numberOfFrames) {
				this.currentFrame = 0;
			} 
		}
		//setTimeout(this.UpdateAnimation, 1000);
	}

	this.Update = function () {
		this.UpdateAnimation();

		//Goomba movement 
		this.x += this.vx;
		this.y += this.vy;

		//collision check Goomba

	} 

	this.Render = function() {
		for (var i = 0; i < 1; i++) {
			context.drawImage(this.image, this.sourceX, this.sourceY,
				this.sourceWidth, this.sourceHeight, Math.floor(this.x),
				Math.floor(this.y), this.width*2.5, this.height*2.5);
		}
	}

});