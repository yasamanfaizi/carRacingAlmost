var database;
var player, form, game, playerCount
var gameState = 0;

function setup(){
    database = firebase.database()
    createCanvas(400,400);  
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    
}


