class Form{
    constructor(){
        this.title=createElement("h1")
        this.input=createInput("NAME")
        this.button=createButton("START")
        this.greeting=createElement("h2")

    }
    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        this.title.position(130,0)
        this.title.html("CAR RACING")
        this.input.position(130,160)
        this.button.position(250,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            this.greeting.position(130,160)
            this.greeting.html("Hello "+player.name)
            playerCount++
            player.index=playerCount
            player.updateCount(playerCount)
            player.updateInfo()
        })
    }
}