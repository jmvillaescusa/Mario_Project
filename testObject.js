var testObject = (function (context) {
	this.sourceX = 0;
	this.sourceY = 0;
	this.sourceWidth = 16;
	this.sourceHeight = 16;
	this.x = 100;
	this.y = 480;
	this.width = 16;
	this.height = 16;

	this.image = new Image();
	this.source = "images/test.png";
	this.image.src = this.source;

	this.Render = function () {
		context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, Math.floor(this.x), Math.floor(this.y), this.width * 2.5, this.height * 2.5);
	}
});