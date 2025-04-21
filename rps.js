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

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
    choice = choice.toUpperCase()
    console.log(choice)
    return choice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("DRAW")
        return "DRAW"
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        console.log("HUMAN WINS")
        return "HUMAN"
    } else {
        console.log("COMPUTER WINS")
        return "COMPUTER"
    }

}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice())
        
        if (result === "HUMAN") {
            humanScore += 1
        } else if (result === "COMPUTER") {
            computerScore += 1
        }
    }

    console.log("SCORE H:" + humanScore + " C:" + computerScore)
    return
}

playGame()

