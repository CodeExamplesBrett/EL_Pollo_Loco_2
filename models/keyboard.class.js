class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    constructor(){
        this.bindKeyPressEvents();
        this.bindBtnPressEvents();
    }


bindBtnPressEvents() {
    //timeout weil html button muss erst erstehlt werden
    setTimeout(() => {
        this.fromTop = false;
        
    document.getElementById('btn-right').addEventListener('touchstart', (e)=> {
        e.preventDefault();
        this.RIGHT = true;
    });

    document.getElementById('btn-right').addEventListener('touchend', (e)=> {
        e.preventDefault();
        this.RIGHT = false;
    });

    document.getElementById('btn-left').addEventListener('touchstart', (e)=> {
        e.preventDefault();
        this.LEFT = true;
    });

    document.getElementById('btn-left').addEventListener('touchend', (e)=> {
        e.preventDefault();
        this.LEFT = false;
    });

    document.getElementById('btn-up').addEventListener('touchstart', (e)=> {
        e.preventDefault();
        this.UP = true;
    });

    document.getElementById('btn-up').addEventListener('touchend', (e)=> {
        e.preventDefault();
        this.UP = false;
    });

    document.getElementById('btn-fire').addEventListener('touchstart', (e)=> {
        e.preventDefault();
        this.D = true;
    });

    document.getElementById('btn-fire').addEventListener('touchend', (e)=> {
        e.preventDefault();
        this.D = false;
    });
},100);

}

bindKeyPressEvents() {
    window.addEventListener('keydown', (e)=> {
        if(e.keyCode == 39){
            keyboard.RIGHT = true;
        }
        if(e.keyCode == 37){
            keyboard.LEFT = true;
        }
        if(e.keyCode == 38){
            keyboard.UP = true;
        }
        if(e.keyCode == 40){
            keyboard.DOWN = true;
        }
        if(e.keyCode == 32){
            keyboard.SPACE = true;
        }
        if(e.keyCode == 68){
            keyboard.D = true;
        }
        //console.log(e);
    });
    
    window.addEventListener('keyup', (e)=> {
        if(e.keyCode == 39){
            keyboard.RIGHT = false;
        }
        if(e.keyCode == 37){
            keyboard.LEFT = false;
        }
        if(e.keyCode == 38){
            keyboard.UP = false;
        }
        if(e.keyCode == 40){
            keyboard.DOWN = false;
        }
        if(e.keyCode == 32){
            keyboard.SPACE = false;
        }
        if(e.keyCode == 68){
            keyboard.D = false;
        }
    //console.log(e);
    });

}



}