let getComputerChoice = function() {
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

let getHumanChoice = function() {
  let choice = ""
  let flag = false
  while (!choice | flag) {
    choice = prompt('Please enter "Rock", "Paper", or "Scissors"', "").toLowerCase()
    if (!(choice === "rock" | choice === "paper" | choice === "scissors")) {
      flag = true
    }
    else {
      flag = false
    }
  }
  return choice
}

let playGame = function () {
  let scores = {
    humanScore: 0,
    computerScore: 0,
    ties: 0
  }

  while (true) {
    playRound(scores)
  }
}

let playRound = function (scores) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  if (humanSelection === computerSelection) {
    ++scores.ties
    console.log(`Tie! Both of you picked ${humanSelection}`)
    console.log(`Score: (You) ${scores.humanScore} to ${scores.computerScore} (Computer)   ${scores.ties} Ties`)
  }
  else if (humanSelection === "rock" & computerSelection === "scissors" |
    humanSelection === "paper" & computerSelection === "rock" |
    humanSelection === "scissors" & computerSelection === "paper") {
    ++scores.humanScore
    console.log(`Congrats, your ${humanSelection} beats the computer's ${computerSelection}`)
    console.log(`Score: (You) ${scores.humanScore} to ${scores.computerScore} (Computer)   ${scores.ties} Ties`)
  }
  else {
    ++scores.computerScore
    console.log(`Unfortuante, your ${humanSelection} is beat by the computer's ${computerSelection}`)
    console.log(`Score: (You) ${scores.humanScore} to ${scores.computerScore} (Computer)   ${scores.ties} Ties`)
  }
}

playGame()