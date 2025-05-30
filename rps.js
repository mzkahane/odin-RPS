function getComputerChoice() {
    let num = Math.random()

    let choice = "SCISSORS"

    if (num <= 0.333333) {
        choice = "ROCK"
    } else if (num > 0.333333 && num <= 0.666666) {
        choice = "PAPER"
    }
    console.log(choice)
    return choice
}

function getHumanChoie(clicked) {
    let humanScore = 0
    let computerScore = 0

    let result = playRound(clicked, getComputerChoice());

    if (result === "HUMAN") {
        humanScore += 1
    } else if (result === "COMPUTER") {
        computerScore += 1
    }

    return;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("---DRAW---")
        return "DRAW"
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        console.log("---HUMAN WINS---")
        return "HUMAN"
    } else {
        console.log("---COMPUTER WINS---")
        return "COMPUTER"
    }

}

function playGame() {

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    let result;

    rockBtn.addEventListener("click", () => {
        console.log("ROCK");
        getHumanChoie("ROCK");
        
    });

    paperBtn.addEventListener("click", () => {
        console.log("PAPER");
        getHumanChoie("PAPER");
        
    });

    scissorsBtn.addEventListener("click", () => {
        console.log("SCISSORS");
        getHumanChoie("SCISSORS")
        
    });

    console.log("SCORE H:" + humanScore + " C:" + computerScore)
    return
}

playGame()

