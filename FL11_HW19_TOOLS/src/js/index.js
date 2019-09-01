import './helloGame';
const game = () => {
  let pScore =0;
  let cScore =0;

  const startGame =() => {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playButton.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  }
  
  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    //Computer options
    const computerOptions = ['rock', 'paper', 'scissors'];
    options.forEach((option) => {
      option.addEventListener('click', function() {
        //Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        compareHands(this.textContent, computerChoice);
        //Update img
        playerHand.src = `./img/${this.textContent}.png`
        computerHand.src = `./img/${computerChoice}.png`
      })
    });
  }
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
  startGame();
  playMatch();
}
game();
hello();

