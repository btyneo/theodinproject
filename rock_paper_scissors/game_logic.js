function getComputerChoice() {
    let random_num = Math.floor(Math.random()*10); 
   
    if (random_num % 2 == 0) {
        computer_choice = "rock";
    } 
    else {
        random_num = Math.floor(Math.random()*10)
        if (random_num % 2 == 0) {
            computer_choice = "scissors"
        }
        else {
            computer_choice = "paper"
        }
    }
    
    return computer_choice 
}

function getHumanChoice() {
    let human_choice = prompt("Rock, paper or scissors?")
    return human_choice
}


let humanScore = 0;
let computerScore = 0;

function playRound(computer_choice, human_choice) {
    computer_choice = computer_choice.toLowerCase()
    human_choice = human_choice.toLowerCase()

    
    if (computer_choice == "rock" && human_choice == "paper") {
        console.log("You win! Paper beats rock.")
        humanScore ++ 
    }
    else if (computer_choice == human_choice) {
        console.log("Draw!")
    }
    else if (computer_choice == "paper" && human_choice == "rock") {
        console.log("You lose! Paper beats rock.")
        computerScore ++ 
    }

    if (computer_choice == "paper" && human_choice == "scissors") {
        console.log("You win! Scissors beat paper.")
        humanScore ++ 
    }
    else if (computer_choice == "scissors" && human_choice == "paper") {
        console.log("You lose! Scissors beat paper.")
        computerScore ++ 
    }

    if (computer_choice == "scissors" && human_choice == "rock") {
        console.log("You win! Rock beats scissors.")
        humanScore ++ 
    }
    else if (computer_choice == "rock" && human_choice == "scissors") {
        console.log("You lose! Rock beat scissors.")
        computerScore ++ 
    }
}

function playGame() {
    humanScore = 0
    computerScore = 0 
    for (let i = 0; i < 6; i++) {
        const humanSelect = getHumanChoice()
        const computerSelect = getComputerChoice()
        playRound(computerSelect, humanSelect) 

    }
    console.log(`Final Score At End Of 5 Rounds ------ Computer: ${computerScore} ------ Human: ${humanScore}`)
   
}

playGame()


