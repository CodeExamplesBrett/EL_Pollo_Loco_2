class CoinBar extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
        
    ];
    C_count = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 180;
        this.y = 0;
        this.width = 100;
        this.height = 60;
        this.setCoinCount(0);
    }

    //setPercentage(50);
    setCoinCount(C_count) {
        this.C_count = C_count; // => 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.C_count == 0){
            return 0;
        } else if (this.C_count == 1){
            return 1;
        } else if (this.C_count == 2){
            return 2;
        } else if (this.C_count == 3){
            return 3;
        } else if (this.C_count == 4){
             return 4;
        } else if (this.C_count == 5){
            return 5;
         }
    } 
}