class Chicken extends MovableObject {
    y = 335;
    x = 120;
    
    height = 90;
    width = 60;
    IMAGES_WALKING = ['img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
                        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
                        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'

    ];

 
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        //Anfangsposition für chicken 200 dann random x addiert random ist zwischen 0 - 1 des wegen * 500 -- ergibt Zahl zwischen 1 und 500
        this.x = 200 + Math.random() * 500  //Zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        this.moveLeft();

        setInterval(()=> {
            let i = this.currentImage % this.IMAGES_WALKING.length;  // let i =0/6 => 0 rest 0... =1/6 => 0 rest 1 ......
            // i = 0,1,2,3,4,5,...0,1,2,3,4,5.........
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        },150);
    }

}