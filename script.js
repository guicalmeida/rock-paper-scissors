function computerPlay() {
    let options = ["0", "rock", "paper", "scissors"];
    let mix = Math.floor(Math.random() * 3 + 1);
    return options[mix];
}



let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    const rockXScissor = "Rock Beats Scissor.";
    const rockXRock = "Both Played Rock.";
    const paperXRock = "Paper Beats Rock.";
    const paperXpaper = "Both Played Paper.";
    const scissorXPaper = "Scissor Beats Paper.";
    const scissorXScissor = "Both Played Scissor.";
    const win = "You Won! ";
    const loss = "You Lose! ";
    const tie = "It's a Tie! ";

        if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore +=1;
            return `you played ${playerSelection} and the A.I. played ${computerPlay()} \n` + win + paperXRock;
       
        } else if (playerSelection == "paper" && computerSelection == "scissor") {
            computerScore += 1;
            return `you played ${playerSelection} and the A.I. played ${computerPlay()} \n` + loss + scissorXPaper;
        
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return `you played ${playerSelection} and the A.I. played ${computerPlay()} \n` + tie + paperXpaper;
       
        } else if (playerSelection == "rock" && computerSelection == "scissor") {
            playerScore +=1;
            return `you played ${playerSelection} and the A.I. played ${computerPlay()} \n` + win + rockXScissor;
        
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore += 1;
            return `you played ${playerSelection} and the A.I. played ${computerPlay()} \n` + loss + paperXRock;
        
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            return `you played ${playerSelection} and the A.I. played ${computerPlay()} \n` + tie + rockXRock;
        
        } else if (playerSelection == "scissors" && computerSelection == "scissor") {
            return `you played ${playerSelection} and the A.I. played ${computerPlay()} \n` + tie + scissorXScissor;

        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore +=1;
            return `you played ${playerSelection} and the A.I. played ${computerPlay()} \n` + win + scissorXPaper;

        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore += 1;
            return `you played ${playerSelection} and the A.I. played ${computerPlay()} \n` + loss + rockXScissor;
        }
    
}


while (playerScore !== 5 && computerScore !== 5) {
    console.log(playRound("rock", computerPlay()));
    console.log("your score: " + playerScore);
    console.log("A.I. score: " + computerScore);
}
