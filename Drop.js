class drop{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:0.1
        }
      this.body = Bodies.circle(x,y,options)
      this.x = x
      this.y = y
    }
    display(){
        push ()
        ellipse(this.body.position.x,this.body.position.y,30,30)
        pop ()
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPostion(this.body,{x:random (0,400),y:random(0,400)})
        }
    }
}
