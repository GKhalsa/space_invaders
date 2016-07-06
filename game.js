;(function(){
  var Game = function(canvasId){
    var canvas = document.getElementById(canvasId);
    var screen = canvas.getContext('2d');
    var gameSize = {x: canvas.width, y: canvas.height};

    

    var self = this;
    var tick = function(){
      self.update();
      self.draw(screen, gameSize);
      requestAnimationFrame(tick);
    };
    tick();
  };

  Game.prototype = {
    update: function(){
    },
    draw: function(screen, gameSize){
      screen.fillRect(30,30, 40, 50);

    }
  };

  window.onload = function(){
    new Game("screen");
  };
})();
