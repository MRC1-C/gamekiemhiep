var kiem = function(game)
{
    var self = this;

    this.game = game;
    this.x = 100;
    this.y = 400;
    this.image = null;
    this.loaded = false;
    this.a = 1;
    this.init = function()
    {
        this.image = new Image();
        this.image.onload = function()
        {
            self.loaded = true;
        }
        this.image.src = 'images/kiem.png';
    }

    this.keyup1 = function()
    {
        this.a=1;
    }

    this.up = function()
    {             
           this.y = this.y - this.a;
           if(this.game.charactor.set == true)
            {
            this.game.charactor.y = this.game.charactor.y -this.a;
            }
            this.a = this.a +1,5;
     

    }
    this.down = function()
    {
        this.y = this.y + this.a;
        if(this.game.charactor.set == true)
        {
        this.game.charactor.y = this.game.charactor.y +this.a;
        }
        this.a = this.a +1,5;
    }
    this.right = function()
    {
        this.x = this.x + this.a;
        if(this.game.charactor.set == true)
        {
        this.game.charactor.x = this.game.charactor.x + this.a;
        }
        this.a = this.a +1,5;
    }
    this.left = function()
    {
        this.x = this.x - this.a;
        if(this.game.charactor.set == true)
        {
        this.game.charactor.x = this.game.charactor.x -this.a;
        }
        this.a = this.a +1,5;
    }


    this.update = function()
    {
        if(this.y >= 700)
            this.y = 700;
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