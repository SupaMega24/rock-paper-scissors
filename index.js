
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let gamesPlayed = 0;

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playerChoice(choice) {
    const computer = computerChoice();
    if (choice === computer) {
        tieScore++;
        updateScores();
        alert("It's a tie!".toUpperCase());
    } else if ((choice === 'rock' && computer === 'scissors') ||
               (choice === 'paper' && computer === 'rock') ||
               (choice === 'scissors' && computer === 'paper')) {
        playerScore++;
        updateScores();
        alert(`You win! ${choice} beats ${computer}`.toUpperCase());
    } else {
        computerScore++;
        updateScores();
        alert(`Computer wins! ${computer} beats ${choice}`.toUpperCase());
    }
    gamesPlayed++;

    if (gamesPlayed === 11) {
        if (playerScore > computerScore) {
            alert("Player is the champion!".toUpperCase());
        } else if (playerScore < computerScore) {
            alert("Computer is the champion!".toUpperCase());
        } else {
            alert("It's a draw!".toUpperCase());
        }
        
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;
        gamesPlayed = 0;
    }
    updateScores();
}

function updateScores() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("tieScore").textContent = tieScore;
}













