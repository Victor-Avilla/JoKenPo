const humanScore = document.querySelector("#score");
const computerScore = document.querySelector("#scoreComputer");
const playResult = document.querySelector(".text");

let humanScoreValue = 0
let computerScoreValue = 0

const playHuman = (humanChoice) => {
    matchResult(humanChoice, playComputer());
}
const playComputer = () => {
    const computerChoice = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random(computerChoice) * 3);
    return computerChoice[randomNumber];
}

const matchResult = (human, computer) => {
    if (human === computer) {
        playResult.innerHTML = "Empate";
    }
    else if (
        (human === "rock" && computer === "scissors")||
        (human === "paper" && computer === "rock")||
        (human === "scissors" && computer === "paper")
    ) {
        humanScoreValue++
        humanScore.innerHTML = humanScoreValue
        playResult.innerHTML = "Você ganhou"


    }
    else {
        computerScoreValue++
        computerScore.innerHTML = computerScoreValue
        playResult.innerHTML = "Você perdeu"
    }
}

const resetScore =() => {
    humanScoreValue && computerScoreValue===0;
    humanScore.innerHTML = 0;
    computerScore.innerHTML = 0
}
