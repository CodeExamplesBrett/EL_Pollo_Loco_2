let canvas;
let world;
let keyboard = new Keyboard();

async function startGame(){
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('loadingScreen').classList.remove('d-none');
    document.getElementById('loadingScreenBack').classList.remove('d-none');
    document.getElementById('start-game').classList.add('d-none');

    document.getElementById('Restart-game').classList.add('d-none');
    document.getElementById('you-lost').classList.add('d-none');
    document.getElementById('game-over').classList.add('d-none');
    //Define canvas in html Element with id= "canvas"
    loadChickens();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    try {
        // Wait for assets to load
        await world.loadAssets();
        
        // Once assets are loaded, remove the loading screen and start the game loop
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('loadingScreenBack').style.display = 'none';
        world.draw(); // Start the game loop
    } catch (error) {
        console.error('Failed to load assets:', error);
    }


    //console.log('My Character is', world.character);
}

function restartGame(){
    world.restartGameW();

}




