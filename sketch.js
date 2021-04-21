var  h1,h2,h3,s1,s2,s3,s4,s5;
var g1,g2,g3,g4,g5,grenade,grenade1,grenade2
var gameState,
gameState = 0

var alien

function preload(){
  //manCatchingsword = loadImage("sword2.png")
  ag = loadImage("alienGrenade.png")
  ag2 = loadImage("grenade2.png")
  h1 = loadAnimation("main1.png") 
h2 = loadImage("main2.png")
s1 = loadAnimation("space1.png","spaceship4.png")
s2 = loadAnimation("spaceship1.png")
s3 = loadImage("al1.jpg")
s4 = loadImage("al2.png")
b1 = loadImage("b1.png")
sw = loadImage("sword.png")
}
function setup() {
  
  alien  = new Group()
  createCanvas(displayWidth,displayHeight);
  human1 = createSprite(displayWidth/5,displayHeight/2+100 );
  human1.addAnimation("human",h1)
  //human1.addAnimation("jhgl",manCatchingsword)
  human1.scale = 0.5
  g2 = createSprite(displayWidth,displayHeight/9)
  g2.addAnimation("abc",s1)
  g2.scale = 0.25
  g2.setVelocity(-2,4)
  g2.addAnimation("gfd",s2)
  g3 = createSprite(displayWidth/2+300, displayHeight/2+300,displayWidth,20)
g3.visible = false
g4 = createSprite(displayWidth/2+280, displayHeight/2+280,displayWidth,20)
g4.addImage("fghd",s3)
g4.scale = 0.25
g5 = createSprite(displayWidth/2+100, displayHeight/2+280,displayWidth,20)
g5.addImage("fgh",s4)
g5.scale = 0.25
g4.visible = false
g5.visible = false
sword = createSprite(-900,height/2+100)
sword.addImage("hrfj",sw)
sword .scale =0.25
}

function draw() {
  background(0);
  image(b1,-5*width , 0,6*width,height )  
  
  if(gameState == 0){


  if(g2.isTouching(g3)){
    gameState = 1
    
  }
}
  if(gameState == 1){
    if(sword.isTouching(human1)){
      gameState = 5
    }
    camera.position.x = human1.x
    g2.setVelocity(0,0)
    g2.changeAnimation("gfd",s2)
   human1.setVelocity(-3,0)
   g4.visible = true
   g4.setVelocity(-3,0)
   

  
  
   g5.visible = true
   g5.setVelocity(-3,0)

  if(human1.isTouching(g2)){
    human1.setVelocity(0,0)
   
  }
  if(human1.isTouching(g2)){
    human1.setVelocity(0,0)
    

  }
}
if(gameState == 5){
  human1.setVelocity(0,0)
  g4.setVelocity(0,0)
g5.setVelocity(0,0)
if(mousePressedOver(sword)){
//sword.x+=5

gameState = 58
  
}
if(gameState == 58){
  sword.x = -400
  //human1.changeAnimation("jhgl",manCatchingsword)
alienBomb()
console.log("HI !!")
}
  
}
  drawSprites();
}

function alienBomb(){
if(frameCount%60==0){
  grenade = createSprite(displayWidth/2+100, displayHeight/2+280,20,20)
  var z = Math.round(random(1,2))
  if(z == 1){
    grenade.addImage(ag)
    grenade.scale = 3
    }else {
      grenade.addImage(ag2)
      grenade.scale = 3
  }
  grenade.setVelocity(-3,0)
  alien.add(grenade)
}
}