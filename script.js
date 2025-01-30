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