var process = function() {
       "use strict";
        return {
 

   scoreMe:function(player,shuttle){
        score=score+1;
        if(process.getData()<=score){
            process.saveData(score);
            bestText.text="Best:"+score;
            console.log("x");
        }
        scoreText.text="Score:"+score;        
    },

    audio:function (time){
        setInterval(function(){
          sound.play();
        },time)
       },

     killshuttle:function(platforms, shuttle){
            shuttle.kill();
            //game.state.start("Gameover"); if(process.getData()<=score){
            process.saveData(score);
            bestText.text="Best:"+score;
            console.log("x");
        
        scoreText.text="Score: "+score;        
    },


     saveData:function(score){
        localStorage.setItem("gameData",score);
    },


     getData:function(){
        var data= localStorage.getItem("gameData");
        if(data==null|| data==""){
            data=0
        }
        return data;
    },

     pause:function(){
        this.game.paused = true;

        var stopText = this.add.text(180, 160, 'Paused Click anywhere to continue');

        this.input.onDown.add (function(){ 
            stopText.destroy();
            this.game.paused = false;
            }, this);        
    },

    restart:function(){
        location.reload();
    },
// }

// }();var process = function() {
//        "use strict";
//         return {
 

 scoreMe:function(player,shuttle){
        score=score+1;
        if(process.getData()<=score){
            process.saveData(score);
            bestText.text="Best:"+score;
            console.log("x");
        }
        scoreText.text="Score:"+score;        
    },


     killshuttle:function(platforms, shuttle){
        /*lives= lives - 1;*/
           shuttle.kill();
           game._paused = true ;
           // game.state.start("Gameover");
          game.add.text(game.world.width-290,game.world.height-300,'GAMEOVER!!! \nBest:'+process.getData()+' \nScore:'+ score,
          {fontSize:'35px', fill:'red'});
         // restarts = game.add.text(w-200,h-100,'\n\n--tap--',{ fontSize:'35px', fill:'red'});
       
         // restart();
            
    },


    // restart: function() {
    //     window.location.href=window.location.href;
    // },

     saveData:function(score){
        localStorage.setItem("gameData",score);
    },


     getData:function(){
        var data= localStorage.getItem("gameData");
        if(data==null|| data==""){
            data=0
        }
        return data;
    },

     pause:function(){
        this.game.paused = true;

        var stopText = this.add.text(90, 160, 'Tap to continue');

        this.input.onDown.add (function(){ 
            stopText.destroy();
            this.game.paused = false;
            }, this);        
    },

    restart:function(){
        location.reload();
    },


}

}();



