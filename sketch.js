const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxdrops=100;
var drops=[]
function preload(){
    thunderbolt1 = loadImage("thunderbolt/1.png")
    thunderbolt2 = loadImage("thunderbolt/2.png")
    thunderbolt3 = loadImage("thunderbolt/3.png")
    thunderbolt4 = loadImage("thunderbolt/4.png")
}

function setup(){
   createCanvas(800,600)
   engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    umbrella1 = new Umbrella(380,550)
    thunder = createSprite(350,30,50,50)
    if(World.frameCount%10===0){
        var random1 = random(1,5)
    }
}

function draw(){
    background(10,9,10)
    umbrella1.display()
    
    for(var i=0;i<maxdrops;i++){
        drops.push(new drop(random(0,400),random(0,400)))
    }
    for (var i = 0; i < drops.length; i++) {
     
        drops[i].display();
        
      }
      switch(random1){

           case 1 : thunder.addImage(thunderbolt1)
                    break;
            case 2 : thunder.addImage(thunderbolt2)
                    break;
            case 3 : thunder.addImage(thunderbolt3)

            case 4 : thunder.addImage(thunderbolt4)

      }
}   

