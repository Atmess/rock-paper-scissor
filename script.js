// 1. Get the buttons from the DOM
const startBtn = document.getElementById('startgame');
const guntingBtn = document.getElementById('gunting');
const kertasBtn = document.getElementById('kertas');
const batuBtn = document.getElementById('batu');
const threebtn = document.getElementById('bestofthree');
const fivebtn = document.getElementById('bestoffive');
const playerscoredisplay = document.getElementById('yourScoreTextID');
const comscoredisplay = document.getElementById('computerScoreTextID');
const winningtext = document.getElementById('textscoringpage');
const playerchoice = document.getElementById('yourchoice');
const comchoice = document.getElementById('comchoice');

let humanChoice ;
let score = 0;
let comscore=0;
let winningscore=0;

playerscoredisplay.innerText=0;
comscoredisplay.innerText=0;
comchoice.innerText='';
playerchoice.innerText='';
// 2. Create the function to show the buttons
function startGame() {
    

  threebtn.style.display = 'inline-block';
  fivebtn.style.display = 'inline-block';
  
  // Optionally hide the start button after clicking
  startBtn.style.display = 'none';

}

// 3. Attach the event listener
startBtn.addEventListener('click', startGame);

// Listen for the "Enter" key anywhere on the page
// FIXED: Listen for the "Enter" key to completely wipe the game back to the absolute start
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {

    event.preventDefault();
    
    // 1. Show the start button again
    startBtn.style.display = 'inline-block';
    
    // 2. Hide the game buttons (Gunting, Kertas, Batu)
    const gameButtons = document.querySelectorAll('.game-btn');
    gameButtons.forEach(btn => {
      btn.style.display = 'none';
    });

    // 3. Hide the mode buttons (they should only show AFTER clicking Start Game)
    threebtn.style.display = 'none';
    fivebtn.style.display = 'none';
    
    // 4. Clear the text alert
    winningtext.innerText = "";
   
    // 5. Hard reset all data back to clean slate
    score = 0;
    comscore = 0;
    winningscore = 9 ; // Strictly lowercase
    
     // Force HTML scoreboard back to 0 - 0
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

// Example usage:

function Playround( humanChoice , ComputerChoice ){

    if (humanChoice === ComputerChoice){
        console.log("draw");

    }

    const win ={
        rock : "scissors" ,
        paper : "rock" ,
        scissors : "paper" ,
    
    };

    if (win[humanChoice] === ComputerChoice) {
      score ++ ;
        console.log("player wins");
      
      ;
    } else {
      comscore++;
        console.log("you lose");
      }
        
      console.log(score ,comscore);
            playerchoice.innerText=humanChoice;
      comchoice.innerText=ComputerChoice;
      displayscore();
      checkWinCondition();


    }
    

batuBtn.addEventListener("click", () => {
    humanChoice = "rock";
    const ComputerChoice = getComputerChoice();
   console.log("You chose: " + humanChoice + " | Computer chose: " + ComputerChoice);
     Playround(humanChoice ,ComputerChoice);
    ;
    // You can call your playRound(humanChoice, getComputerChoice()) here!
});

kertasBtn.addEventListener("click", () => {
    humanChoice = "paper";
      const ComputerChoice = getComputerChoice();
console.log("You chose: " + humanChoice + " | Computer chose: " + ComputerChoice);
     Playround(humanChoice ,ComputerChoice);
});

guntingBtn.addEventListener("click", () => {
    humanChoice = "scissors";
      const ComputerChoice = getComputerChoice();
console.log("You chose: " + humanChoice + " | Computer chose: " + ComputerChoice);
     Playround(humanChoice ,ComputerChoice);
     
})


function bestofthree() {

  winningscore = 2;
  prepareGame();
}

threebtn.addEventListener('click', bestofthree);

function bestoffive() {

  winningscore= 3 ;
prepareGame();

}

fivebtn.addEventListener('click', bestoffive);

function checkWinCondition() {
  // Instead of checking === 3 or === 5, it checks the variable
  if (score === winningscore) {
    console.log(`You win the match!`);
    winningtext.innerText=("You win the match!");
    resetGame();

  } else if (comscore === winningscore) {
    console.log(`Computer wins the match!`);
    winningtext.innerText=("you lost the match!");
    resetGame();
  }
}

// Both buttons use this exact same setup function now!
function prepareGame() {
  guntingBtn.style.display = 'inline-block';
  kertasBtn.style.display = 'inline-block';
  batuBtn.style.display = 'inline-block';

  threebtn.style.display = 'none';
  fivebtn.style.display = 'none'; 
  winningtext.innerText=("");

  score = 0;
  comscore = 0;
}

function resetGame() {
  // 1. Hide the weapon buttons again
  guntingBtn.style.display = 'none';
  kertasBtn.style.display = 'none';
  batuBtn.style.display = 'none';

  // 2. Bring back the Mode buttons so they can play again
  threebtn.style.display = 'inline-block';
  fivebtn.style.display = 'inline-block';

  // 3. Wipe the memory clean
  score = 0;
  comscore = 0;
  winningscore = 0;
  
  resetdisplay();
  displayscore();
 
}
function displayscore(){
  playerscoredisplay.innerText = score ;
  comscoredisplay.innerText = comscore ;
}
function resetdisplay(){
  playerchoice.innerText="";
  comchoice.innerText="";
}
