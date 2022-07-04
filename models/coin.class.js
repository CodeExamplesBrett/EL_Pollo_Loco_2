class Coin extends MovableObject {
    x = 200;
    y = 20;
    height = 50;
    width = 50;

    constructor() {
        super().loadImage('img/7.Marcadores/Icono/Monedas.png');
        this.x = 300;
    }
}