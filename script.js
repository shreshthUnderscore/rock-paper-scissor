function getComputerChoice()
{
    var randomInt = Math.floor((Math.random() * 3) + 1);
    
    switch(randomInt)
    {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissor"
    }
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissor")
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper")
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
    {
        return `Tie!`
    }
    else
    {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));