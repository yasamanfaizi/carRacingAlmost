class Player{
    constructor(){

    }
    //reads the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val()
        })
    }

    //writes the playerCount value in the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    updateInfo(name){
        database.ref("player"+playerCount).set({
            name: name
        })
    }
}