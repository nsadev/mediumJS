const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const uScore = document.getElementById('user-score');
const cScore = document.getElementById('comp-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result');

let userScore = 0;
let compScore = 0;

const getCompChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

const win = (user, computer) => { 
  const message = `<p>${user} beats ${computer}. You win!</p>`;
  result.innerHTML = message;

  userScore++;
  uScore.innerHTML = userScore;
}

const lose = (user, computer) => { 
  const message = `${computer} beats ${user}. Computer wins!`;
  result.innerHTML = message;

  compScore++;
  cScore.innerHTML = compScore;
}

const draw = () => { 
  const message = `<p>It's a draw.</p>`;
  result.innerHTML = message;
}

const game = (userChoice) => {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case 'PaperRock':
    case 'RockScissors':
    case 'ScissorsPaper':
      win(userChoice, compChoice);
      break;
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      lose(userChoice, compChoice);
      break;
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorsScissors':
      draw(userChoice, compChoice);
      break;
  }
};

const main = () => {
  rock.addEventListener('click', () => game('Rock'));
  paper.addEventListener('click', () => game('Paper'));
  scissors.addEventListener('click', () => game('Scissors'));
};

main();