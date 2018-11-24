function Player(ctx) {
  this.img = new Image();
  this.img.src = "img/mario.png";
  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.w = 50;
  this.h = 100;

  this.vx = 0;
  this.vy = 0;

  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.drawCount = 0;

  this.ctx = ctx;
  this.x = 200;
  this.y = 470;
  this.y0 = this.y;

  this.setListeners();
}

Player.prototype.setListeners = function() {
  document.onkeydown = this.onKeyDown.bind(this);
  document.onkeyup = this.onKeyUp.bind(this);
};

Player.prototype.onKeyDown = function(e) {
  switch (e.keyCode) {
    case KEY_RIGHT:
      this.vx = 10;
      break;
    case KEY_LEFT:
      this.vx = -10;
      break;
    case KEY_UP:
      //this.jump();
      break;
    
  }
};

Player.prototype.onKeyUp =function(e) {
  switch (e.keyCode){
    case KEY_RIGHT:

    case KEY_LEFT:

    this.vx = 0;
    break;
  } 


};


Player.prototype.draw = function() {
  this.drawCount ++;
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    this.img.width / this.img.frames,
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );
  if (this.drawCount % 10 === 0) {
    this.drawCount = 0;
    this.animate();
  }
};

Player.prototype.move = function() {



  if (this.x > this.ctx.canvas.width - this.w || this.x <= 0 ){
    this.vx = 0;
    
  }
  
  // if ()

  // {
  //   this.vy += G;
  //   this.y += this.vy;
  
  //   this.x += this.vx;
    
  //   if (this.y >= this.y0) {
  //     this.y = this.y0;
  //     this.vy = 0;
  //   }

  // }

};

Player.prototype.animate = function() {
  if(++this.img.frameIndex > 2){
    this.img.frameIndex = 0;
  }



};

Player.prototype.jump = function() {

};

Player.prototype.isJumping = function() {
};

Player.prototype.onKeyDown = function(event) {
};

Player.prototype.onKeyUp = function(event) {
};
