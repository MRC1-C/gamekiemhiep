
var game = function()
{
    this.canvas = null;
    this.context = null;
    this.weght = 1500;
    this.hight = 700;

    this.kiem = null;

    this.bg = null;

    var self = this;

    this.init = function()
    {   

        this.kiem = new kiem(this);
        this.kiem.init();

        this.bg = new bg(this);
        this.bg.init();   
        
        this.nui = new nui(this);
        this.nui.init(); 

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.weght;
        this.canvas.height = this.hight;
        this.context = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);
        
        this.loop();
    }

    this.loop = function()
    {
        self.update();
        self.clearScreen();
        self.draw();
        setTimeout(self.loop, 33);
    }

    this.listen = function()
    {
        this.canvas.addEventListener('click', function()
        {
            self.kiem.jumb();
        });
    }

    this.update = function()
    {
        this.listen();
        this.bg.update();
        this.nui.update();
        this.kiem.update();
        
    }

    this.clearScreen = function()
    {
        this.context.clearRect(0,0,1500,700);
    }
    
    this.draw = function()
    {
        this.bg.draw();
        this.nui.draw();
        this.kiem.draw();
    }

}
var g = new game();
g.init();
