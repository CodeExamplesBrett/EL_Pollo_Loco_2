class Character extends MovableObject {
    x = 120;
    y = 130;
    height = 300;
    width = 100;
    speed = 10;

    offset = {
        top: 100,
        left: 30,
        right: 30,
        bottom: 0
    };

    isDead = false;

    IMAGES_WALKING = ['img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png'
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];


    world;
    walking_sound = new Audio('./audio/running.mp3');
    jumping_sound = new Audio('./audio/jump.mp3');
    hurt_sound = new Audio('./audio/hurt.mp3');
    dying_sound = new Audio('./audio/dying.mp3');
    

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.move();
        this.animate();
    }

    move(){
        this.walking_jumping = setInterval(()=> {
            this.walking_sound.pause();
            this.characterWalking();
            this.CharacterJump();
            //bewegt canvas mit gleichem x-Vershiebung in anderer Richtung
            this.world.camera_x = -this.x + 100;
        }, 1000/60);

    }

    characterWalking(){
        if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
            this.moveRight();
            this.otherDirection = false;
            this.walking_sound.play();
        }
    
        if(this.world.keyboard.LEFT && this.x > 0){
            this.moveLeft();
            this.otherDirection = true; 
            this.walking_sound.play();
        }
    }

    CharacterJump(){
        //console.log('this.speedY', this.speedY);
        if(this.world.keyboard.UP && !this.IsAboveGround()){
            this.jump();
            this.jumping_sound.play();
        }
    }

    animate(){
        this.dying_hurt = setInterval(()=> {
            this.dying_sound.pause();
            this.hurt_sound.pause();
            if(this.isDead == true) {
                this.playAnimation(this.IMAGES_DEAD);
                this.dying_sound.play();
            } else if (this.isHurt() && !this.IsAboveGround()){
                    this.playAnimation(this.IMAGES_HURT);
                    this.hurt_sound.play();
            } else if (this.IsAboveGround()){
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    // Walk animation
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }  
        },75);
    }
    
    stopCharacter(){
        clearInterval(this.dying_hurt);
        clearInterval(this.walking_jumping);
    }

}