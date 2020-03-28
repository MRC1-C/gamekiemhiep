var kiem = function(game)
{
    var self = this;

    this.game = game;
    this.x = 100;
    this.y = 0;
    this.image = null;
    this.loaded = false;
    this.a = 0,5;
    this.init = function()
    {
        this.image = new Image();
        this.image.onload = function()
        {
            self.loaded = true;
        }
        this.image.src = 'images/kiem.png';
    }

    this.jumb = function()
    {
        this.a = -20

        console.log(this.y)
    }


    this.update = function()
    {
        this.y = this.y + this.a ;
        this.a++;
        console.log(this.a);    
        if(this.y >= 400)
            this.a = 0;
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