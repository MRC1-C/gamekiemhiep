var charactor = function(game)
{
    var self = this;
    this.set = false;
    this.game = game;
    this.x = 100;
    this.y = 50;
    this.image = null;
    this.loaded = false;
    this.a = 0,8;

    this.init = function()
    {
        this.image = new Image();
        this.image.onload = function()
        {
            self.loaded = true;
        }
        this.image.src = 'images/charactor.png';
    }

    this.keyup1 = function()
    {
        this.a=0,4;
    }

    this.up = function()
    {        
        this.y = this.y - 150;
    }
    this.left = function()
    {
        this.x = this.x - 20;
    }
    this.right = function()
    {
        this.x = this.x + 20;
    }
    this.update = function()
    {
        
        if(this.y <= this.game.kiem.y -130 -12 && this.y >= this.game.kiem.y -130 - 24 && this.x >= this.game.kiem.x -80 && this.x  <= this.game.kiem.x + 182 -80)    
        {
            this.set = true;
            this.a=0;
        }
        else
        {
            this.set = false;
            this.a= this.a +0.5;
            this.y = this.y + this.a;
            
        }

        if(this.y >= 700 - 162)
            this.y = 700 -162;
        if(this.y<=0)
        this.y = 0;
        if(this.x >= 1500)
        this.x = 1500;
        if(this.x<=0)
        this.x = 0;
    }
     
    this.draw = function()
    {
        if(self.loaded == false)
        {
            return;
        }
        self.game.context.drawImage(this.image, this.x , this.y);
    }

}