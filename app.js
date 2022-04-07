//Cat//
const feedBtn = document.getElementById('feedBtn');
const sleepBtn = document.getElementById('sleepBtn');
const playBtn = document.getElementById('playBtn');
const message = document.getElementById('message');
const catPic = document.getElementById('catPic');
let insertName = document.getElementById('insertName');
let petName;

//testing out username input
// const petName = document.getElementById('petName');


//Testing user name input//
// petName.addEventListener("DOMContentLoaded", () =>{
//     window.prompt("Enter your pets name: ");
//     alert(`Your pets name is  ${petName}`);
//     })

// function that asks user for name of pet
const getName = () => {
    petName = prompt("Aw, great choice! Now enter a name for your pet.");
    while (petName.length === 0) {
       alert("Please enter a name for your pet.");
       petName = prompt("Your pet name:");
    }
 };
 

//Cat Class//
class CyberPet {
    constructor(petType){
        this._petType = petType;
        this._sleepy = 40;
        this._hungry = 40;
        this._bored = 40;
    }
    get petType(){
        return this._petType;
    }
    get hungry() {
        return this._hungry;
    }
    get energy(){
        return this._sleepy;
    }

    feed() {
        this._hungry -= 6;
        this._sleepy += 3;
    
    if (this._hungry >= 80){
        message.textContent = `your cyber pet ${petName} is hungry`
    }else if (this._hungry <=0){
        message.textContent = `your cyber pet ${petName} is full`
    }else{
        message.textContent = `your cyber pet ${petName} is eating. Hunger levels at ${this._hungry}`
    }   
}
    sleep() {
        this._sleepy -= 6;
        this._bored += 3;

    if (this._sleepy >= 80) {
        message.textContent = `your cyber pet ${petName} is tired.`
    }else if (this._sleepy <=0) {
        message.textContent = `your cyber pet ${petName} is fully rested.`
    }else{
        message.textContent = `your cyber pet ${petName} is sleeping. Sleepy levels at ${this._sleepy}`
    }
}
    play() {
        this._sleepy += 6;
        this._hungry += 3;
        this._bored -= 5;

    if (this._bored >= 80) {
        message.textContent = `your cyber pet ${petName}, is bored.`
    }else if (this._bored <= 0) {
        message.textContent = `your cyber pet ${petName}, is happy.`
    }else { 
        message.textContent = `your cyber pet ${petName} is playing. Boredom levels at ${this._bored}`

    }

    }
} 

class Cat extends CyberPet {
    constructor()
}








catPic.addEventListener("click", () =>{
    getName();
})

//Cat Event Listener//
const cat = new CyberPet("cat1");


feedBtn.addEventListener("click", () =>{
    cat.feed()
})

sleepBtn.addEventListener("click", () =>{
    cat.sleep()
})

playBtn.addEventListener("click", () =>{
    cat.play()
})





