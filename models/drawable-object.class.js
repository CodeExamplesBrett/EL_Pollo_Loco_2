class DrawableObject {
    img;
    //iamges to animate character / object
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

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


}