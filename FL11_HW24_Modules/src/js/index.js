import  hello from './helloGame.js';
import compareHands from './compareHands.js';
const game = () => {
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

  
  startGame();
  playMatch();
}
game();
hello();

