var Enviroment = (function (context, sourceX,sourceY,x,y) {
	this.sourceX = sourceX;
	this.sourceY = sourceY;
	this.sourceWidth = 16;
	this.sourceHeight = 16;
	this.x = x;
	this.y = y;
	this.width = 16;
	this.height = 16;
	this.brickVisible = true;

	this.vx = 0;
	this.vy = 0;

	this.image = new Image();
	this.source = "images/enviroment.png";
	this.image.src = this.source;

	this.Update = function (vx) {
		this.vx = vx;

		this.x += this.vx;
		this.y += this.vy;
	}

	this.Render = function () {
		context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, Math.floor(this.x), Math.floor(this.y), this.width * 2.5, this.height * 2.5);
	}

	//Getters
	this.centerX = function () {
		return this.x + (this.width / 2);
	}

	this.centerY = function () {
		return this.y + (this.height / 2);
	}

	this.halfWidth = function () {
		return this.width / 2;
	}

	this.halfHeight = function () {
		return this.height / 2;
	}
});