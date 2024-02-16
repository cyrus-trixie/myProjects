let userInput = document.getElementById("screen");
let expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);
    expression = '';
}

function pressC() {
    expression = '';
    userInput.value = expression;
}
/* margin-left: 30%;
    margin-right: 20%;
    margin-top: 90px; */