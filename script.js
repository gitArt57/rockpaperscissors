let computerChoice = '';
let personChoice = '';
let computerScore = 0;
let personScore = 0;
let gameCounter = 0;
let isValidInput = false;
let gameTools = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
        let random = Math.floor(Math.random() * gameTools.length);
        let randomizedTool = gameTools[random];
        computerChoice = randomizedTool
}

function getUserChoice() {
    while (!isValidInput) {
        personChoice = prompt('rock paper or scissors');
        
        if (personChoice !== null && ['rock', 'paper', 'scissors'].includes(personChoice)) {
          isValidInput = true;
        } else {
          alert('lets try one more time');
        }
      }
}

let oneRounded = () => {
    gameCounter++;
    getUserChoice();
    getComputerChoice();
    if (personChoice == computerChoice) {
        console.log('TIE');
    }
    if (personChoice !== computerChoice) {
        if (personChoice == 'rock' && computerChoice == 'paper') {
            computerScore++
        }
        if (personChoice == 'rock' && computerChoice == 'scissors') {
            personScore++
        }
        if (personChoice == 'paper' && computerChoice == 'rock') {
             personScore++
        }
        if (personChoice == 'paper' && computerChoice == 'scissors') {
             computerScore++
        }
        if (personChoice == 'scissors' && computerChoice == 'paper') {
             personScore++
        }
        if (personChoice == 'scissors' && computerChoice == 'rock') {
            computerScore++
        }
        console.log('game plays right');
    }
    if (gameCounter == 6 || personScore == 3 || computerScore == 3) {
        return
    }
    oneRounded();
}
oneRounded(personChoice, computerChoice);
console.log(personScore);
console.log(computerScore);
console.log('games played = ' + gameCounter);