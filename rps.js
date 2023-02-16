// An array for all choices available to the computer and the player.
const gameChoices = ["rock", "paper", "scissors"];

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

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

console.log(computerSelection);
console.log(playerSelection);

function playRound(compSelect, playSelect) {
    console.log(compSelect, playSelect);
}

playRound(computerSelection, playerSelection);