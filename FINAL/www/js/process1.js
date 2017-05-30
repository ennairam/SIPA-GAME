 var Game = {

     preload: function() {

        game.load.image('background', 'img/bg.png');
        game.load.image('ground', 'img/platform.png'); 
        game.load.image('player', 'img/paddle.png'); 
        game.load.audio("sound", 'audio/JUMPJUMP.mp3');
        game.load.image("pause",'img/pause.png');
        game.load.image("shuttle",'img/shuttle.png', 80, 100);
    },

    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'background');

        sound = game.add.audio('sound',1, true);
        sound.loop =true;
        sound.play();

        shuttle= game.add.audio('shuttle');

        pause = game.add.button(w - 150, h-520, 'pause', process.pause,this,200,200);
        pause.scale.x = 1.5;
        pause.scale.y = 1.5;


        scoreText= game.add.text(0,5,'Score:  ',
            {
                fontSize:'30px', fill:'black', stroke:'black'});
         bestText= game.add.text(0,30,'Best:  '+process.getData(),
            {
                fontSize:'30px', fill:'black' });
        gameOverText = game.add.text((w/2)-100,200,"",
          {
            fontSize:'30px', fill:'black'});

       
        platforms = game.add.group();
        platforms.enableBody = true;
       
        ground = platforms.create(game.world.height- 10, game.world.height - 10, 'ground');
        ground.scale.setTo(2, 1);
        game.physics.enable(ground, Phaser.Physics.ARCADE);
        ground.body.collideWorldBounds = true;

        ground.body.immovable = true;
        cursors = game.input.keyboard.createCursorKeys();


        player = game.add.sprite(game.width/1.25,game.height-h,"player");
        game.physics.arcade.enable(player);
        //player.body.gravity.y =400;
        player.body.bounce.y = 4;

     
        shuttle=game.add.sprite(120,190,'shuttle');
        //shuttle.anchor.setTo(0.5, 0.5);

        game.physics.enable(shuttle, Phaser.Physics.ARCADE);   
        shuttle.body.collideWorldBounds = true;
        shuttle.body.bounce.y = 1.5;   

    },

     update: function() {
        player.bounce = game.physics.arcade.moveToPointer(player, 90, game.input.activePointer, 500);       

        game.physics.arcade.collide(player,shuttle, process.scoreMe, null, this);
        game.physics.arcade.collide(platforms,shuttle, process.killshuttle,null,this);

        game.physics.arcade.overlap(player, shuttle, process.scoreMe, null, this);
        game.physics.arcade.overlap(shuttle, platforms, process.killshuttle,null,this);



    },


}

game.state.add("Game", Game,false);