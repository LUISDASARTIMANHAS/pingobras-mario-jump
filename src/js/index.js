const marioJump = new Audio('https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/jump%20super%20mario.mp3?v=1662590435349');
const marioGameover= new Audio("https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/Super Mario Bros. - Game Over Sound Effect.mp3?v=1662591735840");
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const pipePlant = document.querySelector(".pipe-plant");
const gameover = document.querySelector(".game-over");
const cubo = document.querySelector(".cubo");
const gameBoardLost = document.querySelector(".game-board");
const loopPerdeu = setInterval(perdeu, 10)
var Reload;
var gameStatus;
var timeGame;
let placarLocal = 0;
const labelPlacar = document.getElementById("placar");
const LabelHightScore = document.getElementById("HightScore");
const LabelHSG = document.getElementById("HightScoreGlobal")
let HightScore = localStorage.getItem("Mario Jump HightScore");
let direction = "up";
document.addEventListener('keydown', update); // quando um evento acontece, detecta e chama uma função
document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

function update(event) {
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}



function jump() {
  if(gameStatus == "on"){
    
  mario.classList.add("jump");
  marioJump.play();
  
  setTimeout(() => {
  mario.classList.remove("jump");
  },500);
 
  }
}


function perdeu() {
  const pipePosition =  pipe.offsetLeft;
  const pipePlantPosition =  pipePlant.offsetLeft;
  const cuboPosition =  cubo.offsetLeft;
  const marioPosition =  +window.getComputedStyle(mario).bottom.replace("px", "");
  
  if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80 || pipePlantPosition <= 120 && pipePlantPosition > 0 && marioPosition <= 90){
    
    pipe.style.animation = "none"
    pipe.style.left = `${pipePosition}px`
    pipePlant.style.animation = "none"
    pipePlant.style.left = `${pipePlantPosition}px`
    mario.style.animation = "none"
    mario.style.bottom = `${marioPosition}px`
    cubo.style.animation = "none"
    cubo.style.left = `${cuboPosition}px`
    mario.src = "https://preview.redd.it/dz7i4gsisu721.png?auto=webp&s=dfa780e2356ebec9b84c7537a852fc1732e50aba"
    mario.style.width = "80px"
    mario.style.height = "80px"
    mario.style.marginLeft = "50px"
    gameover.classList.add("animation-game-over");
    gameover.style.display = "block";
    marioGameover.play();
    
    clearInterval(timeGame)
    clearInterval(loopPerdeu)
    setTimeout(Reload,9000)
   
  }else{
    if(pipePosition < "-17" && marioPosition >= 80||pipePlantPosition < "-17" && marioPosition >= 90){
    placarLocal = placarLocal + 1;
    labelPlacar.innerHTML = placarLocal;
    if(placarLocal > 45){
    pipe.style.display = "none"
    pipePlant.style.display = "block"
    gameBoardLost.style.backgroundImage = "url(https://i.pinimg.com/originals/a5/5c/20/a55c2095383926772effb542eb1c1451.gif)"
    console.log("Nova Fase!")}
      
    } 
  }
  
    


  
  LabelHightScore.innerHTML = HightScore
  LabelHSG.innerHTML = HightScore
  if(placarLocal >= HightScore){
  localStorage.setItem("Mario Jump HightScore", placarLocal);}  
  
  
}






