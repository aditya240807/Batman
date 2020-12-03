class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: false
        }
        this.umbrella = Bodies.circle(x, y, options)
        this.image = loadImage("Walking Frame/walking_1.png")
    }
    display() {
    push ()
    image (this.image,this.umbrella.position.x,this.umbrella.position.y,50,50)
    pop ()
    }
}