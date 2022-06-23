class Chicken extends MovableObject {
    y = 335;
    x = 120;
    
    height = 90;
    width = 60;
 
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        //Anfangsposition für chicken 200 dann random x addiert random ist zwischen 0 - 1 des wegen * 500 -- ergibt Zahl zwischen 1 und 500
        this.x = 200 + Math.random() * 500  //Zahl zwischen 200 und 700
    }

}