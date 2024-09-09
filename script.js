const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
var winCount = 0;
var lossCount = 0;
var drawCount = 0;

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
        drawCount++;
    } 
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.textContent = 'You win!';
        winCount++;
    } else {
        resultDisplay.textContent = 'Computer wins!';
        lossCount++;
    }
    console.log(winCount);
    document.getElementById('win').innerHTML = "Win :- " + winCount;
    document.getElementById('draw').innerHTML = "Draw :- " + drawCount;
    document.getElementById('loss').innerHTML = "Loss :- " + lossCount;
  }