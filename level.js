var Enviroment = (function (context) {
	this.sourceX = 0;
	this.sourceY = 0;
	this.sourceWidth = 16;
	this.sourceHeight = 16;
	this.x = 0;
	this.y = 0;
	this.width = 16;
	this.height = 16;

	this.block = [];
	this.brick = [];
	this.visible = true;

	this.image = new Image();
	this.source = "images/enviroment.png";
	this.image.src = this.source;

	this.Render = function () {
		for (var i = 0; i < 1; i++) {
			var j = 40; //Evenly spaces the sprites
			for (var l = 0; l < 86; l++) {
				this.block.push(context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x + j * l, this.y + 520, this.width * 2.5, this.height * 2.5));
			}
			for (var l = 0; l < 86; l++) {
				this.block.push(context.drawImage(this.image, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, this.x + j * l, this.y + j + 520, this.width * 2.5, this.height * 2.5));
			}
		}
		context.drawImage(this.image, this.sourceX + 384, this.sourceY, this.sourceWidth, this.sourceHeight, this.x + j * 16, this.y + 360, this.width * 2.5, this.height * 2.5);
	}
});

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