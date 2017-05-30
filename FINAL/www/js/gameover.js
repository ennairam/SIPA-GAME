var Gameover = {
	preload : function() {
		game.load.image('menu', 'img/gameover.png');
		 // if(process.getData()<=score){
   //          process.saveData(score);
   //          bestText.text="Best:"+score;
   //          console.log("x");
   //      }
   //      scoreText.text="Score:"+score;        	
		 
	},
	create: function() {

        this.add.sprite(0, 0, 'menu');
             this.add.button(0, 0, 'menu', this.startGame, this);

	},
	 startGame: function () {

        this.state.start('Game');


}
}
game.state.add("Gameover",Gameover,false);