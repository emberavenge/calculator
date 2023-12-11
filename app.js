const buttons = document.querySelectorAll('button');
let firstNumber = 3;
let operators = ['+','-','*','/'];
let secondNumber = 5;


function displayUpdate(button) {
    let displayText = document.getElementById("display").textContent = button.value;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, firstNumber, secondNumber) {
    if (operator == '+') {
        return add(firstNum, secNum);
    } else if (operator == '-') {
        return subtract(firstNum, secNum)
    } else if (operator == '*') {
        return multiply(firstNum, secNum)
    } else if (operator == '/') {
             return divide(firstNum, secNum)
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
       displayUpdate(button);
    })
})
