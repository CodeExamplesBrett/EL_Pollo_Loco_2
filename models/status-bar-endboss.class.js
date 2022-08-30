class StatusBarEndboss extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png'
    ];
    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 550;
        this.y = 0;
        this.width = 100;
        this.height = 40;
        this.setPercentage(100);
    }

    //setPercentage(50);
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100){
            return 5;
        } else if (this.percentage >= 80){
            return 4;
        } else if (this.percentage >= 60){
            return 3;
        } else if (this.percentage >= 40){
            return 2;
        } else if (this.percentage >= 20){
             return 1;
        } else {
            return 0;
        }
    }   
}