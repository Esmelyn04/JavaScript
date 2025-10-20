/*
Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/





console.log('hi');

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    // console.log(userInput)
    return userInput
  } else {
    return console.log('ERROR: incorrect input');
  }
}

getUserChoice('rock')

function getComputerChoice () {
  ranNumber = Math.floor(Math.random() * 3)
  // console.log(ranNumber)
  switch (ranNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

// console.log(getComputerChoice())

function determineWinner(userChoice, computerSchoice) {
  if (userChoice === computerSchoice) {
    return "Game was tie"
  }
  if( userChoice === 'bomb') {
    return 'CHEAT ACTIVATED: User Won'
  }
  if (userChoice === 'rock') {
    if (computerSchoice === 'paper'){
      return 'Computer Won'
    } else {
      return 'User Won'
    }
  }
  if (userChoice === 'paper') {
    if (computerSchoice === 'scissors') {
        return 'Computer Won'
      } else {
        return 'User Won'
      }
  }
  if (userChoice === 'scissors') {
    if (computerSchoice === 'rock') {
      return 'Computer Won'
    } else {
      return 'User Won'
      }
  }
}

function playGame(){
  let userChoice = getUserChoice('rock')
  console.log('User:' + userChoice)

  let computerChoice = getComputerChoice()
  console.log('Computer:' + computerChoice)

  console.log(determineWinner(userChoice, computerChoice))
  // console.log(determineWinner('bomb', computerChoice))

}

playGame()



















