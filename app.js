const buttons = document.querySelectorAll('button');
let firstNumber = 3;
let operators = ['+','-','*','/'];
let secondNumber = 5;
let numArrays = [];

function displayUpdate(button) {
    let displayText = document.getElementById("display");
    return displayText.textContent = button.value;

}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    if (operator == '+') {
        return add(firstNumber, secondNumber);
    } else if (operator == '-') {
        return subtract(firstNumber, secondNumber)
    } else if (operator == '*') {
        return multiply(firstNumber, secondNumber)
    } else if (operator == '/') {
             return divide(firstNumber, secondNumber)
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
     displayUpdate(button);
      numArrays.push(displayUpdate(button))
    })
})