class Game {
    constructor(){

    }

    //read the gameState value from database
    getState(){
        db.ref("gameState").on("value",function (data) {
            gameState = data.val()
        })
    }

    //writing the gameState value to the database
    updateState(state){
        db.ref("/").update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }

    }

    play(){
        form.hide()
        textSize(20)
        text("GAME IS STARTING",150,250)
    }

}
    