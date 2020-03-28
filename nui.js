var nui = function(game)
{
    var self = this;
    this.nui_x = 0;
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
        this.image.src = 'images/nui.png';
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
        self.game.context.drawImage(this.image, this.nui_x , 700-230);
        self.game.context.drawImage(this.image, this.nui_x + 1500 , 700-230);
    }

}