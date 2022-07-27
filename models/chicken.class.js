class Chicken extends MovableObject {
    y = 335;
    x = 120;

    xTarget = this.x;
    yTarget = this.y;
    speed = 0.15; 

    dead = false;
    
    height = 90;
    width = 60;
    IMAGES_WALKING = ['img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
                        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
                        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'

    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

 
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
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

        setInterval(()=> {
            if(this.dead) {
                this.playAnimation(this.IMAGES_DEAD);
            }      
        },50);
    }


}