let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  if (computerChoice === 1) {
    return 'rock';
  }
  else if (computerChoice === 2) {
    return 'paper';
  }
  else {
    return 'scissors'
  }
}

function getHumanChoice() {
  let humanChoice = prompt('What will you pick?', 'rock');

  if (humanChoice === 'rock') {
    return 'rock';
  }
  else if (humanChoice === 'paper') {
    return 'paper';
  }
  else if (humanChoice === 'scissors') {
    return 'scissors';
  }
  else {
    alert('Enter rock, paper or scissors!');
    return 'error';
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log('It\'s Tie! Play again!');
  }

  else if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('You lost! Paper beats Rock.');
      computerScore++;
    }

    else {
      console.log('You won! Rock beats Scissors.');
      humanScore++;
    }
  }

  else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log('You won! Paper beats Rock.');
      humanScore++;
    }

    else {
      console.log('You lost! Scissors beats Paper.');
      computerScore++;
    }
  }

  else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log('You lost! Rock beats Scissors.');
      computerScore++;
    }

    else {
      console.log('You won! Scissors beats Paper.');
      humanScore++;
    }
  }

  else {
    console.log('You passed the wrong argument! You can only use rock, paper and scissors!');
  }
}