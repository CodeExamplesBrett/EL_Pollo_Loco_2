let canvas;
let world;
let keyboard = new Keyboard();

function startGame(){
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('start-game').classList.add('d-none');

    document.getElementById('Restart-game').classList.add('d-none');
    document.getElementById('you-lost').classList.add('d-none');
    document.getElementById('game-over').classList.add('d-none');
    //Define canvas in html Element with id= "canvas"
    loadChickens();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    //console.log('My Character is', world.character);
}

function restartGame(){
    world.restartGameW();

}




