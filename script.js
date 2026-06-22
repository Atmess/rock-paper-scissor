// 1. Get the buttons from the DOM
const startBtn = document.getElementById('startgame');
const guntingBtn = document.getElementById('gunting');
const kertasBtn = document.getElementById('kertas');
const batuBtn = document.getElementById('batu');
let humanChoice ;
let score = 0;



// 2. Create the function to show the buttons
function startGame() {
    
  guntingBtn.style.display = 'inline-block';
  kertasBtn.style.display = 'inline-block';
  batuBtn.style.display = 'inline-block';
  
  // Optionally hide the start button after clicking
  startBtn.style.display = 'none'; 
}

// 3. Attach the event listener
startBtn.addEventListener('click', startGame);

// Listen for the "Enter" key anywhere on the page
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    
    // 1. Show the start button again
    const startBtn = document.getElementById('startgame');
    startBtn.style.display = 'inline-block';
    
    // 2. Hide the game buttons (Gunting, Kertas, Batu)
    const gameButtons = document.querySelectorAll('.game-btn');
    gameButtons.forEach(btn => {
      btn.style.display = 'none';

      score = 0 ;
    });
    
    console.log("Game reset to start state.");
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
        console.log(score);
        return "draw";
    }

    const win ={
        rock : "scissors" ,
        paper : "rock" ,
        scissors : "paper" ,
    
    };

    if (win[humanChoice] === ComputerChoice) {
      score ++ ;
        console.log("player wins");
        console.log(score);
        return "win";
    } else {
        console.log("you lose");
        console.log(score);
        return "lose";}
        }
    

batuBtn.addEventListener("click", () => {
    humanChoice = "rock";
    const ComputerChoice = getComputerChoice();
    console.log("You chose: " + humanChoice);
console.log("Computer Chose : "+ComputerChoice);
     Playround(humanChoice ,ComputerChoice);
    ;
    // You can call your playRound(humanChoice, getComputerChoice()) here!
});

kertasBtn.addEventListener("click", () => {
    humanChoice = "paper";
      const ComputerChoice = getComputerChoice();
console.log("You chose: " + humanChoice);
console.log("Computer Chose :" + ComputerChoice);
     Playround(humanChoice ,ComputerChoice);
});

guntingBtn.addEventListener("click", () => {
    humanChoice = "scissors";
      const ComputerChoice = getComputerChoice();
console.log("You chose: " + humanChoice);
console.log("Computer Chose :" + ComputerChoice);
     Playround(humanChoice ,ComputerChoice);
})


