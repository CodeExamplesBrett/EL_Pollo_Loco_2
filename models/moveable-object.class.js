class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;


    //loadImage('img/test.png');
    //PAth von untergeordinate class zB character.class.js
    loadImage(path) {
        this.img = new Image();  // ist gleich wie this.img = document.getElementById('image') <img id = "image" src>
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        
    }
}