class Chick extends MovableObject {
    y = 375;
    x = 120;
    
    height = 50;
    width = 30;
    IMAGES_WALKING = ['img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
                        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
                        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'

    ];

 
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        //Anfangsposition für chicken 200 dann random x addiert random ist zwischen 0 - 1 des wegen * 500 -- ergibt Zahl zwischen 1 und 500
        this.x = 200 + Math.random() * 2000  //Zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.moveLeft();
            }, 1000/60);

        setInterval(()=> {
            this.playAnimation(this.IMAGES_WALKING);
        },150);
    }

}