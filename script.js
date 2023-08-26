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
        return 1;
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")
    {
        return 1;
    }
    else if(playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper")
    {
        return 1;
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
    {
        return 0;
    }
    else
    {
        return -1;
    }
}

function game()
{
    var playerScore = 0;
    var computerScore = 0;

    for(let i=0; i<5; i++)
    {
        var playerSelection = prompt("Enter your choice: (rock, paper, scissor)","rock");
        var computerChoice = getComputerChoice();
        var boolRound = playRound(playerSelection, computerChoice);
        
        switch(boolRound)
        {
            case 1:
                console.log(`You Win! ${[playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()]} beats ${computerChoice}`);
                playerScore++;
                break;
            case 0:
                console.log("Tie !");
                break;
            case -1:
                console.log(`You Lose! ${computerChoice} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}`);
                computerScore++;
                break;
        }
    }

    console.log(`Final Score 
    User: ${playerScore}
    Computer: ${computerScore}`);
}

game();