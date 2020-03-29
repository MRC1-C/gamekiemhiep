var roi = function(game)
{
    var self = this;
    this.roi_x = 1500;
    this.game = game;
    this.image1 = null;
    this.image2 = null;
    this.chuyenanh = 0;
    this.loaded = false;
    
    this.init = function()
    {
        this.image1 = new Image();
        this.image2 = new Image();
        this.image1.onload = function()
        {
            self.loaded = true;
        }
        this.image2.onload = function()
        {
            self.loaded = true;
        }
        this.image1.src = 'images/roi1.png';
        this.image2.src = 'images/roi2.png';
    }
    


    this.update = function()
    {
        this.chuyenanh++;
        if(this.chuyenanh == 20)
        {
            this.chuyenanh = 0;
        }
        this.roi_x=this.roi_x -9;
        if(this.roi_x <= -1500 )
        {this.roi_x=1}
    }
     
    this.draw = function()
    {
        if(self.loaded == false)
        {
            return;
        }
        if(this.chuyenanh >= 0 && this.chuyenanh <= 10)
        {
            self.game.context.drawImage(this.image1, this.roi_x , 300);
            self.game.context.drawImage(this.image1, this.roi_x + 1500 , 300);
        }
        else
        {
            self.game.context.drawImage(this.image2, this.roi_x , 300);
            self.game.context.drawImage(this.image2, this.roi_x + 1500 , 300);
        }

    }

}