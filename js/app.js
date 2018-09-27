//the buttons
let $p1 = $('#p1');
let $p2 = $('#p2');
let $p3 = $('#p3');

//everything about the Tamagatchi
class Tamagatchi {
	constructor(hunger ,sleep ,bordem){
		this.owner = ownerName;
		this.name = petName;
		this.hunger = hunger;
		this.sleep = sleep;
		this.bordem = bordem;
		this.age = 0;
		this.born = new Date();
		this.isAlive = true;
	}
	hungry(){
     
     const hI = window.setInterval(()=>{
      	if(this.isAlive == false){
      			window.clearInterval(hI)
      			return "game over";
      		}
      		
      		if(this.hunger == 10){
      		  this.isAlive = false;
      		  console.log('death by hunger')
            let $tP = $('#tommy').position();
      		  //$('.AlvAwk').css('animation-play-state' , 'paused')
            $('#tommy').removeClass('AlvAwk')
            $('#tommy').attr("position", $tP)
            $('#tommy').addClass("dead")
      		  
      		  window.clearInterval(hI)
      		  
      		}
      		else{
      		this.hunger++;
      		$p1.text(`hunger: ${this.hunger}`);
      		console.log(`hunger: ${this.hunger}`)
      		}
      	
      	
      }, 1500)

	}
	sleepy(){
      const sI = window.setInterval(()=>{
            if(this.isAlive == false){
      			window.clearInterval(sI)
      			return "game over";
      		}
    
      		if(this.sleep == 10){
      		  this.isAlive = false;
      		  console.log("death by sleep deprevation")
      		  $('#tommy').addClass("dead")
      		  $('#tommy').css('animation-play-state' , 'paused')
      		  window.clearInterval(sI)
      		 
      	}
      	else{
      		this.sleep++;
      		$p2.text(`sleepiness: ${this.sleep}`)
      		console.log(`sleepiness: ${this.sleep}`)
      	}
      	
      }, 30000)
	}
	bored(){
      const bI = window.setInterval(()=>{
            if(this.isAlive == false){
      			window.clearInterval(bI)
      			return "game over"
      		}
            
      		if(this.bordem == 10){
      		  this.isAlive = false;
      		  console.log("bordem's got a new bestfriend")
      		  $('#tommy').addClass("dead")
      		  window.clearInterval(bI)
      		  $('#tommy').css('animation-play-state' , 'paused')

      		}
      		else{
      			this.bordem++;
      		$p3.text("bordem: " + this.bordem)
      		console.log("bordem: " + this.bordem)
      		  }
      	
      }, 10000)
      			}
	growOld(){
      const aI = window.setInterval(()=>{
      		if(this.isAlive == false){
      			window.clearInterval(aI)
      		}
      		if(this.age === 10){
      			$('#tommy').attr("src", "https://vignette.wikia.nocookie.net/tamagotchi/images/a/a2/03.gif/revision/latest/top-crop/width/240/height/240?cb=20091005135123")
      		}
      		this.age++;
      		console.log("happy birthday " + this.name + "! your now " + this.age)
      		
      		if(this.age == 25){
      		  this.isAlive = false;
      		  $('#tommy').css('animation-play-state' , 'paused')
      		  console.log("your Tamagatchi lived a great life!.. but now its dead so buy another one")
      		  $('#tommy').css('animation-play-state' , 'paused')
            $('#tommy').addClass("dead")
      		  window.clearInterval(aI);

      		}
      	
      } , 10000)
	}
	feed(){
      if(this.hunger> 1){
        this.hunger--;
        $p1.text(`hunger: ${this.hunger}`);
    

      }
      else{
      	alert("Im full!")
      }
  
}
play(){
  if(this.bordem> 1){
    this.bordem--;
    $p3.text(`bordem: ${this.bordem}`)
  }
  else{
  	alert("Im tired let me catch my breath")
  }
}
goToBed(){
  if(this.sleep > 1){
    $('#night').css("background-color", "rgba(0,0,0,0.4)");
    let sleeping = setTimeout(() =>{
    this.sleep--;
    $p2.text(`sleep: ${this.sleep}`)
    $('#night').css( "background-color", "rgba(0 ,0 ,0 ,0)");
}, 4000)
}
}
}


let ownerName = prompt('whats your name?')
$('#owner').text(`owner: ${ownerName}`)
let petName = prompt(`and what would you like to name your tommy?`)
const mew = new Tamagatchi(1, 1, 1);

//fuction that calls the functions that further invitable death
const ownerStuff = (obj) =>{
$('#feed').on("click", () =>{
  //let $position = $('#tommy').position();
  //$('#tommy').switchClass("AlvAwk", "PetEat", [14000])

   //$('#tommy').css('animation-play-state' , 'paused');
   // $('.AlvAwk').stop();
   //$(".AlvAwk").animate(obj)
   // $('#tommy').addClass("PetEat");
   console.log($position)
   obj.feed();
   

});
$('#sleep').on("click", () =>{
   obj.goToBed();
});
$('#play').on("click", () =>{
  	obj.play();
 });
};


const init = (obj) =>{

console.log(obj.born);
obj.growOld();
obj.bored();
obj.sleepy();
obj.hungry();
ownerStuff(obj);
$('#pet').text(`name: ${petName}`)


}

init(mew);
