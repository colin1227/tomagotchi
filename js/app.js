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
      // if(!born){
      //   if()
      // }
      window.setInterval(()=>{
      	if(this.born.getMinutes() % 1 == 0) {
      		this.hunger++;
      		console.log(`hunger: ${this.hunger}`)
      		if(this.hunger == 10){
      		  this.isAlive = false;
      		  console.log('death by hunger')
      		  window.clearInterval();
      		}
      	}
      }, 45000)

	}
	sleepy(){
       window.setInterval(()=>{
      	if(this.born % 10 == 0) {
      		this.sleep++;
      		console.log("sleep: " + this.sleep)
      		if(this.sleep == 10){
      		  this.isAlive = false;
      		  console.log("death by sleep deprevation")
      		  window.clearInterval();
      		}
      	}
      }, 300000)
	}
	bored(){
      window.setInterval(()=>{
      	if(this.born % 0.5 == 0) {
      		this.bordem++;
      		console.log("bordem: " + this.bordem)
      		if(this.bordem == 10){
      		  this.isAlive = false;
      		  console.log("bordem's got a new bestriend")
      		   window.clearInterval();
      		}
      	}
      }, 30000)
	}
	growOld(){
      window.setInterval(()=>{
      		this.age++;
      		console.log("happy birthday " + this.name + "! your now " + this.age)
      		if(this.age == 25){
      		  this.isAlive = false;
      		  console.log("your Tamagatchi lived a great life!.. but now its dead so buy another one")
      		  window.clearInterval();

      		}
      	
      } , 180000 )
	}
}

const mew = new Tamagatchi("colin" ,"jimbo" , 1, 1, 1, 1);
// console.log(mew.owner);
console.log(mew.born)
mew.growOld()
mew.bored()
mew.sleepy()
mew.hungry()

