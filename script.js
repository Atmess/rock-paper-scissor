const getdate= (() => {
                const yearstime = document.getElementById('year');
                const monthtime = document.getElementById('month');
                const daytime = document.getElementById('day');
                const datetime = document.getElementById('date-time');

                yearstime.textContent = new Date().getFullYear(); 
                monthtime.textContent = new Date().toLocaleString('default', { month: 'short' }) ;
                daytime.textContent = new Date().toLocaleString('default', { weekday: 'short' }) ;
                datetime.textContent = new Date().getDate();
})();
const sidebar = (() => {
                const toggleBtn = document.getElementById('sidebarbtn');
                const sidebar = document.getElementById('sidebar');

                toggleBtn.addEventListener('click', function() {
                // Toggle the 'open' class on the sidebar
                sidebar.classList.toggle('open');
                // Listen for a click on the button
                });   

})();
// 1. Get the buttons from the DOM
const rockscissorgame= (()=>{
const windows = document.getElementById('window-body')
const startBtn = document.getElementById('startgame');
const winningtext = document.getElementById('textscoringpage');



let winningscore=0;

const win ={
        rock : "scissors" ,
        paper : "rock" ,
        scissors : "paper" ,};

function createplayer() {
  return {
    score: 0,
    choice: "",
    scoredisplay:0,
    choicedisplay:""
  };
}

const player = createplayer();
const com = createplayer();    
function startGame() {  
  winningtext.innerHTML="";
  startBtn.classList.toggle('hidden');
  const displaychoice = document.createElement('div');
  const playerchoice = document.createElement('p');
  const comchoiche = document.createElement('p');
  const window = document.getElementById('window-body')
    for (let i=1 ; i<'4' ; i++){
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
    score = 0;
    comscore = 0;
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
      player.score ++ ;
        console.log("player wins");
    } else {
      com.score ++;
        console.log("you lose");
      }
      console.log(player.score ,com.score);
      //playerchoice.innerText=humanChoice.choice;
      //comchoice.innerText=ComputerChoice.choice;
      displayscore();
      checkWinCondition();
    }
function checkWinCondition() {
  // Instead of checking === 3 or === 5, it checks the variable
  if (player.score === winningscore) {
    console.log(`You win the match!`);
    winningtext.innerText=("You win the match!");
    resetGame();

  } else if (com.score === winningscore) {
    console.log(`Computer wins the match!`);
    winningtext.innerText=("you lost the match!");
    resetGame();
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

  winningtext.innerText=("");
  player.score = 0;
  com.score = 0;
}

function resetGame() {
startBtn.classList.toggle('hidden');

  player.score = 0;
  com.score = 0;
  winningscore = 9;
  
  resetdisplay();
  displayscore();
 const gamebtn = document.querySelectorAll('.game-key');
 gamebtn.forEach(button =>{button.remove();
 });
}
function displayscore(){
  //playerscoredisplay.innerText = player.score ;
  //comscoredisplay.innerText = com.score ;
}
function resetdisplay(){
  //playerchoice.innerText="";
  //comchoice.innerText="";
}
})();


