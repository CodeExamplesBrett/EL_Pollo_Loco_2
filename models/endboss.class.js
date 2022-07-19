class Endboss extends MovableObject {
    y = 60;
    height = 400;
    width = 250;
    speed = 0.15;
    nearEndboss = false;

    IMAGES_ANGRY = [  'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
];

    IMAGES_WALKING = ['img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G12.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
                  
];

IMAGES_HURT = [
                 'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
                 'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
                 'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
];
 
    IMAGES_DEAD = [  'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
                    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
                    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png' 
];



constructor() {
    super().loadImage(this.IMAGES_ANGRY[0]);
    this.loadImages(this.IMAGES_ANGRY);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_WALKING);
    this.speed = 0.3;
    this.x = 2500;
    this.animate();
}

animate(){

    setInterval(() => {
        if(this.nearEndboss = true){
        this.moveLeft();}
        //this.playAnimation(this.IMAGES_WALKING);
    }, 1000/60);

    setInterval(()=> {
        this.playAnimation(this.IMAGES_ANGRY);
    },150);

    setInterval(()=> {
        if(this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            //this.dying_sound.play();

        } else {
            if (this.isHurt()){
                this.playAnimation(this.IMAGES_HURT);
                //this.hurt_sound.play();
        }
        }     
    },50);
}
}