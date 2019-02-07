//The sprite Object Koopa
var Koopa = (function (context, x, y) {
	this.sourceX =96;
	this.sourceY = 8;
	this.sourceWidth = 16;
	this.sourceHeight = 23;
	this.width = 16;
	this.height = 23;

	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.isActive = true;

	this.image = new Image();
	this.source = "images/enemies.png";
	this.image.src = this.source;

	//Number of Animation
	this.numberOfFrames = 7;
	this.currentFrame = 0;


	this.UpdateAnimation = function () {
		this.sourceX = this.currentFrame * this.sourceWidth;

		if (this.currentFrame < this.numberOfFrames) {
			this.currentFrame++;
			if (this.currentFrame === this.numberOfFrames) {
				this.currentFrame = 0;
			}
		}

		setTimeout(this.UpdateAnimation, 1000);
	}

	this.Update = function (vx) {
		this.vx = vx;
		//Koopa movement 
		this.x += this.vx;
		this.y += this.vy;

		//collision check Koopa

	}

	this.Render = function () {
		for (var i = 0; i < 1; i++) {
			context.drawImage(this.image, this.sourceX, this.sourceY,
				this.sourceWidth, this.sourceHeight, this.x,
				this.y, this.width * 2.5, this.height * 2.5);
		}
	}

});