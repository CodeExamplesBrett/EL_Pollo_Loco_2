class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];
     
    constructor(canvas, keyboard) {
        //context wird für canvas definiert
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setworld();
        this.checkCollisions();
        this.checkCollisionsCoin();
        this.run();
    }

    setworld(){
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions()
            this.checkThrowObjects()
            },200);
        }

    checkThrowObjects(){
        if(this.keyboard.D){
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions(){
            this.level.enemies.forEach((enemy)=> {
                if(this.character.isColliding(enemy)) {
                    console.log('Collision with Character', enemy);
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    //console.log('Energy level', this.character.energy);
                }
            });
    }

    checkCollisionsCoin(){
        this.level.coins.forEach((coin)=> {
            if(this.character.isColliding(coin)) {
                console.log('Collision with coin', coin) ; 
                this.character.collectCoin();
                //this.statusBar.setPercentage(this.character.energy);
                //console.log('Energy level', this.character.energy);
            }
        });
}

    draw(){
        //clears / deletes the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); // Back
        //  ------- Space for fixed objects --------
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0); // Forwards
         //  ------- Space for fixed objects --------

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);

        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
        
    
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
        if(mo.otherDirection){
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection) {
            this.flipImageBack(mo);
            
        }
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1,1);
        //x coord must umgedreht werden
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        //x coord must umgedreht werden
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}