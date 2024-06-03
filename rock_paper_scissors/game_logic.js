function getComputerChoice() {
    let random_num = Math.floor(Math.random() * 10);
   
    if (random_num % 2 == 0) {
        return "rock";
    } else {
        random_num = Math.floor(Math.random() * 10)
        if (random_num % 2 == 0) {
            return "scissors";
        } else {
            return "paper";
        }
    }
}


let humanScore = 0;
let computerScore = 0;
let totalDraws = 0;

function playRound(human_choice) {
    let computer_choice = getComputerChoice().toLowerCase();
    human_choice = human_choice.toLowerCase();

    if ((computer_choice == "rock" && human_choice == "paper") ||
        (computer_choice == "paper" && human_choice == "scissors") ||
        (computer_choice == "scissors" && human_choice == "rock")) {
        return "human";
    } else if (computer_choice == human_choice) {
        return "draw";
    } else {
        return "computer";
    }
}

function updateScores(result) {
    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++;
    }
    else {
        totalDraws++;
    }

    scoreText.textContent = `Player: ${humanScore} ---- Computer: ${computerScore} ----- Draws: ${totalDraws}`;

    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;

    if (humanScore > computerScore) {
        finalText.textContent = "You win. Congratulations!";
    } else if (computerScore > humanScore) {
        finalText.textContent = "You lose. Better luck next time!";
    } else {
        finalText.textContent = "Draw!";
    }
}

container = document.querySelector("div");
display = document.createElement("div");
finalText = document.createElement("h2");
display.appendChild(finalText);
scoreText = document.createElement("h3");
display.appendChild(scoreText);
container.appendChild(display);

rockButton = document.createElement("button");
paperButton = document.createElement("button");
scissorButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorButton.textContent = "Scissors";

rockButton.addEventListener('click', function() {
    let result = playRound("rock");
    updateScores(result);
});
paperButton.addEventListener('click', function() {
    let result = playRound("paper");
    updateScores(result);
});
scissorButton.addEventListener('click', function() {
    let result = playRound("scissors");
    updateScores(result);
});

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorButton);
