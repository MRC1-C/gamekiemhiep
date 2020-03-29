var nui = function(game)
{
    var self = this;
    this.nui_x = 0;
    this.game = game;
    this.image1 = null;
    this.loaded = false;
    
    this.init = function()
    {
        this.image1 = new Image();
        this.image1.onload = function()
        {
            self.loaded = true;
        }
        this.image1.src = 'images/nui.png';
    }
    


    this.update = function()
    {
        this.nui_x=this.nui_x -2;
        if(this.nui_x <= -1500 )
        {this.nui_x=1}
    }
     
    this.draw = function()
    {
        if(self.loaded == false)
        {
            return;
        }
        self.game.context.drawImage(this.image1, this.nui_x , 700-230);
        self.game.context.drawImage(this.image1, this.nui_x + 1500 , 700-230);
    }

}