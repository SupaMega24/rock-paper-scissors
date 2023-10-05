


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
        return "It's a tie!";
    }

    else if (
        (userSelection === 'rock' && computerSelection === 'scissors') ||
        (userSelection === 'scissors' && computerSelection === 'paper') ||
        (userSelection === 'paper' && computerSelection === 'rock')
        ) {
            return 'You win!';            
        }

    else {            
        return 'Sorry, you lose.';        
    } 
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
  
    for(let i = 0; i < 5; i++) {
  
      const userSelection = getUserChoice();
      const computerSelection = getComputerChoice();
  
      const result = playRound(userSelection, computerSelection);
  
      if(result === 'You win!') {
        playerScore++;
      } else if(result === 'Sorry, you lose.') {
        computerScore++;
      }
  
    }
  
    console.log(`You: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
  
  }
  
  game();











