var Background = (function (context) {
	this.sourceX = 0;
	this.sourceY = 0;
	this.sourceWidth = 3584;
	this.sourceHeight = 240;
	this.x = 0;
	this.y = 0;
	this.width = 3584;
	this.height = 240;

	this.img = new Image();
	this.source = "images/1-1.png";
	this.img.src = this.source;

	this.Render = function () {
		context.drawImage(this.img, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width * 2.5, this.height * 2.5);
	}
});