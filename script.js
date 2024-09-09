const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    console.log(computerChoice);
    document.getElementById('computer').innerHTML = computerChoice.toUpperCase();
    // Determine the winner and update the resultDisplay with the outcome
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = 'It\'s a draw!';
    } 
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.textContent = 'You win!';
    } else {
        resultDisplay.textContent = 'Computer wins!';
    }
  }