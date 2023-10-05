
let choices = ["rock", "paper", "scissors"];
let randomIndex = Math.floor(Math.random() * choices.length);
let randomChoice = choices[randomIndex];

function getComputerChoice(randomChoice) {
    computerChoice = randomChoice;
    return computerChoice;
}

function getUserChoice() {
    userChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    return userChoice.toLowerCase();
}

console.log(getUserChoice());
console.log(getComputerChoice(randomChoice));



