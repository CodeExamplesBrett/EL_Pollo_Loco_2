let canvas;
let world;
let keyboard = new Keyboard();
let restart = false;

function startGame(){
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('start-game').classList.add('d-none');
    //Define canvas in html Element with id= "canvas"
    loadChickens();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My Character is', world.character);
}

function RestartGame(){
    document.getElementById('Restart-game').classList.add('d-none');
    document.getElementById('you-lost').classList.add('d-none');
    //Define canvas in html Element with id= "canvas"
    loadChickens();
    restart = true;
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}


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