let player = {
    name: "Sleepy",
    chip: 120
}
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let card1 = [firstCard, secondCard];
let sum = firstCard + secondCard;
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardEl = document.getElementById("cards");
let isAlive = true;
let hasBlackJack = false;

let play = document.getElementById("player");
play.textContent = player.name + ": $" + player.chip;

function getRandomCard() {
    let randomm = Math.floor(Math.random() * 13) + 1;
    if (randomm > 10) {
        return 10;
    } else if (randomm === 1) {
        return 11;
    } else {
        return randomm;
    }
}

function start() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let card1 = [firstCard, secondCard];
    let sum = firstCard + secondCard;
    rendergame();
}


function rendergame() {
    cardEl.textContent = "Cards:"

    for (let i = 0; i < card1.length; i++) {
        cardEl.textContent += card1[i] + " ";
    }
    sumEl.textContent = "sum:" + sum;

    if (sum < 21) {

        message = "do you want to draw a new card";
        messageEl.textContent = message;
        isAlive = true;
    } else if (sum === 21) {
        message = "you've got black jack";
        messageEl.textContent = message;
        hasBlackJack = true;


    } else {
        message = "you are out of the game!";
        messageEl.textContent = message;
        isAlive = false;


    }
}

function newcard() {
    // let card = Math.floor(Math.random() * 18);
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        card1.push(card);
        rendergame();

    }

}