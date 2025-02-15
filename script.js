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
  const resultBox = document.createElement("div");

  buttonSelectRock.textContent = "Choose Rock";
  buttonSelectPaper.textContent = "Choose Paper";
  buttonSelectScissors.textContent = "Choose Scissors";

  body.append(buttonSelectRock, buttonSelectPaper, buttonSelectScissors, resultBox);

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
      resultBox.textContent = `It\'s Tie! Play again! Human Score: ${humanScore}, Computer Score: ${computerScore}.`;
      isTie = true;
    }

    else if (humanChoice === 'rock') {
      if (computerChoice === 'paper') {
        resultBox.textContent = `You lost! Paper beats Rock. Human Score: ${humanScore}, Computer Score: ${computerScore}.`;
        computerScore++;
      }

      else {
        resultBox.textContent = `You won! Rock beats Scissors. Human Score: ${humanScore}, Computer Score: ${computerScore}.`;
        humanScore++;
      }
    }

    else if (humanChoice === 'paper') {
      if (computerChoice === 'rock') {
        cresultBox.textContent = `You won! Paper beats Rock. Human Score: ${humanScore}, Computer Score: ${computerScore}.`;
        humanScore++;
      }

      else {
        resultBox.textContent = `You lost! Scissors beats Paper. Human Score: ${humanScore}, Computer Score: ${computerScore}.`;
        computerScore++;
      }
    }

    else if (humanChoice === 'scissors') {
      if (computerChoice === 'rock') {
        resultBox.textContent = `You lost! Rock beats Scissors. Human Score: ${humanScore}, Computer Score: ${computerScore}.`;
        computerScore++;
      }

      else {
        resultBox.textContent = `You won! Scissors beats Paper. Human Score: ${humanScore}, Computer Score: ${computerScore}.`;
        humanScore++;
      }
    }

    else {
      resultBox.textContent = 'You passed the wrong argument! You can only use rock, paper and scissors!';
      isError = true;
    }

    if (humanScore > 4 || computerScore > 4) {
      const winner = (humanScore > computerScore) ? "You" : "Computer";
      resultBox.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}. Winner of the match: ${winner}`;
      humanScore = 0;
      computerScore = 0;
    }
  }
}

playGame();