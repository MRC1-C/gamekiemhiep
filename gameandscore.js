var gameandscore = function(game)
{
    var self = this;
    this.gameandscore_x = 0;
    this.game = game;
    this.image = null;
    this.loaded = false;
    
    this.init = function()
    {
        this.image = new Image();
        this.image.onload = function()
        {
            self.loaded = true;
        }
        this.image.src = 'images/gameover.png';
    }
    
    this.update = function()
    {
        this.gameandscore_x--;
        if(this.gameandscore_x <= -1500 )
        {this.gameandscore_x=1}
    }
     
    this.draw = function()
    {
        if(self.loaded == false)
        {
            return;
        }
        
        self.game.context.drawImage(this.image, 120 , 200);

    }

}