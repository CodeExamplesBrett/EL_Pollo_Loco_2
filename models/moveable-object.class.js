class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    //iamges to animate character / object
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;

    applyGravity() {
        setInterval(()=>{
            if(this.IsAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
        },1000/25);
    }

    IsAboveGround(){
        return this.y < 130;
    }

    //loadImage('img/test.png');
    //PAth von untergeordinate class zB character.class.js
    loadImage(path) {
        this.img = new Image();  // ist gleich wie this.img = document.getElementById('image') <img id = "image" src>
        this.img.src = path;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Chicken) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }

    // character.isColliding(chicken);
    isColliding(mo){
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y && 
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        }
    }

    isDead() {
        return this.energy == 0;
    }
    
    /**
     * Images für character Bewegung Animation..
     * @param {Array} arr - ['img/image1.png, img/image2.png......]
     */
    loadImages(arr) {
            arr.forEach((path)=> {
                let img = new Image();
                //path given to img from array -- converted from string to array
                img.src = path;
                // [path] is key in the json being pushed
                this.imageCache[path] = img;
            });  
    }

    playAnimation(images) {
                let i = this.currentImage % this.IMAGES_WALKING.length;  // let i =0/6 => 0 rest 0... =1/6 => 0 rest 1 ...... (current image defined as = 0 in MoveableObject)
                // i = 0,1,2,3,4,5,...0,1,2,3,4,5.........
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
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