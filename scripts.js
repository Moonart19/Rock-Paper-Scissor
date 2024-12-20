// A) get computer choice
// 1. create function named getComputerChoice
// 2.create a variable num that stores random math number from 1 to 100
// 3.if num <= 33
//     return 'rock'
//   else if num > 33 and num <= 66
//     return 'paper'
//   else
//     return 'scissors'

function getComputerChoice(){
    num = Math.floor(Math.random() * 10) + 1;

    if (num <= 3){
        return "rock";
    }else if (num > 3 && num <= 6){
        return "paper";
    }else{
        return "scissors"
    }
}

// B) get human choice 
// 1.create function named getHumanChoice
// 2.put user input in the variable userInput
// 3.return the userInput

function getHumanChoice(){
    userInput = prompt("Rock, Paper, Scissors: which will you choose");
    return userInput;
}

// C) Keep track of scores
// 1.create new variables with global scope 
// 2.first variable humanScore with value 0
// 3.second variable computerScore with value 0



// D) Create game logic for single round
// 1.create function named playRound
// 2.define two parameters for playRound i.e, humanChoice and computerChoice
// 3.make humanChoice function parameter case sensitive
// 4.if humanChoice is equal to computerChoice 
//     return tie
//   else if humanChoice == 'paper' && computerChoice == 'rock'
//     return 'you won' 
//     humanScore += 1
//   else if humanChoice == 'rock' && computerChoice == 'paper'
//     return 'you lose'
//     computerScore += 1
//   else if humanChoice == 'paper' && computerChoice == 'scissors'
//     return 'you lose'
//     computerScore += 1
//   else if humanChoice == 'scissors' && computerChoice == 'paper'
//     return 'you win'
//     humanScore += 1
//   else if humanChoice == 'rock' && computerChoice == 'scissors'
//     return 'you win'
//     humanScore += 1
//   else if humanChoice == 'scissors' && computerChoice == 'rock'
//     return 'you lose'
//     computerScore += 1
//   else 
//     return 'invalid choice'
// 5.based with the round winner increment the winner score


// E)Logic to play entire game
// 1.create function playGame
// 2.move playRound function and score variable into playGame function
// 3.call playRound function to play five rounds

function playGame(){

    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice){

        let humanChoicelow = humanChoice.toLowerCase();
        if (humanChoicelow == computerChoice){
            console.log("It's a tie");
        }else if (humanChoicelow == "paper" && computerChoice == "rock"){
            console.log("You Won! Paper beats Rock");
            humanScore += 1;
        }else if (humanChoicelow == "rock" && computerChoice == 'paper'){
            console.log("You Lose! Paper beats Rock");
            computerScore += 1;
        }else if (humanChoicelow == "rock" && computerChoice == "scissors"){
            console.log("You Won! Rock beats Scissors");
            humanScore += 1;
        }else if (humanChoicelow == "scissors" && computerChoice == "rock"){
            console.log("You Lose! Rock beats Scissors");
            computerScore += 1;
        }else if (humanChoicelow == "paper" && computerChoice == "scissors"){
            console.log("You Lose! Scissors beat Paper");
            computerScore += 1;
        }else if (humanChoicelow == "scissors" && computerChoice == "paper"){
            console.log("You Won! Scissors beat Paper");
            humanScore +=1;
        }else{
            console.log("Invalid input");
        }
    }

    for(let i = 0; i < 5; i++){
        console.log(`Round: ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();    
        playRound(humanSelection, computerSelection);

    }

    console.log(`You Scored ${humanScore}`);
    console.log(`Computer Scored ${computerScore}`);
    if (humanScore > computerScore){
        console.log("You Beat the Compter");
    }else if (computerScore > humanScore){
        console.log("Computer Beats You");
    }else{
        console.log("It's a Draw");
    }


    
}

playGame();