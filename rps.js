// An array for all choices available to the computer and the player.
const gameChoices = ["rock", "paper", "scissors"];
const roundResults = [];
const roundWin = [];
const roundLoss = [];

// A function to randomly assign a value from the array of choices to the computer selection.
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomChoice];
}

// A function to get the player choice from a prompt, validate that it's either Rock, Paper, or Scissors, and return the value.
function getPlayerChoice() {
    let playerChoice = prompt(
        "Please make a choice: Rock, Paper, or Scissors."
    ).toLowerCase();

    return !gameChoices.includes(playerChoice) ? getPlayerChoice(): playerChoice;
}

// A function to play a round and return the result to an array (win, lose, or tie).
function playRound(compPlay, playerPlay) {

    console.log("You picked: " + compPlay);
    console.log("The computer picked: " + playerPlay);
    
    if (compPlay == playerPlay) {
        return roundResults.push("Tie!");
    } else if (compPlay == "rock") {
        if (playerPlay == "scissors") {
            return roundResults.push("Lost!");
        } else if (playerPlay == "paper") {
            return roundResults.push("Win!");
        }
    } else if (compPlay == "scissors") {
        if (playerPlay == "paper") {
            return roundResults.push("Lost!");
        } else if (playerPlay == "rock") {
            return roundResults.push("Win!");
        }
    } else if (compPlay == "paper") {
        if (playerPlay == "rock") {
            return roundResults.push("Lost!");
        } else if (playerPlay == "scissors") {
            return roundResults.push("Win!");
        }
    }
}

function winCount() {
    for (i = 0; i < 4; i++) {
        if (roundResults[i] == "Win!") {
            return roundWin.push[i];
        } else if (roundResults[i] == "Lost!") {
            return roundLoss.push[i];
        }
    }
}

function playGame(arg1, arg2) {
    playRound(arg1, arg2);
    console.log(roundResults);
    winCount();
    console.log(roundWin);
    console.log(roundLoss);
    
    if (roundWin.length < 4 || roundLoss.length < 4) {
        return playGame(getComputerChoice(), getPlayerChoice());
    } else if (roundWin.length == 3) {
        console.log("You win the game!");
    } else if (roundLoss.length == 3) {
        console.log("You lose the game!");
    }

}

playGame(getComputerChoice(), getPlayerChoice());