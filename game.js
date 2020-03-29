
var game = function()
{
    this.canvas = null;
    this.context = null;
    this.weght = 1500;
    this.hight = 700;
    this.kiem = null;
    this.bg = null;
    var self = this;
    var arr = new Array();
    this.init = function()
    {   
        //khai bao roi
        this.roi = new roi(this);
        this.roi.init();
        //khai bao kiem
        this.kiem = new kiem(this);
        this.kiem.init();
        //khai bao bg
        this.bg = new bg(this);
        this.bg.init();   
        //khai bao nui
        this.nui = new nui(this);
        this.nui.init(); 
        //khai bao charactor
        this.charactor = new charactor(this);
        this.charactor.init();

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
        window.addEventListener('keydown', function(e)
        {
            arr.keys[e.keyCode]=true;
        });

        window.addEventListener('keyup', function(e)
        {
            arr.keys[e.keyCode]=null;
            self.kiem.keyup1();
            self.charactor.keyup1();
        });
    }

    this.control = function()
    {
        //dieu khien kiem
        if(arr.keys[38] )
        {
            this.kiem.up();
        }
        if(arr.keys[40])
        {
            this.kiem.down();
        }
        if(arr.keys[37])
        {
            this.kiem.left();
        }
        if(arr.keys[39])
        {
            this.kiem.right();
        }
        //dieu khien charactor
        if(arr.keys[87] && this.charactor.set == true )
        {
            this.charactor.up();
        }
        if(arr.keys[65])
        {
            this.charactor.left();
        }
        if(arr.keys[68])
        {
            this.charactor.right();
        }     
    }

    this.update = function()
    {
        this.listen();
        this.control();
        this.bg.update();
        this.nui.update();
        this.kiem.update();
        this.roi.update();
        this.charactor.update();
        
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
        this.roi.draw();
        this.charactor.draw();
    }

}
var g = new game();
g.init();
