//Create variables here
var dog,database,food,milk,feedtime

var dogimg,happydogimg



function preload()
{
  //load images here
  dogimg= loadImage("images/dogImg.png");
  happyDogimg=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(1200, 500);
  database= firebase.database()

  dog= createSprite(900,300,50,50)
  dog.addImage(dogimg)
  dog.scale=0.15

  milk= new Food()
 
 
var button1= createButton("feed the dog")
button1.position(500,80)
button1.mousePressed(function(){
  milk.feedDog()
})

var button2=createButton("add feed")
button2.position(600,80)
button2.mousePressed(function(){
  milk.addFeed()
})

milk.getData();
}


function draw() {  
background(46,139,87)


if(food!=0)
{
  dog.addImage(dogimg)
}


milk.display()


  drawSprites();
  //add styles here

  fill("white")
  textSize(15)
text ("last fed at: "+feedtime,300,45)

}



