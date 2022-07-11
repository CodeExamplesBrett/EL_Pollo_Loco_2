class Coin extends MovableObject {
    x = 200;
    y = 50;
    height = 50;
    width = 50;

    constructor() {
        super().loadImage('img/7.Marcadores/Icono/Monedas.png');
        this.x = 200 + Math.random() * 2000 
        this.y = 50 + Math.random() * 150
         
    }
}