const gameChoices = [
    "rock",
    "paper",
    "scissors"
];

let roundResults = [];

let compResult = document.getElementById('compresult');
let playResult = document.getElementById('playresult');

compResult.innerText = 0;
playResult.innerText = 0;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissBtn = document.getElementById('scissors');

// A function to count the number of wins after reach round.

function winCount() {
    let wins = 0;

    for (let i = 0; i < roundResults.length; ++i) {
        if (roundResults[i] == "win") {
            wins++;
        }
    }

    return wins;
}



// A function to count the number of losses after reach round.

function lossCount() {
    let losses = 0;

    for (let i = 0; i < roundResults.length; ++i) {
        if (roundResults[i] == "loss") {
            losses++;
        }
    }

    return losses;
}


const playerChoiceArray = [rockBtn, paperBtn, scissBtn];

playerChoiceArray.forEach(function(choice) {
    choice.addEventListener('click', function() {
        function getComputerChoice() {
            let randomChoice = Math.floor(Math.random() * gameChoices.length);
            return gameChoices[randomChoice];
        }

        function playRound(compPlay, playerPlay) {

            const winString = "You won this round! ৻(  •̀ ᗜ •́  ৻)";
            const loseString = "You lost this round.. ( • ᴖ • ｡)";
            const tieString = "You tied this round. ¯\\_(ツ)_/¯";

            console.log(`You picked: ${playerPlay}
            The computer picked: ${compPlay}`);

            if (compPlay == playerPlay) {
                console.log(tieString)
                return roundResults.unshift("tie");
            } 

            if (compPlay == "rock" && playerPlay == "scissors") {
                console.log(loseString)
                return roundResults.unshift("loss");
            }

            if (compPlay == "rock" && playerPlay == "paper") {
                console.log(winString)
                    return roundResults.unshift("win");
            }

            if (compPlay == "paper" && playerPlay == "rock") {
                console.log(loseString)
                return roundResults.unshift("loss");
            }

            if (compPlay == "paper" && playerPlay == "scissors") {
                console.log(winString)
                    return roundResults.unshift("win");
            }

            if (compPlay == "scissors" && playerPlay == "paper") {
                console.log(loseString)
                return roundResults.unshift("loss");
            }

            if (compPlay == "scissors" && playerPlay == "rock") {
                console.log(winString)
                    return roundResults.unshift("win");
            }
            }

        playRound(getComputerChoice(), this.id);

        console.log(roundResults);

        compResult.innerText = lossCount();
        playResult.innerText = winCount();

        });
});