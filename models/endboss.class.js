class Endboss extends MovableObject {
    y = 60;
    height = 400;
    width = 250;
    speed = 0.15;
    nearEndboss = false;

    offset = {
        top: 100,
        left: 30,
        right: 30,
        bottom: 80
    };
    

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
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
                        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
                  
];

IMAGES_ATTACK = ['img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
                'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
                'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
                'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
                'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
                'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
                'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
                'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
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
    this.loadImages(this.IMAGES_ATTACK);
    this.speed = 0.5;
    this.x = 2500;
    this.animate();
}

animate(){

    this.move();
    this.attack();
    this.Dead_Hurt(); 
}

move(){
    this.moveInt = setInterval(() => {
        if(this.nearEndboss == true){
        this.moveLeft();}
        //this.playAnimation(this.IMAGES_WALKING);
    }, 1000/60);
}

attack(){
    this.angry_attack = setInterval(()=> {
        if(this.nearEndboss == true){
            this.playAnimation(this.IMAGES_ATTACK);
        } else if (this.nearEndboss == false){
        this.playAnimation(this.IMAGES_ANGRY);}
    },150);
}

Dead_Hurt(){
    this.animationInt = setInterval(()=> {
        if(this.isDead == true) {
            this.playAnimation(this.IMAGES_DEAD);
            this.speed = 0;
            //this.dying_sound.play();

        } else if 
             (this.isHurt()){
                this.playAnimation(this.IMAGES_HURT);
                //this.hurt_sound.play();
        } 
            
    },50);
}


stopEndboss() {
    clearInterval(this.animationInt);
    clearInterval(this.moveInt);
    clearInterval(this.angry_attack);
}

}