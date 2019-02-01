var Brick = (function (x, y, width, height) {
	this.sourceX = 0;
	this.sourceY = 0;
	this.sourceWidth = 16;
	this.sourceHeight = 16;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.image = new Image();
	this.source = "images/enviroment.png";

	this.Render()
});