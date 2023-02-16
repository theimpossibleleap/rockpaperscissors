// An array for all choices available to the computer and the player.

const gameChoices = ["rock", "paper", "scissors"];
let roundResults = [];
let tieGame = [];



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
        console.log("You tied, play again!");
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



// A function to count the number of wins after reach round.

function winCount() {
    let wins = 0;

    for (let i = 0; i < roundResults.length; ++i) {
        if (roundResults[i] == "Win!") {
            wins++;
        }
    }

    return wins;
}



// A function to count the number of losses after reach round.

function lossCount() {
    let losses = 0;

    for (let i = 0; i < roundResults.length; ++i) {
        if (roundResults[i] == "Lost!") {
            losses++;
        }
    }

    return losses;
}



// A function that is called to accept the player input, generate the computers choice, play a round, count the number of wins and losses each roud, and once you either win 3 or lose 3, it shows you the winner. The game then restarts.

function playGame(arg1, arg2) {
    playRound(arg1, arg2);
    console.log(roundResults);

    let wins = winCount();
    let losses = lossCount();

    console.log(wins);
    console.log(losses);
    
    if (wins === 3) {
        alert("You win the game!");
        alert("Click 'Close' to restart");
        location.reload();
    } else if (losses === 3) {
        alert("You lost the game!");
        alert("Click 'Close' to restart");
        location.reload();
    } else {
        playGame(getComputerChoice(), getPlayerChoice());
    }
}

playGame(getComputerChoice(), getPlayerChoice());