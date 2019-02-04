var Enviroment = (function (context) {
	this.sourceX = 0;
	this.sourceY = 0;
	this.sourceWidth = 16;
	this.sourceHeight = 16;
	this.x = 0;
	this.y = 0;
	this.width = 16;
	this.height = 16;

	this.image = new Image();
	this.source = "images/enviroment.png";
	this.image.src = this.source;

	this.Render = function () {
		for (var i = 0; i < 1; i++) {
			var j = 40; //Evenly spaces the sprites
			for (var l = 0; l < 50; l++) {
				context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x + j * l, this.y + 520, this.width * 2.5, this.height * 2.5);
			}
			for (var l = 0; l < 50; l++) {
				context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x + j * l, this.y + j + 520, this.width * 2.5, this.height * 2.5);
			}
		}
	}
});

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
		context.drawImage(this.img, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x, this.y, this.width*2.5, this.height*2.5);
	}
});