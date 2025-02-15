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

function playGame() {
  const body = document.querySelector("body");
  const buttonSelectRock = document.createElement("button");
  const buttonSelectPaper = document.createElement("button");
  const buttonSelectScissors = document.createElement("button");

  buttonSelectRock.textContent = "Choose Rock";
  buttonSelectPaper.textContent = "Choose Paper";
  buttonSelectScissors.textContent = "Choose Scissors";

  body.append(buttonSelectRock, buttonSelectPaper, buttonSelectScissors);

  let humanScore = 0,
    computerScore = 0,
    isTie = false;

  buttonSelectRock.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
  });
  buttonSelectPaper.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
  });
  buttonSelectScissors.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
  });

  function playRound(humanChoice, computerChoice) {
    isTie = false,
      humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log('It\'s Tie! Play again!');
      isTie = true;
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
      isError = true;
    }

    if (humanScore > 4 || computerScore > 4) {
      const winner = (humanScore > computerScore) ? "You" : "Computer";
      console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}. Winner of the match: ${winner}`);
      humanScore = 0;
      computerScore = 0;
    }
  }
}

playGame();