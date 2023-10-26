let computerChoice = '';
let personChoice = '';
let computerScore = 0;
let personScore = 0;
let gameTools = ['rock', 'paper', 'scissors'];
let fc = function () {
    let random = Math.floor(Math.random() * gameTools.length);
    let randomizedTool = gameTools[random];
    return String(randomizedTool);
}
// fc(gameTools);
console.log(computerChoice);
console.log(personChoice);
computerChoice = fc(gameTools);
console.log(computerChoice);
let a = prompt('rock, paper or scisscors', )
personChoice = a;
console.log(personChoice);

let oneRounded = (personChoice, computerChoice) => {
    if (personChoice == computerChoice) {
        console.log('TIE');
    }
    if (personChoice !== computerChoice) {
        if (personChoice == 'rock' && computerChoice == 'paper') {
            computerScore = computerScore++
        }
        if (personChoice == 'rock' && computerChoice == 'scissors') {
            personScore = personScore++
        }
        if (personChoice == 'paper' && computerChoice == 'rock') {
             personScore = personScore++
        }
        if (personChoice == 'paper' && computerChoice == 'scissors') {
             computerScore = computerScore++
        }
        if (personChoice == 'scissors' && computerChoice == 'paper') {
             personScore = personScore++
        }
        if (personChoice == 'scissors' && computerChoice == 'rock') {
             computerScore = computerScore++
        }
        console.log('game plays right');
    }
}
oneRounded(personChoice, computerChoice);
console.log(personScore);
console.log(computerScore);





// let personChoice = 'paper'
// console.log(typeof computerChoice)
// console.log(typeof personChoice)
// if(computerChoice.toString == personChoice){
//     console.log('ya genii')
// }
// else {
//     console.log('ya loh asdsda')
// getComputerChoice()
// function theGame (computerChoice, playerSelection) {
//     if (computerChoice == playerSelection) {
//         console.log('hello world')
//     }
//     else {
//         console.log('ti kamen')
//     }
// }
// let playerSelection = 'rock';

// theGame();