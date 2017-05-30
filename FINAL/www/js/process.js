var w = 360;
var h = 500;
var platforms;
var cursors;
var ground;
var sound;
var stopText;
var restart;
var player, keyboard, pauseText;
var pause, scoreText ,gameOverText;
var score = 0;
var bestScoreText;
var gameOver;


var game = new Phaser.Game(w, h, Phaser.CANVAS, '');


game.state.start("Menu");
game.state.add("Game");
// game.state.add('Gameover');

