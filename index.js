
let choices = ["rock", "paper", "scissors"];
let randomIndex = Math.floor(Math.random() * choices.length);
let randomChoice = choices[randomIndex];

function getComputerChoice(randomChoice) {
    computerChoice = randomChoice;
    return computerChoice;
}

console.log(getComputerChoice(randomChoice));
