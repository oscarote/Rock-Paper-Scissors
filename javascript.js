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
        ++computerPoints;
        upperMessage.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        ++playerPoints;
        upperMessage.textContent = "You Win! Rock beats Scissors"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        ++playerPoints;
        upperMessage.textContent = "You Win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        ++computerPoints;
        upperMessage.textContent = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        ++computerPoints;
        upperMessage.textContent = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        ++playerPoints;
        upperMessage.textContent = "You Win! Scissors beats Paper";
    } else {
        upperMessage.textContent = "It is a tie!";
    }
}

// This part was made to play the game from the console
// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Please, make your choice:");
//         playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
//         if (!(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors")) {
//             playerSelection = prompt("You have to choose between Rock, Paper or Scissors");
//             if (!(playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors")) {
//                 console.log("You didn't choose a properly value so \"Rock\" was assigned to you");
//                 playerSelection = "Rock";
//             }
//         }

//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(`Your score is: ${playerPoints}`);
//         console.log(`Computer score is: ${computerPoints}`);
//     }

//     if (playerPoints > computerPoints) {
//         console.log("You won the game!");
//     } else if (playerPoints < computerPoints) {
//         console.log("You lost the game");
//     } else {
//         console.log("It is a tie!");
//     }
// }

let playerPoints = parseInt(0);
let computerPoints = parseInt(0);

// UI JS
const rockbtn = document.getElementById("rockbtn");
const paperbtn = document.getElementById("paperbtn");
const scissorsbtn = document.getElementById("scissorsbtn");
const playerIcon = document.getElementById("playerIcon");
const machineIcon = document.getElementById("machineIcon");
const playerScore = document.getElementById("playerScore");
const machineScore = document.getElementById("machineScore");
const upperMessage = document.querySelector(".round");
const finalMessage = document.querySelector(".finalMessage");
const playAgain = document.querySelector(".playagain");
const playbtn = document.getElementById("playbtn");

rockbtn.addEventListener("click", () => uiStart("Rock"));
paperbtn.addEventListener("click", () => uiStart("Paper"));
scissorsbtn.addEventListener("click", () => uiStart("Scissors"));
playbtn.addEventListener("click", () => resetGame());

function uiStart(playerSelection) {
    if (computerPoints === 5 || playerPoints === 5) return;

    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateIcons(playerSelection, computerSelection);
    updateScore()

    if (computerPoints === 5) {
        finalMessage.textContent = "You lost the game! Play again?";
        showDiv();
    } else if (playerPoints === 5) {
        finalMessage.textContent = "You won the game! Play again?";
        playAgain.classList.toggle("show");
        showDiv();
    }
}

function updateIcons(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            playerIcon.textContent = "✊";
            break;
        case "Paper":
            playerIcon.textContent = "✋";
            break;
        case "Scissors":
            playerIcon.textContent = "✌";
            break;
    }

    switch (computerSelection) {
        case "Rock":
            machineIcon.textContent = "✊";
            break;
        case "Paper":
            machineIcon.textContent = "✋";
            break;
        case "Scissors":
            machineIcon.textContent = "✌";
            break;
    }
}

function updateScore() {
    playerScore.textContent = `Player: ${playerPoints}`;
    machineScore.textContent = `Machine: ${computerPoints}`;
}

function showDiv() {
    if (playAgain.style.display === "none") {
        playAgain.style.display = "block";
    } else {
        playAgain.style.display = "none";
    }
}

function resetGame() {
    playerPoints = 0;
    computerPoints = 0;
    updateScore();
    playerIcon.textContent = "?";
    machineIcon.textContent = "?";
    showDiv();
}