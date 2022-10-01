var espaco, espacoImg
var foguete,fogueteImg
var asteroides, asteroidesImg, asteroidesgroup
var parede
var parede2
var parede3
var fireball, fireballImg, fireballgroup




function preload(){
espacoImg = loadImage("fundo.jpg")

fogueteImg = loadImage("foguete.png")

asteroidesImg = loadImage("asteroides.png")

fireballImg = loadImage("fireball.png")
}

function setup() {
 createCanvas(400,400)
  espaco = createSprite(200,200)  
  espaco.addImage(espacoImg)
  espaco.scale = 2.5  
 
  fireballgroup = createGroup()

  asteroidesgroup = createGroup()
 

  foguete = createSprite(100,300,50,50)
  foguete.addImage(fogueteImg)
  foguete.scale = 0.25

  parede = createSprite(0,10,10,800)
  parede.visible = false 
  
  parede2 = createSprite(400,10,10,800)
  parede2.visible = false

  parede3 = createSprite(200,400,800,10)
  parede3.visible = false



}

function draw() {
  background("black")   
  drawSprites()
 
 
 if(keyDown(LEFT_ARROW)){
 foguete.x -= 8
 }
 
 if(keyDown(RIGHT_ARROW)){
foguete.x += 8
    }

  if(keyDown("space")&& frameCount%30 == 0){
   criar_fireballs() 
  }
 
  if(fireballgroup.isTouching(asteroidesgroup)){
  
  asteroides.remove()
  fireball.remove() 


  }




 criar_asteroides()
  
 
 foguete.collide(parede)
 foguete.collide(parede2)
 foguete.debug = true  
 foguete.setCollider("circle",0,0,30)

 

 if(foguete.isTouching(asteroidesgroup)){
  foguete.destroy()
  textSize(30)
  fill("red")
  text("voce perdeu", 200, 200)
  
  

 }
}
 
function criar_asteroides(){
  if(frameCount%60 == 0){
  asteroides = createSprite(200,0,50,50)
  asteroides.addImage(asteroidesImg) 
  asteroides.scale = 0.12
  asteroides.velocityY = 3
  asteroides.x = Math.round(random(1,400))
  asteroidesgroup.add(asteroides)


  }
}


function criar_fireballs(){

fireball = createSprite(foguete.x, foguete.y,10,10)
fireball.velocityY = -5 
fireball.addImage(fireballImg)
fireball.scale = 0.1
fireballgroup.add(fireball)


} 

