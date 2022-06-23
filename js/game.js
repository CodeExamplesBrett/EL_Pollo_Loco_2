let canvas;
let world;

function init(){
    //Define canvas in html Element with id= "canvas"
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    
    
    console.log('My Character is', world.character);
    
}