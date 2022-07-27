class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarEndboss = new StatusBarEndboss();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    throwableObjects = [];

    gameOver = false;
     
    constructor(canvas, keyboard) {
        //context wird für canvas definiert
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setworld();
        this.run();
    }

    setworld(){
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions()
            this.checkThrowObjects()
            this.checkCollisionsCoin();
            this.checkCollisionsBottle();
            this.checkCollisionsThrowObjects();
            this.checkCollisionsTop();
            this.checkNearEndboss();
            },100);
        }

    checkThrowObjects(){
        if(this.keyboard.D && this.character.bottleCollection >= 1){
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.character.bottleCollection -= 1;
            this.bottleBar.setBottleCount(this.character.bottleCollection);
        }
    }

    checkCollisions(){
            this.level.enemies.forEach((enemy)=> {
                if(this.character.isColliding(enemy) && !enemy.dead && !this.character.isCollidingTop(enemy)) {
                    //console.log('Collision with Character', enemy);
                    this.character.hit(1);
                    this.statusBar.setPercentage(this.character.energy);
                    console.log('character e', this.character.energy)
                    //console.log('Energy level', this.character.energy);
                }
            });
    }

    checkCollisionsCoin(){
        this.level.coins.forEach((coin, index)=> {
            if(this.character.isColliding(coin)) {
                //console.log('Collision with coin', coin);
                this.collectedCoins++;
                this.level.coins.splice(index, 1);
                this.character.collectCoin();
                this.coinBar.setCoinCount(this.character.coinCollection);
                //console.log('Energy level', this.character.energy);
            }
        });
}

    checkCollisionsBottle(){
        this.level.bottles.forEach((bottle, index)=> {
            if(this.character.isColliding(bottle)) {
                //console.log('Collision with bottle', bottle);
                this.collectedBottles++;
                this.level.bottles.splice(index, 1);
                this.character.collectBottle();
                this.bottleBar.setBottleCount(this.character.bottleCollection);
                //console.log('Energy level', this.character.energy);
            }
        });
    }
 
checkCollisionsThrowObjects(){     // bottle with endboss
    if(this.throwableObjects.length > 0){
        this.throwableObjects.forEach( (bottle) => {
            if(this.level.enemies[0].isColliding(bottle) ){
                let index = this.throwableObjects.indexOf(bottle)
                this.throwableObjects.splice(index, 1);
                console.log('Collision with bottle', bottle);
                this.level.enemies[0].hit(2);
                this.statusBarEndboss.setPercentage(this.level.enemies[0].energy);
                console.log('end e',this.level.enemies[0].energy)
    
                //this.lifeBarEndboss.setPercentage(this.level.enemies[0].energy);
                //this.level.enemies[0].hurt = true;
                //bottle.energy = -100;                    
            }
        })
    }
}

checkCollisionsTop(){
    this.level.enemies.forEach((enemy, index)=> {
        if(this.character.isCollidingTop(enemy) && this.character.speedY < 0) {
            //console.log('Collision Top', enemy);
            this.deadenemies++;
            console.log('from top', this.fromTop);
            this.level.enemies[index].dead = true;
            this.level.enemies[index].speed = 0;
            

            
            //console.log('from top', enemy)
        }
    }); 
}

/* delayHurt(){
    setTimeout(() => {
        this.fromTop = false;
        },500);
        console.log('from top_222', this.fromTop);

} */

checkNearEndboss(){
    if(this.character.x > 2100){
        this.level.enemies[0].moveEndboss();
    }
}


         
         

    draw(){
        //clears / deletes the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); // Back
        //  ------- Space for fixed objects --------
        this.addToMap(this.statusBar);
        
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        if(this.character.x > 1800){
            this.addToMap(this.statusBarEndboss);}
        this.ctx.translate(this.camera_x, 0); // Forwards
         //  ------- Space for fixed objects --------

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
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