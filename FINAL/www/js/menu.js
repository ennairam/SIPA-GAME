var Menu = {
    preload : function() {
    
        game.load.image('menu', 'img/menu1.png');
         
    },

    create: function () {
    
       // this.add.sprite(0, 0, 'menu');
             this.add.button(0,30, 'menu', this.startGame, this);
           // button= game.add.button(w - 114, h-520, 'menu', process.menu,this,200,200);
    },

    startGame: function () {

        this.state.start('Game');

    }


};
game.state.add("Menu",Menu,true);