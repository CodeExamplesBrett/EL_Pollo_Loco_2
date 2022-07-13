class Bottle extends MovableObject {
    x = 200;
    y = 50;
    height = 70;
    width = 50;

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        this.x = 200 + Math.random() * 2000 
        this.y = 350  
         
    }
}