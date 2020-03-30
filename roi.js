var roi = function(game)
{
    var self = this;
    this.roi = false;
    this.roi_x = 1500;
    this.roi_y = Math.floor(Math.random()  * 401 ) +100;
    this.game = game;
    this.image1 = null;
    this.image2 = null;
    this.chuyenanh = 0;
    this.loaded = false;
    this.ax = 9;
    this.ay = 1;
    this.time1 = 0;
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
        this.roi_x=this.roi_x - this.ax;
        if(this.roi_x <= -100 )
        { 
            this.game.charactor.over = true;
            this.roi_x=1500;
            this.roi_y = Math.floor(Math.random()  * 401 ) + 100;
        }
        if(this.roi_y >= 800)
        {   
            this.time1++;
            this.ay = 0;
            this.roi = false;
            if(this.time1 == 20)
            {
                this.roi_x=1500;
                this.roi_y = Math.floor(Math.random()  * 400) +100;
                this.ax = 9;
                this.time1 = 0;
            }
        }
        if(this.game.kiem.x >= this.roi_x + 65 - 175 && this.game.kiem.x <= this.roi_x + 65 + 65 - 175 && this.game.kiem.y+12 >= this.roi_y +5 && this.game.kiem.y +12 <= this.roi_y + 78 -5)
        {
            this.roi = true;
        }
        if(this.roi == true)
        {
            this.ax = 0;
            this.roi_y = this.roi_y + this.ay;
            this.ay ++ ;
        }
    }
     
    this.draw = function()
    {
        if(self.loaded == false)
        {
            return;
        }
        if(this.chuyenanh >= 0 && this.chuyenanh <= 10)
        {
            self.game.context.drawImage(this.image1, this.roi_x , this.roi_y);
        }
        else
        {
            self.game.context.drawImage(this.image2, this.roi_x , this.roi_y);
        }
    }
}