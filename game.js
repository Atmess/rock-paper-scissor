export function initGame (){


const windows = document.getElementById('window-body')
const startBtn = document.getElementById('startgame');
const winningtext = document.getElementById('textscoringpage');
const displaychoice = document.createElement('div');
const playerchoice = document.createElement('div');
const comchoiche = document.createElement('div');
const displayscor= document.createElement('div');
const playerscore = document.createElement('div');
const comscore = document.createElement('div');
const display= document.getElementById('display');




display.appendChild(displaychoice);
display.appendChild(displayscor);
displaychoice.appendChild(playerchoice);
displaychoice.appendChild(comchoiche);
displayscor.appendChild(playerscore);
displayscor.appendChild(comscore);

let winningscore=0;
let gameover = false;

const win ={
        rock : "scissors" ,
        paper : "rock" ,
        scissors : "paper" ,};

class createplayer {
  consturcor(name) {
    this.name = name;
    this.score = 0;
    this.choice= "";
  };
  choice(newchoice){
    this.choice= newchoice;
  };
  winround(score){
    this.score++;
    console.log(`${this.name} won the round! Total score: ${this.score}`);
  };
  reset() {
    this.score = 0;
    this.choice = "";
  };
}

const player = new createplayer('player');
const com = new createplayer('com');    
function startGame() {  
  startBtn.classList.toggle('hidden');
  const window = document.getElementById('window-body')
     for (let i = 1; i <= 3; i++){
      const numround= document.createElement('button');
      numround.classList.add('playround');
      numround.dataset.index=i;
      numround.textContent=i+'win first';
      numround.addEventListener('click',(e)=>{
        const cellIndex = parseInt(e.target.getAttribute('data-index'));
        const allroundbutton = document.querySelectorAll('.playround');

        allroundbutton.forEach(button=>{
          button.remove();
        })
        winningscore=cellIndex;
        
        prepareGame();
      })
      windows.appendChild(numround);
    };
      
}
startBtn.addEventListener('click', startGame);
windows.addEventListener('click',(event)=>{
      if (gameover) return;
    if(event.target.classList.contains('game-key')){
       player.choice = event.target.dataset.action;
       com.choice = getComputerChoice();
      Playround( player, com);
      console.log(`com chose: ${com.choice}`);
      console.log(`Player chose: ${player.choice}`);
    }
  })

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {

        event.preventDefault();
    
    // 1. Show the start button again
       startBtn.classList.toggle('hidden');
    
    // 2. Hide the game buttons (Gunting, Kertas, Batu)
        const allroundbutton = document.querySelectorAll('.playround');

        allroundbutton.forEach(button=>{
          button.remove();
        });

        const gamebtn = document.querySelectorAll('.game-key');
        gamebtn.forEach(button =>{button.remove();

        });
    winningtext.innerText = "";
    player.reset()=0;
    com.reset() = 0;
    winningscore = 9 ; 
    console.log("Game reset to start state.");
     displayscore();
  }
  
});

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function Playround( humanChoice , ComputerChoice ){
  if (humanChoice.choice === ComputerChoice.choice){
        console.log("draw");
    } else if (win[humanChoice.choice] === ComputerChoice.choice) {
      player.winround() ;
        console.log("player wins");
    } else {
      com.winround();
        console.log("you lose");
      }
      console.log(player.score ,com.score);
      playerchoice.innerText = `You chose: ${humanChoice.choice}`;
      comchoiche.innerText = `Computer chose: ${ComputerChoice.choice}`;
      displayscore();
      checkWinCondition();
    }
function checkWinCondition() {

  // Instead of checking === 3 or === 5, it checks the variable
  if (player.score === winningscore) {
    console.log(`You win the match!`);
    winningtext.innerText=("You win the match!");
    setTimeout(resetGame, 2000);
    gameover = true ; 
  } else if (com.score === winningscore) {
    console.log(`Computer wins the match!`);
    winningtext.innerText=("you lost the match!");
    setTimeout(resetGame, 2000);
  gameover = true ; 
  }
}
function prepareGame() {
  const choice=['scissors' , 'paper' , 'rock']

  choice.forEach(choice=>{
    const btn= document.createElement('button');
    btn.textContent=choice;
    btn.classList.add('game-key');
    btn.dataset.action=choice;
    windows.appendChild(btn);
  })
  winningtext.innerText = "";
  player.reset();
  com.reset();
  displayscore();
}

function resetGame() {
startBtn.classList.toggle('hidden');

  player.reset();
  com.reset();
  winningscore = 9;
   gameover = false;
  resetdisplay();
  displayscore();
 const gamebtn = document.querySelectorAll('.game-key');
 gamebtn.forEach(button =>{button.remove();
 });
}
function displayscore(){
  playerscore.innerText = `Player Score: ${player.score}`;
  comscore.innerText = `Computer Score: ${com.score}`;
}
function resetdisplay(){
 playerchoice.innerText = "";
  comchoiche.innerText = "";
  playerscore.innerText = "";
  comscore.innerText = "";
}

}