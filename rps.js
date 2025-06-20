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
    //console.log(choice)
    return choice
}

function getHumanChoice(clicked) {
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

    const resetBtn = document.querySelector("#reset");

    const score = document.querySelector("#score");

    rockBtn.addEventListener("click", () => {
        //console.log("ROCK");
        getHumanChoice("ROCK");
        score.innerText = ("HUMAN: " + humanScore + " COMPUTER: " + computerScore);

        if (humanScore >= 5 || computerScore >= 5) {
            const picks = document.querySelector("#picks");
            picks.innerText = "GAME OVER";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    });

    paperBtn.addEventListener("click", () => {
        //console.log("PAPER");
        getHumanChoice("PAPER");
        score.innerText = ("HUMAN: " + humanScore + " COMPUTER: " + computerScore);

        if (humanScore >= 5 || computerScore >= 5) {
            const picks = document.querySelector("#picks");
            picks.innerText = "GAME OVER";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    });

    scissorsBtn.addEventListener("click", () => {
        //console.log("SCISSORS");
        getHumanChoice("SCISSORS");
        score.innerText = ("HUMAN: " + humanScore + " COMPUTER: " + computerScore);

        if (humanScore >= 5 || computerScore >= 5) {
            const picks = document.querySelector("#picks");
            picks.innerText = "GAME OVER";
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    });

     resetBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        const picks = document.querySelector("#picks");
        picks.innerText = "PICK YOUR CHOICE";
        const announce = document.querySelector("#announce");
        announce.innerText = "";
        const score = document.querySelector("#score");
        score.innerText = ("HUMAN :" + humanScore + " COMPUTER :" + computerScore);
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    });

    return
}

playGame()

