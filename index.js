const display = document.getElementById("display");
const maxLength = 10; 

function appendToDisplay(input) {
    if (input === 'log') {
        display.value += 'log'; 
    } else if (input === '^') {
        display.value += '^'; 
    } else if (display.value.length < maxLength || isOperator(input)) {
        display.value += input;
    } else {
        display.value = parseFloat(display.value).toExponential(2); 
    }
}

function isOperator(input) {
    return ['+', '-', '*', '/', '%', 'log', '^'].includes(input);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value.replace(/log/g, 'Math.log10').replace(/\^/g, '**');
        display.value = eval(expression);
        if (display.value.length > maxLength) {
            display.value = parseFloat(display.value).toExponential(2);
        }
    } catch (error) {
        display.value = "Error";
    }
}
