let yourChoice = document.getElementById("your")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

let computer = document.getElementById("computer")
let computerChoice = ["Rock", "Paper", "Scissors"]

let res = document.getElementById("result")

rock.addEventListener("click", function() {
    yourChoice.textContent = "Rock"
    comp()
    result()


})

paper.addEventListener("click", function() {
    yourChoice.textContent = "Paper"
    comp()
    result()

})

scissors.addEventListener("click", function() {
    yourChoice.textContent = "Scissors"
    comp()
    result()
})

function comp() {
    for (let i = 0; i < computerChoice.length; i++) {
        computer.textContent = computerChoice[Math.floor(Math.random() * i)]
    }
}

function result() {
    if (computer.textContent === "Rock" && yourChoice.textContent === "Rock") {
        res.textContent = "is a tie"
    } else if (computer.textContent === "Paper" && yourChoice.textContent === "Paper") {
        res.textContent = "is a tie"
    } else if (computer.textContent === "Scissors" && yourChoice.textContent === "Scissors") {
        res.textContent = "is a tie"
    } else if (computer.textContent === "Paper" && yourChoice.textContent === "Rock") {
        res.textContent = "YOU LOSE"
    } else if (computer.textContent === "Rock" && yourChoice.textContent === "Paper") {
        res.textContent = "YOU WIN"
    } else if (computer.textContent === "Paper" && yourChoice.textContent === "Scissors") {
        res.textContent = "YOU WIN"
    } else if (computer.textContent === "Scissors" && yourChoice.textContent === "Paper") {
        res.textContent = "YOU LOSE"
    } else if (computer.textContent === "Rock" && yourChoice.textContent === "Scissors") {
        res.textContent = "YOU LOSE"
    } else if (computer.textContent === "Scissors" && yourChoice.textContent === "Rock") {
        res.textContent = "YOU WIN"
    }
}
drt