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
            return `you played ${playerSelection} and the A.I. played ${computerSelection} \n` + win + paperXRock;
       
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore += 1;
            return `you played ${playerSelection} and the A.I. played ${computerSelection} \n` + loss + scissorXPaper;
        
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return `you played ${playerSelection} and the A.I. played ${computerSelection} \n` + tie + paperXpaper;
       
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore +=1;
            return `you played ${playerSelection} and the A.I. played ${computerSelection} \n` + win + rockXScissor;
        
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore += 1;
            return `you played ${playerSelection} and the A.I. played ${computerSelection} \n` + loss + paperXRock;
        
        } else if (playerSelection == "rock" && computerSelection == "rock") {
            return `you played ${playerSelection} and the A.I. played ${computerSelection} \n` + tie + rockXRock;
        
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            return `you played ${playerSelection} and the A.I. played ${computerSelection} \n` + tie + scissorXScissor;

        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore +=1;
            return `you played ${playerSelection} and the A.I. played ${computerSelection} \n` + win + scissorXPaper;

        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore += 1;
            return `you played ${playerSelection} and the A.I. played ${computerSelection} \n` + loss + rockXScissor;
        }
    
}


while (playerScore !== 5 && computerScore !== 5) {
    console.log(playRound("paper", computerPlay()));
    console.log("your score: " + playerScore);
    console.log("A.I. score: " + computerScore);
    if (playerScore == 5) {
        console.log("%cYou Win the Game!", "color:red; font-size: 30px");
    }
    else if (computerScore == 5) {
        console.log("%cYou Lost the Game!", "color:blue; font-size: 30px");
    }
}
