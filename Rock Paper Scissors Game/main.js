// DOM Eleemnts

const choices = document.querySelectorAll(".choice"),
    score = document.querySelector("#score"),
    result = document.querySelector("#result"),
    restart = document.querySelector("#restart"),
    modal = document.querySelector(".modal");
    
const scoreBoard = {
    player: 0,
    computer: 0
}

// Play game
function play(e) {
    restart.style.display = "inline-block"
    const playerChoice = (e.target.id);
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// Get Computers Choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return "rock";
    } else if(rand <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }

}

// Get game winner
function getWinner(p, c) {
    if (p === c) {
        return "draw"
    } else if (p === "rock") {
        if (c === "paper") {
            return "computer";
        } else {
            return "player";
        }
    } else if(p === "paper") {
        if (c === "scissors") {
            return "computer";
        } else {
            return "player";
        }
    } else if (p === "scissors") {
        if (c === "rock") {
            return "computer"
        } else {
            return "player";
        }
    }
}

function showWinner(winner, computerChoice) {
    if (winner === "player") {
        // Inc player score
        scoreBoard.player++
        // Show modal result
        result.innerHTML = `
        <h1 class="text-win">You Won!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    } else if(winner === "computer"){
        // Inc computer score
        scoreBoard.computer++
        // Show modal result
        result.innerHTML = `
        <h1 class="text-lose">You Lost!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    } else {
        result.innerHTML = `
        <h1>Draw!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }
    // Show score 
    score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Computer: ${scoreBoard.computer}</p>
    `;
    modal.style.display = "block";
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

function restartGame(e) {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
    e.target.style.display = "none";
}

// Event Listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);