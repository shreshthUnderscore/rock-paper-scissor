function getComputerChoice()
{
    let randomInt = Math.floor((Math.random() * 3));
    
    switch(randomInt)
    {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissor"
    }
}

function getPlayerChoice()
{
    let playerSelection = prompt("Enter your choice: (rock, paper, scissor)","rock");

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    return playerSelection;
}

function playRound(computerChoice, playerChoice)
{
    if(playerChoice == "Rock" && computerChoice == "Scissor")
    {
        return 1;
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock")
    {
        return 1;
    }
    else if(playerChoice == "Scissor" && computerChoice == "Rock")
    {
        return 1;
    }
    else if (playerChoice == computerChoice)
    {
        return 0;
    }
    else if(playerChoice != "Rock" && playerChoice != "Paper" && playerChoice && "Scissor")
    {
        return -1;
    }
    else 
    {
        return 2;
    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++)
    {
        let playerSelection = getPlayerChoice();
        let computerChoice = getComputerChoice();

        var boolRound = playRound(computerChoice, playerSelection);
        
        switch(boolRound)
        {
            case 1:
                console.log(`You Win! ${playerSelection} beats ${computerChoice}`);
                playerScore++;
                break;
            case 0:
                console.log("Tie !");
                --i;
                break;
            case -1:
                console.log(`Incorrect input !! Please enter again.`);
                --i;
                break;
            case 2:
                console.log(`You Lose! ${computerChoice} beats ${playerSelection}`);
                computerScore++;
                break;
        }

        console.log(`Current Score: 
        User: ${playerScore}
        Computer: ${computerScore}`);
    }

    console.log(`Final Score 
    User: ${playerScore}
    Computer: ${computerScore}`);
}

game();