class Game{
    constructor(){

    }
    //reads the gameState value from the database
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })
    }

    //writes the gameState value in the database
    updateState(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        if(gameState ===0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }
}