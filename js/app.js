//the buttons
let $p1 = $('#p1');
let $p2 = $('#p2');
let $p3 = $('#p3');

//everything about the Tamagatchi
class Tamagatchi {
	constructor(owner ,name ,hunger ,sleep ,bordem){
		this.owner = owner;
		this.name = name;
		this.hunger = hunger;
		this.sleep = sleep;
		this.bordem = bordem;
		this.age = 0;
		this.born = new Date();
		this.isAlive = true;
	}
	hungry(){
     
     const hI = window.setInterval(()=>{
      	if(this.born.getMinutes() % 1 == 0) {
      		this.hunger++;
      		$p1.text(`hunger: ${this.hunger}`);
      		console.log(`hunger: ${this.hunger}`)
      		if(this.hunger == 10){
      		  this.isAlive = false;
      		  console.log('death by hunger')
      		  window.clearInterval(hI);
      		}
      	}
      }, 45000)

	}
	sleepy(){
      const sI = window.setInterval(()=>{
     
      		this.sleep++;
            $p2.text("sleepiness: " + this.sleep)
      		console.log("sleep: " + this.sleep)
      		if(this.sleep == 10){
      		  this.isAlive = false;
      		  console.log("death by sleep deprevation")
      		  window.clearInterval(sI);
      		
      	}
      }, 300000)
	}
	bored(){
      const bI = window.setInterval(()=>{
            this.bordem++;
      		$p3.text("bordem: " + this.bordem)
      		console.log("bordem: " + this.bordem)
      		if(this.bordem == 10){
      		  this.isAlive = false;
      		  console.log("bordem's got a new bestriend")
      		   window.clearInterval(bI);

      		
      	}
      }, 1000)
	}
	growOld(){
      const aI = window.setInterval(()=>{
      		this.age++;
      		console.log("happy birthday " + this.name + "! your now " + this.age)
      		if(this.age == 25){
      		  this.isAlive = false;
      		  console.log("your Tamagatchi lived a great life!.. but now its dead so buy another one")
      		  window.clearInterval(aI);

      		}
      	
      } , 180000 )
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
    this.sleep--;
    $p2.text(`sleep: ${this.sleep}`)
}
  else{
  	alert(`i aint tired anymore`)
  }
}
}
const mew = new Tamagatchi("colin" ,"jimbo" , 1, 1, 1, 1);

//fuction that calls the functions that further invitable death
const ownerStuff = (obj) =>{
$('#feed').on("click", () =>{
   obj.feed()
});
$('#sleep').on("click", () =>{
   obj.goToBed()
});
$('#play').on("click", () =>{
  	obj.play()
 });
};


const init = (obj) =>{

console.log(obj.born);
obj.growOld();
obj.bored();
obj.sleepy();
obj.hungry();
ownerStuff(obj);
if(obj.isAlive == false){
	return "Game over";
}
}

init(mew);
