var Mario = (function (context,x,y) {
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 16;
    this.sourceHeight = 16;
    this.width = 16;
    this.height = 16;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;

    this.image = new Image();
    this.source = "images/mario.png";
    this.image.src = this.source;

    this.numberOffFrames = 0;
    this.currentFrame = 0;

    this.Render = function () {
        for (var i = 0; i < 1; i++) {
            context.drawImage(this.image, this.sourceX, this.sourceY,
                this.sourceWidth, this.sourceHeight, this.x + 0,
                this.y, this.width * 2.5, this.height * 2.5);
            
        }
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
	
	/*var marioSmall = (function (context) {
	this.sourceX = 80;
	this.sourceY = 32;
	this.sourceWidth = 95;
	this.sourceHeight = 48;
	this.width = 95;
	this.height= 48;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

        var marioReady = (function (context) {
            this.sourceX = 148;
            this.sourceY = 0;
            this.sourceWidth = 163;
            this.sourceHeight = 31;
            this.width = 163;
            this.height = 31;
            this.x = 0;
            this.y = 0;
            this.vx = 0;
            this.vy = 0;

            this.image = new Image();
            this.source = "images/mario.png";
            this.image.src = this.source;
        
	var smallMarioReady = (function (context) {
	this.sourceX = 149;
	this.sourceY = 32;
	this.sourceWidth = 163;
	this.sourceHeight = 48;
	this.width = 163;
	this.height= 48;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var marioStep = (function (context) {
	this.sourceX = 114;
	this.sourceY = 0;
	this.sourceWidth = 129;
	this.sourceHeight = 31;
	this.width = 129;
	this.height= 31;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var smallMarioStep = (function (context) {
	this.sourceX = 114;
	this.sourceY = 32;
	this.sourceWidth = 128;
	this.sourceHeight = 48;
	this.width = 128;
	this.height= 48;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var marioRun = (function (context) {
	this.sourceX = 131;
	this.sourceY = 0;
	this.sourceWidth = 146;
	this.sourceHeight = 31;
	this.width = 146;
	this.height= 31;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var smallMarioRun = (function (context) {
	this.sourceX = 132;
	this.sourceY = 32;
	this.sourceWidth = 145;
	this.sourceHeight = 48;
	this.width = 145;
	this.height= 48;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var marioRunTwo = (function (context) {
	this.sourceX = 98;
	this.sourceY = 0;
	this.sourceWidth = 112;
	this.sourceHeight = 31;
	this.width = 112;
	this.height= 31;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var smallMarioSecondStep = (function (context) {
	this.sourceX = 97;
	this.sourceY = 32;
	this.sourceWidth = 112;
	this.sourceHeight = 48;
	this.width = 112;
	this.height= 48;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var marioJump = (function (context) {
	this.sourceX = 166;
	this.sourceY = 0;
	this.sourceWidth = 181;
	this.sourceHeight = 31;
	this.width = 181;
	this.height= 31;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var smallMarioJump = (function (context) {
	this.sourceX = 164;
	this.sourceY = 31;
	this.sourceWidth = 181;
	this.sourceHeight = 48;
	this.width = 181;
	this.height= 48;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var marioDeath = (function (context) {
	this.sourceX = 183;
	this.sourceY = 31;
	this.sourceWidth = 198;
	this.sourceHeight = 48;
	this.width = 198;
	this.height= 48;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;

	var mario = (function (context) {
	this.sourceX = 335;
	this.sourceY = 7;
	this.sourceWidth = 350;
	this.sourceHeight = 31;
	this.width = 350;
	this.height= 31;
	this.x = 0;
	this.y = 0;
	this.vx  = 0;
	this.vy  = 0;

	this.image = new Image();
	this.source = "images/mario.png";
	this.image.src = this.source;
	});*/