function computerPlay(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if(computerChoice === 1){
        return "rock";
    }
    else if (computerChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if((playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")){
        return "You win! "+capitilize(playerSelection)+" beats "+capitilize(computerSelection)+".";
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "You Tied!";
    }
    else{
        return "You Lose! "+capitilize(computerSelection)+" beats "+capitilize(playerSelection)+".";
    }
}

function capitilize(text){
    return text.toLowerCase().replace(text[0], text[0].toUpperCase());
}


function game(){ 
let computerPoint = 0;
let playerPoint = 0; 
const container = document.querySelector('#container');
const score = document.createElement("p");
const winner = document.createElement("p");
const playerScore = document.createElement("span");
const computerScore = document.createElement("span");
score.classList.add('scoreBoard');   
score.appendChild(playerScore);
score.appendChild(computerScore);
container.appendChild(score);
container.appendChild(winner);
    const choice = document.querySelectorAll('button');
        choice.forEach((button) => {
            button.addEventListener('click', () => {
                const computerSelection = computerPlay();
                if(button.id === "paper"){
                    winner.textContent = playRound("paper", computerSelection);
                }
                else if(button.id === "rock"){
                    winner.textContent = playRound("rock", computerSelection);
                }
                else{
                    winner.textContent = playRound("scissors", computerSelection);
                }
            
                if(playRound(button.id, computerSelection) === "You Lose! "+capitilize(computerSelection)+" beats "+capitilize(button.id)+"."){
                        ++computerPoint;       
                        computerScore.textContent = " Computer: "+ computerPoint;
                        playerScore.textContent = "Player: " + playerPoint;
                    }
                    else if (playRound(button.id, computerSelection) === "You win! "+capitilize(button.id)+" beats "+capitilize(computerSelection)+"."){
                        ++playerPoint;                        
                        computerScore.textContent = " Computer: "+ computerPoint;
                        playerScore.textContent = "Player: " + playerPoint;

                    }
                    else{                       
                        computerScore.textContent = " Computer: "+ computerPoint;
                        playerScore.textContent = "Player: " + playerPoint;
                    }
                    
                if(computerPoint === 5){
                    computerPoint = 0;
                    playerPoint = 0;
                    computerScore.textContent = " Computer: "+ computerPoint;
                    playerScore.textContent = "Player: " + playerPoint;
                    winner.innerHTML = "COMPUTER WINS THE GAME!!!<br>REMATCH?";

                }
                else if(playerPoint === 5) {
                    computerPoint = 0;
                    playerPoint = 0;
                    computerScore.textContent = " Computer: "+ computerPoint;
                    playerScore.textContent = "Player: " + playerPoint;
                    winner.innerHTML = "PLAYER WINS THE GAME!!!<br>REMATCH?";
                }
                
            });
        });

}


game();





   
