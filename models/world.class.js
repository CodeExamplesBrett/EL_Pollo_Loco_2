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

    endbossActive = false;
    LastendbossActive = false;


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
            this.checkCollisions();
            this.checkCollisionsChick();
            this.checkCollisionsEndboss()
            this.checkThrowObjects();
            this.checkCollisionsCoin();
            this.checkCollisionsBottle();
            this.checkCollisionsThrowObjects();
            this.checkCollisionsTop();
            this.checkCollisionsTopChick();
            this.checkNearEndboss();
            this.checkGameOver();
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
            this.level.chickens.forEach((chicken)=> {
                if(this.character.isColliding(chicken) && !chicken.dead && !this.character.isCollidingTop(chicken)) {
                    //console.log('Collision with Character', enemy);
                    this.character.hit(1);
                    this.statusBar.setPercentage(this.character.energy);
                    //console.log('character e', this.character.energy)
                    //console.log('Energy level', this.character.energy);
                }
            });
    }

    checkCollisionsChick(){
        this.level.chicks.forEach((chick)=> {
            if(this.character.isColliding(chick) && !chick.dead && !this.character.isCollidingTop(chick)) {
                //console.log('Collision with Character', enemy);
                this.character.hit(1);
                this.statusBar.setPercentage(this.character.energy);
                console.log('character e', this.character.energy)
                //console.log('Energy level', this.character.energy);
            }
        });
}

checkCollisionsEndboss(){
        if(this.character.isColliding(this.level.endboss[0])) {
            //console.log('Collision with Character', enemy);
            this.character.hit(1);
            this.statusBar.setPercentage(this.character.energy);
            console.log('character e', this.character.energy)
            //console.log('Energy level', this.character.energy);
        } 
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
            if(this.level.endboss[0].isColliding(bottle) ){
                let index = this.throwableObjects.indexOf(bottle)
                this.throwableObjects.splice(index, 1);
                console.log('Collision with bottle', bottle);
                this.level.endboss[0].hit(2);
                this.statusBarEndboss.setPercentage(this.level.endboss[0].energy);
                console.log('end e',this.level.endboss[0].energy)
    
                //this.lifeBarEndboss.setPercentage(this.level.enemies[0].energy);
                //this.level.enemies[0].hurt = true;
                //bottle.energy = -100;                    
            }
        })
    }
}

checkCollisionsTop(){
    this.level.chickens.forEach((chicken, index)=> {
        if(this.character.isCollidingTop(chicken) && this.character.speedY < 0) {
            //console.log('Collision Top', enemy);
            this.deadenemies++;
            console.log('from top', this.fromTop);
            this.level.chickens[index].dead = true;
            this.level.chickens[index].speed = 0;
             //console.log('from top', enemy)
        }
    }); 
}

checkCollisionsTopChick(){
    this.level.chicks.forEach((chick, index)=> {
        if(this.character.isCollidingTop(chick) && this.character.speedY < 0) {
            //console.log('Collision Top', enemy);
            this.deadenemies++;
            console.log('from top', this.fromTop);
            this.level.chicks[index].dead = true;
            this.level.chicks[index].speed = 0;
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
    if(this.character.x > 2000){
        this.level.endboss[0].moveEndboss();
    }
}

checkGameOver(){
    if (this.character.energy == 0){
        document.getElementById('you-lost').classList.remove('d-none');
        this.stopObjectActions_Sounds();
        //this.character.dying_sound.pause();
        document.getElementById('Restart-game').classList.remove('d-none');
    }  else if(this.level.endboss[0].energy == 0) {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('Restart-game').classList.remove('d-none');
            this.stopObjectActions_Sounds();

    }
} 

stopObjectActions_Sounds(){
        this.stopChicken();
        this.stopChick();
        this.stopCharacter();
        this.character.speed = 0;
        this.level.endboss[0].speed = 0;
}

stopChicken() {
    this.level.chickens.forEach((chicken) => {
        chicken.stopChicken();
    });
}

stopChick(){
    this.level.chicks.forEach((chick) => {
        chick.stopChick();

    });
}

stopCharacter(){
    this.character.stopCharacter();
}

startGameW(){
    console.log('start')
}


restartGameW(){
    //reloads webpage
    location.reload();
    
    /* this.character.energy = 100;
    document.getElementById('Restart-game').classList.add('d-none');
    document.getElementById('you-lost').classList.add('d-none');
    //Define canvas in html Element with id= "canvas"
    loadChickens();
    this.character.isDead = false;
    this.character.dying_sound.pause();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard); */
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

        this.DrawEndbossStatusbar();

        this.ctx.translate(this.camera_x, 0); // Forwards
         //  ------- Space for fixed objects --------

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObjects);

        this.addObjectsToMap(this.level.chickens);
        this.addObjectsToMap(this.level.chicks);
        this.addObjectsToMap(this.level.endboss);
       
        this.ctx.translate(-this.camera_x, 0);
        
    
        //draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame( function() {
            self.draw();
        });
        
    };

    DrawEndbossStatusbar(){
        if(this.character.x > 1800){
            this.endbossActive = true;
            this.addToMap(this.statusBarEndboss);
        }
             if(this.endbossActive != this.LastendbossActive){
                this.addToMap(this.statusBarEndboss);
            }   
    }

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
        //mo.drawFrame(this.ctx);

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