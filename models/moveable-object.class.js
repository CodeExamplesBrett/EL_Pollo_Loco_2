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


    //loadImage('img/test.png');
    //PAth von untergeordinate class zB character.class.js
    loadImage(path) {
        this.img = new Image();  // ist gleich wie this.img = document.getElementById('image') <img id = "image" src>
        this.img.src = path;
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

    moveRight() {
        console.log('Moving right');
    }

    moveLeft(){
        setInterval(() => {

            //this.x = this.x - 10;
            this.x -= this.speed;
            }, 1000/60);
    }
}