const gameChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomChoice];
}

