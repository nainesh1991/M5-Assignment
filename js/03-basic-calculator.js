// ADD A FUNCTION CALLED CALCULATE
function calculate(num1, num2, operation) {
    if (operation == 'add') {
        return num1 + num2

    }

    else if (operation == 'subtract') {
        return num1 - num2
    }
    else if (operation == 'multiply') {
        return num1 * num2
    }
    else {
        return num1 / num2
    }
}
var num1, num2, operation
do {
    num1 = parseInt(prompt('Enter the first number'))
    // COLLECT SECOND NUMBER FROM USER
    num2 = parseInt(prompt('Enter the second number'))
    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt('Please choose the operation you would like to perform (add, subtract, multiply, divide)').toLowerCase()
    while (operation !== 'add' && operation !== 'multiply' && operation !== 'subtract' && operation !== 'divide') {
        alert('wrong input seleceted /// Please choose the operation you would like to perform (add, subtract, multiply, divide)')
        num1 = parseInt(prompt('Enter the first number'))
        // COLLECT SECOND NUMBER FROM USER
        num2 = parseInt(prompt('Enter the second number'))
        // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
        operation = prompt('Please choose the operation you would like to perform (add, subtract, multiply, divide)').toLowerCase()
    }
} while (operation !== 'add' && operation !== 'multiply' && operation !== 'subtract' && operation !== 'divide');

alert(`Result of ${num1} ${operation} ${num2} is equal to ${calculate(num1, num2, operation)} `)

