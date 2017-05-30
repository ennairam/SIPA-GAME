var menuState = {
	create: function () {
	if (!game.global.music){
		this.music = game.add.audio ('shuttle',0.8,true);
		this.music.play();
		game.global.music = true;
	
   }
  }
}
