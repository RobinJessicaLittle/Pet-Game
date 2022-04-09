
const mainContainerIndex = document.getElementById('mainContainerIndex');
const feedBtn = document.getElementById('feedBtn');
const sleepBtn = document.getElementById('sleepBtn');
const playBtn = document.getElementById('playBtn');
const pokeBtn = document.getElementById('pokeBtn');
const buttonContainer = document.getElementById('buttonContainer');

const gameTitle = document.getElementById ('gameTitle');
const game = document.getElementById ('game');
const message = document.getElementById('message');


const catPic = document.getElementById('catPic');
const catContainer = document.getElementById('catContainer');
const slothContainer = document.getElementById('slothContainer');
const alienContainer = document.getElementById('alienContainer');
let insertName = document.getElementById('insertName');
let petName = document.getElementsByClassName('window');

const restart = document.getElementById('restart');



//Show||Hide Content Functions//
const hide = (i)=>{
	i.style.display = "none";
}

const show = (i)=>{
	i.style.display = "block";
}

//Hide//
hide(buttonContainer);
hide(gameTitle);
hide(catContainer);
hide(slothContainer);
hide(alienContainer);
hide(restart);


// function that asks user for name of pet//
const getName = () => {
    petName = prompt("Aw, great choice! Now enter a name for your pet.");
    while (petName.length === 0) {
       alert("Please enter a name for your pet.");
       petName = prompt("Your pet name:");
    }
 };





//Main Buttons//

catPic.addEventListener("click", () =>{
    
    hide(mainContainerIndex);
    getName();
    pet = new Cat (petName);
    // defined new pet as cat^

    show(catContainer);
    show(buttonContainer);
    show(gameTitle);
    show(restart);
    
    audioCat.src = "sounds/Cat.mp3";

})

slothPic.addEventListener("click", () =>{
    hide(mainContainerIndex);
    getName();
    pet = new Sloth (petName);

    show(slothContainer);
    show(buttonContainer);
    show(gameTitle);
    show(restart);

    audioSloth.src ="sounds/Sloth.mov"

})



alienPic.addEventListener("click", (event) => {
    hide(mainContainerIndex);
    getName();
    pet = new Alien (petName);

    show(alienContainer);
    show(buttonContainer);
    show(gameTitle);
    show(restart);

    audioAlien.src ="sounds/Alien1.mp3"
});







//Event Listener//
// const cat = new CyberPet("cat1");


feedBtn.addEventListener("click", () =>{
    pet.feed()
})

sleepBtn.addEventListener("click", () =>{
    pet.sleep()
})

playBtn.addEventListener("click", () =>{
    pet.play()
})
pokeBtn.addEventListener("click",() =>{
    pet.poke()
})
// defined pet as new cat and changed from cat.feed() cat.sleep() and cat.play() to cat.sleep() to pet.feed()


//Event Listener Sound//





//re-start button//

restart.addEventListener("click", () => {
    window.location.reload()
})
