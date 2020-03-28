var charactor = function(game)
{
    var self = this;
    this.set = false;
    this.game = game;
    this.x = 130;
    this.y = 412;
    this.image = null;
    this.loaded = false;
    this.a = 0,4;

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
        this.y = this.y - 50;
    }
    this.left = function()
    {
        this.x = this.x - this.a;
        this.a++;
    }
    this.right = function()
    {
        this.x = this.x + this.a;
        this.a++;
    }
    this.update = function()
    {
        this.y = this.y + this.a;
        this.a++;
       // if(this.y = self.kiem.y - 12 && this.x >=self.kiem.x && this.x <= self.kiem.x + 182)
       // {
      //      this.a=0;
      //      this.ser = true;
      //  }

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