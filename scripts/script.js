function computerPlay(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if(computerChoice === 1){
        return "rock";
    }
    else if (computerChoice === 2){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection){
    if((playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissor") || (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper")){
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

function validation (playerSelection){
    if(playerSelection != "scissor" && playerSelection != "rock" && playerSelection != "paper" ){
        alert("Wrong Input!");
        return true;
    }
    else{
        return false;
    }
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i = 0; i <= 4; i++){
        let playerSelection = prompt("Choose between Paper, Rock or Scissor");
        if(playerSelection === ""){
            alert("YOU MUST CHOOSE!");
            i--;
            continue;
        } 
        if(validation(playerSelection.toLowerCase())){
            i--;
            continue;
        }
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
     
        if(playRound(playerSelection, computerSelection) === "You Lose! "+capitilize(computerSelection)+" beats "+capitilize(playerSelection)+"."){
            computerPoints++;
            console.log("Computer : Player")
            console.log(computerPoints+ " : "+playerPoints);
        }
        else if (playRound(playerSelection, computerSelection) === "You win! "+capitilize(playerSelection)+" beats "+capitilize(computerSelection)+"."){
            playerPoints++;
            console.log("Computer : Player")
            console.log(computerPoints+ " : "+playerPoints);
        }
        else{
            console.log("Computer : Player")
            console.log(computerPoints+ " : "+playerPoints);
        }
    }
    if(playerPoints > computerPoints){
        console.log("YOU WIN THE GAME!!!!");
    }
    else if (playerPoints < computerPoints){
        console.log("YOU LOSE THE GAME:(");
    }
    else{
        console.log("YOU TIED THE GAME :|");
    }
}

game();
