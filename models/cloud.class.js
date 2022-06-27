class Cloud extends MovableObject {
        x = 500;
        y = 20;
        height = 250;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.width = 500;
        this.animate();

        //this.x = Math.random() * 500;
    }

        animate() {
            this.moveLeft();
        }

        
        
    }

