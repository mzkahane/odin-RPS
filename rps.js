let humanScore = 0
let computerScore = 0

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
    comp = getComputerChoice();

    const picks = document.querySelector("#picks");
    picks.innerText = ("H: " + clicked + "  C: " + comp);

    let result = playRound(clicked, comp);

    if (result === "HUMAN") {
        humanScore += 1
    } else if (result === "COMPUTER") {
        computerScore += 1
    }

    return;
}

function playRound(humanChoice, computerChoice) {
    announce = document.querySelector("#announce");

    if (humanChoice === computerChoice) {
        announce.innerText = ("---DRAW---");
        return "DRAW"
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        announce.innerText = ("---HUMAN WINS---");
        return "HUMAN"
    } else {
        announce.innerText = ("---COMPUTER WINS---");
        return "COMPUTER"
    }

}

function playGame() {

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    const score = document.querySelector("#score");

    rockBtn.addEventListener("click", () => {
        console.log("ROCK");
        getHumanChoie("ROCK");
        score.innerText = ("SCORE H:" + humanScore + " C:" + computerScore)
    });

    paperBtn.addEventListener("click", () => {
        console.log("PAPER");
        getHumanChoie("PAPER");
        score.innerText = ("SCORE H:" + humanScore + " C:" + computerScore)
    });

    scissorsBtn.addEventListener("click", () => {
        console.log("SCISSORS");
        getHumanChoie("SCISSORS")
        score.innerText = ("SCORE H:" + humanScore + " C:" + computerScore)
    });

    if (humanScore >= 5 || computerScore >= 5){ // Doesn't work, need to figure out order of operations
        const picks = document.querySelector("#picks");
        picks.innerText = "GAME OVER";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    return
}

playGame()

