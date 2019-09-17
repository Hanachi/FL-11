let pScore =0;
let cScore =0;
const checkRound = () => {
  if(cScore === 3 || pScore === 3) {
    location.reload();
    alert('Battle finished');
  } 
}
const updateScore = () => {
  const playerScore = document.querySelector('.player-score p');
  const computerScore = document.querySelector('.computer-score p');
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
  checkRound();
}
const compareHands  = (playerChoice, computerChoice) => {
  const winner = document.querySelector('.winner');
  //Tie
  if(playerChoice === computerChoice) {
    winner.textContent = 'Tie';
    return;
  }
  updateScore();
  //Rock
  if(playerChoice === 'rock') {
    if(computerChoice === 'scissors') {
      winner.textContent = 'Player Wins';
      pScore++;
      updateScore();
      return;
    }else {
      winner.textContent = 'Computer Wins';
      cScore++;
      updateScore();
      return;
    }
  }
  //Paper
  if(playerChoice === 'paper') {
    if(computerChoice === 'scissors') {
      winner.textContent = 'Computer Wins';
      cScore++;
      updateScore();
      return;
    }else {
      winner.textContent = 'Player Wins';
      pScore++;
      updateScore();
      return;
    }
  }
  //Scissors
  if(playerChoice === 'scissors') {
    if(computerChoice === 'rock') {
      winner.textContent = 'Computer Wins';
      cScore++;
      updateScore();
      return;
    }else {
      winner.textContent = 'Player Wins';
      pScore++;
      updateScore();
      return;
    }
  }
  updateScore();
}
export default compareHands