function computerPlay() {
    let randomPlay = Math.floor(Math.random()*3);
    switch (randomPlay) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        ++computerScore;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        ++playerScore;
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        ++playerScore;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        ++computerScore;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        ++computerScore;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        ++playerScore;
        return "You Win! Scissors beats Paper";
    } else {
        return "It is a tie!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please, make your choice:");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        if (!(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors")) {
            playerSelection = prompt("You have to choose between Rock, Paper or Scissors");
            if (!(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors")) {
                console.log("You didn't choose a properly value so \"Rock\" was assigned to you");
                playerSelection = "Rock";
            }
        }

        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score is: ${playerScore}`);
        console.log(`Computer score is: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game");
    } else {
        console.log("It is a tie!");
    }
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);