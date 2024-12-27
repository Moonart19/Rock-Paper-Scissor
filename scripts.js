function getComputerChoice(){
    num = Math.floor(Math.random() * 100) + 1;

    if (num <= 33){
        return "rock";
    }else if (num > 33 && num <= 66){
        return "paper";
    }else{
        return "scissors"
    }
}

const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");
const result = document.querySelector("#result");
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const restart = document.querySelector("#restart");

restart.style.display = "none";


function playGame(){
    
    let humanScore = 0, computerScore = 0, maxRound = 5, round = 0;
    
    function playRound(humanChoice, computerChoice){

        let humanChoicelow = humanChoice.toLowerCase();
        if (humanChoicelow == computerChoice){
            result.textContent = "It's a tie";
        }else if (humanChoicelow == "paper" && computerChoice == "rock"){
            result.textContent = "You Won this round! Paper beats Rock";
            humanScore += 1;
        }else if (humanChoicelow == "rock" && computerChoice == 'paper'){
            result.textContent = "You Lose this round! Paper beats Rock";
            computerScore += 1;
        }else if (humanChoicelow == "rock" && computerChoice == "scissors"){
            result.textContent = "You Won this round! Rock beats Scissors";
            humanScore += 1;
        }else if (humanChoicelow == "scissors" && computerChoice == "rock"){
            result.textContent = "You Lose this round! Rock beats Scissors";
            computerScore += 1;
        }else if (humanChoicelow == "paper" && computerChoice == "scissors"){
            result.textContent = "You Lose this round! Scissors beat Paper";
            computerScore += 1;
        }else if (humanChoicelow == "scissors" && computerChoice == "paper"){
            result.textContent = "You Won this round! Scissors beat Paper";
            humanScore +=1;
        }else{
            console.log("Invalid input");
        }
        
        userScore.textContent = `You Scored ${humanScore}`;
        compScore.textContent = `Computer Scored ${computerScore}`;
        round++;

        if (round === maxRound){
            if (humanScore > computerScore){
                result.textContent = "You Won the game";
                document.body.style.backgroundColor = "green"
            }else if( humanScore < computerScore){
                result.textContent = "You Lost the game";
                document.body.style.backgroundColor = "red"
            }else{
                result.textContent = "It's Draw";
                document.body.style.backgroundColor = "gray"
            }

            rockBtn.disabled = true;
            scissorsBtn.disabled = true;
            paperBtn.disabled = true;

            restart.style.display = "inline-block";
        }
        
    }
    
    restart.textContent = " Restart";
    
    
    rockBtn.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    paperBtn.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    scissorsBtn.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });
    
    restart.addEventListener('click', () => {
        humanScore = 0, computerScore = 0, round = 0;
        
        result.textContent = "Game Restarted";
        userScore.textContent = 'You Scored 0';
        compScore.textContent = 'Computer Scored 0';
        
        document.body.style.backgroundColor = "antiquewhite";
        
        rockBtn.disabled = false;
        scissorsBtn.disabled = false;
        paperBtn.disabled = false;
        
        restart.style.display = "none";

    });
}

playGame();