


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];
    return randomChoice;
}

function getUserChoice() {
    userChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    return userChoice.toLowerCase();
}

function playRound(userSelection, computerSelection) {   
    
    if (userSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else if (
        (userSelection === 'rock' && computerSelection === 'scissors') ||
        (userSelection === 'scissors' && computerSelection === 'paper') ||
        (userSelection === 'paper' && computerSelection === 'rock')
        ) {
            console.log('You win!');
        }
    else {
        console.log('Sorry, you lose.');
    }    
    
}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();
console.log(playRound(userSelection, computerSelection));




