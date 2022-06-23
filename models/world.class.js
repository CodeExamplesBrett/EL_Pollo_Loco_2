class World {
    character = new Character();

    enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken()
    ];
    

    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 480),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0)  
    ];

    clouds = [
        new Cloud()
    ];

    canvas;
    ctx;
     
    constructor(canvas) {
        //context wird für canvas definiert
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        
    
        //draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame( function() {
            self.draw();
        });
        
    };

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    // mo = movableObject
    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}