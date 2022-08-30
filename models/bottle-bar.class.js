class BottleBar extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'  
    ];
    B_count = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 90;
        this.width = 100;
        this.height = 40;
        this.setBottleCount(0);
    }

    //setPercentage(50);
    setBottleCount(B_count) {
        this.B_count = B_count; // => 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.B_count == 0){
            return 0;
        } else if (this.B_count >= 1 && this.B_count < 3){
            return 1;
        } else if (this.B_count >= 3 && this.B_count < 5){
            return 2;
        } else if (this.B_count >= 5 && this.B_count < 7){
            return 3;
        } else if (this.B_count >= 7 && this.B_count < 9){
             return 4;
        } else if (this.B_count >= 9){
            return 5;
        }
    } 
}