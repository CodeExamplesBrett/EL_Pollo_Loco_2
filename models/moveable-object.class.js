class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    coinCollection = 0;
    bottleCollection = 0;
    lastHit = 0;
    fromTop = false;

    nearEndboss = false;


    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    offsetCollTop = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    collectBottle_sound = new Audio('./audio/bottle.mp3');

    applyGravity() {
        setInterval(()=>{
            if(this.IsAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
        },1000/25);
    }

    IsAboveGround(){
        if(this instanceof ThrowableObject){  //throwableObjects should always fall
            return true;
        } else {
            return this.y < 130;
        }
        
    }

    // character.isColliding(chicken);
    isColliding(mo){
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && 
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    isCollidingTop(mo){
        return this.y + this.height > mo.y && 
            this.y + this.height - this.offset.bottom < mo.y + mo.height - mo.offset.bottom &&
            this.x + this.width > mo.x &&
            this.x + this.width < (mo.x + mo.width + 70); 
            
    }

    hit(amount){
        this.energy -= 5 * amount;
        if(this.energy < 0){
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
        //console.log(this.energy)
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; //Difference in seconds
        return timepassed < 1;  
    }

    collectCoin(){
        this.coinCollection += 1;
        if(this.coinCollection >= 5){
            this.coinCollection = 5; 
        } 
        console.log('collection', this.coinCollection)
    }

    collectBottle(){
        this.bottleCollection += 1;
        if(this.bottleCollection >= 10){
            this.bottleCollection = 10; 
        } 
        this.collectBottle_sound.play();
        console.log('collection bottle', this.bottleCollection)
    }

    playAnimation(images) {
                let i = this.currentImage % images.length;  // let i =0/6 => 0 rest 0... =1/6 => 0 rest 1 ...... (current image defined as = 0 in MoveableObject)
                // i = 0,1,2,3,4,5,...0,1,2,3,4,5.........
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
    }

    moveEndboss(){
        return this.nearEndboss = true;
    }

    moveRight() {
        this.x += this.speed; 
    }

    moveLeft(){
        this.x -= this.speed;      
    }

    jump(){
        this.speedY = 30;
    }

    
}