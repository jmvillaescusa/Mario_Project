var Mario = (function (context,x,y) {
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 16;
    this.sourceHeight = 16;
    this.width = 16;
    this.height = 16;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    visible: true,
    this.isOnGround = undefined;
    this.jumpForce = -10;

    //Physics properties
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.speedLimit = 5;
    this.friction = 0.96;
    this.bounce = -0.7;
    this.gravity = 0.3;


    this.image = new Image();
    this.source = "images/mario.png";
    this.image.src = this.source;

    this.numberOffFrames = 0;
    this.currentFrame = 0;

    this.Render = function () {
        for (var i = 0; i < 1; i++) {
            context.drawImage(this.image, this.sourceX, this.sourceY,
                this.sourceWidth, this.sourceHeight, this.x + 100,
                this.y + 480, this.width * 2.5, this.height * 2.5);
            
        }
    }

});
