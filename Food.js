class Food
{
    constructor()
    {
this.image= loadImage("images/Milk.png");

    }

display(){

     if(food!=0)
        {
            var x= 100;
            for(var i=0;i<food;i++)
                {
                image(this.image,x,250,50,50)
                x=x+50
                }
            }
}

getData()
{
    database.ref('food').on("value",function(data){
        food=data.val()
      })
    database.ref('feedtime').on("value",function(data){
        feedtime=data.val()
    })
}
addFeed()
{
 
  database.ref("/").update({
    'food':food+1
  })
}


feedDog()
{
  if(food===0)
      { 
       food=0;
       
      }
  else{
        
        food=food-1;
        database.ref('/').set({
        'food':food,
        'feedtime':hour()

                  })
      dog.addImage(happyDogimg)
    
}
}

}