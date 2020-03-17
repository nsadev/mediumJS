const cards = [
  {
    name: '1',
    img: 'img/1.png',
  },
  {
    name: '2',
    img: 'img/2.png',
  },
  {
    name: '3',
    img: 'img/3.png',
  },
  {
    name: '4',
    img: 'img/4.png',
  },
  {
    name: '5',
    img: 'img/5.png',
  },
  {
    name: '6',
    img: 'img/6.png',
  },
  {
    name: '7',
    img: 'img/7.png',
  },
  {
    name: '8',
    img: 'img/8.png',
  },
  {
    name: '9',
    img: 'img/9.png',
  },
  {
    name: '10',
    img: 'img/10.png',
  },
  {
    name: '11',
    img: 'img/11.png',
  },
  {
    name: '12',
    img: 'img/12.png',
  }
];

const cardArr = [...cards, ...cards]

let count = 0;
let moves = 0;
let min = 0;
let sec = 0;
let firstGuess = '';
let secondGuess = '';
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');
const game = document.getElementById('game');
const counter = document.getElementById('moves');
const reset = document.getElementById('reset');

counter.innerHTML = moves;
minutes.innerHTML = min;
seconds.innerHTML = sec;

const shuffle = arr => {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

const gamePlan = (arr) => {
  arr.map(item => {
    const { name, img } = item;
  
    const card = document.createElement('div');
    card.dataset.name = name;
    card.classList.add('card')
  
    const front = document.createElement('div');
    front.classList.add('front');
  
    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${img})`;
    
    game.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
}

gamePlan(shuffle(cardArr));


const match = () => {
  const sel = document.querySelectorAll('.selected');
  sel.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  })
};

const timer = () => {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
  }

  minutes.innerHTML = min;
  seconds.innerHTML = sec;
};

const startTimer = () => setInterval(timer, 1000);

game.addEventListener('click', event => {
  let clicked = event.target;
  let previous = null;
  counter.innerHTML = moves+=1;
  
  moves === 1 ? startTimer() : '';

  if (
    clicked.classList.contains('grid') ||
    clicked === previous ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, 600)
      }
      setTimeout(resetGuesses, 600)
    }
    previous = clicked;
  }
});

const resetAll = () => window.location.reload();

reset.addEventListener('click', resetAll);