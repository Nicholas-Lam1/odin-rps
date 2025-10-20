const scores = {
  humanScore: 0,
  computerScore: 0,
  tieScore: 0
};

function getComputerChoice() {
  let rand = Math.random() * 3
  switch(Math.floor(rand)) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
  }
}

function playRound(e) {
  const humanSelection = e.target.id;
  const computerSelection = getComputerChoice();

  
  if (humanSelection === computerSelection) {
    ++scores.tieScore
    console.log(`Tie! Both of you picked ${humanSelection}`)
    console.log(`Score: (You) ${scores.humanScore} to ${scores.computerScore} (Computer)   ${scores.tieScore} Ties`)
  }
  else if (humanSelection === "rock" & computerSelection === "scissors" |
    humanSelection === "paper" & computerSelection === "rock" |
    humanSelection === "scissors" & computerSelection === "paper") {
    ++scores.humanScore
    console.log(`Congrats, your ${humanSelection} beats the computer's ${computerSelection}`)
    console.log(`Score: (You) ${scores.humanScore} to ${scores.computerScore} (Computer)   ${scores.tieScore} Ties`)
  }
  else {
    ++scores.computerScore
    console.log(`Unfortuante, your ${humanSelection} is beat by the computer's ${computerSelection}`)
    console.log(`Score: (You) ${scores.humanScore} to ${scores.computerScore} (Computer)   ${scores.tieScore} Ties`)
  }

  updateScoreboard();
}

function updateScoreboard() {
  document.getElementById("humanScore").textContent = scores.humanScore;
  document.getElementById("computerScore").textContent = scores.computerScore;
  document.getElementById("tieScore").textContent = scores.tieScore;
}

document.addEventListener("DOMContentLoaded", () => {
  (() => {
    console.log("Initializing app...");
    initUI();
  })();
});

function initUI() {
  const rock_button = document.getElementById("rock");
  const paper_button = document.getElementById("paper");
  const scissors_button = document.getElementById("scissors");

  rock_button.addEventListener("click", playRound);
  paper_button.addEventListener("click", playRound);
  scissors_button.addEventListener("click", playRound);
}
