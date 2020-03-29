var bg = function(game)
{
    var self = this;
    this.bg_x = 0;
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
        this.image.src = 'images/bg.png';
    }
    
    this.update = function()
    {
        this.bg_x--;
        if(this.bg_x <= -1500 )
        {this.bg_x=1}
    }
     
    this.draw = function()
    {
        if(self.loaded == false)
        {
            return;
        }
        
        self.game.context.drawImage(this.image, this.bg_x , 0);
        self.game.context.drawImage(this.image, this.bg_x + 1500 , 0);

    }

}