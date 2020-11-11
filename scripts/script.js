// Variables
let firstOperand = "";
let secondOperand = "";
let operator = "";
let answer = "";
let isOperandClicked = false;

// Populates the display with numbers (clears screen if its after operand or zero)
function populate(number) {
    if ( isOperandClicked ) {
            document.getElementById("display").innerHTML = "";
            document.getElementById("display").innerHTML += number
            isOperandClicked = false;
    }
    else {
        document.getElementById("display").innerHTML += number;
        isOperandClicked = false;
    }
}

// Asign click properties to number buttons
for (let i = 0; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener("click", () => populate(`${i}`) );
}


// Saving the first value and operator
function operatorFunc(operatorSymbol) {

    if (firstOperand === "") {
        firstOperand = document.getElementById("display").innerHTML;
        operator = operatorSymbol;
        document.getElementById("display").innerHTML = `${firstOperand} ${operator}`;
        isOperandClicked = true;
    }
    else {
        secondOperand = document.getElementById("display").innerHTML;
        answer = operate(firstOperand, secondOperand, operator);
        document.getElementById("display").innerHTML = answer;
        firstOperand = document.getElementById("display").innerHTML;
        isOperandClicked = true;
    }

}

// Saving second value and returning answer to display
document.getElementById("equal").addEventListener("click", () => {
    secondOperand = document.getElementById("display").innerHTML;
    answer = operate(firstOperand, secondOperand, operator);
    document.getElementById("display").innerHTML = answer;
    isOperandClicked = true;
})


// Running operators
document.getElementById("+").addEventListener("click", () => operatorFunc("+"));
document.getElementById("-").addEventListener("click", () => operatorFunc("-"));
document.getElementById("*").addEventListener("click", () => operatorFunc("*"));
document.getElementById("/").addEventListener("click", () => operatorFunc("/"));


// document.getElementById('-').addEventListener("click", () =>{
//     firstOperand = document.getElementById("display").innerHTML;
//     operator = "-";
//     document.getElementById("display").innerHTML = `${firstOperand} ${operator}`;
// } )
// document.getElementById('*').addEventListener("click", () =>{
//     firstOperand = document.getElementById("display").innerHTML;
//     operator = "*";
//     document.getElementById("display").innerHTML = `${firstOperand} ${operator}`;
// } )
// document.getElementById('/').addEventListener("click", () =>{
//     firstOperand = document.getElementById("display").innerHTML;
//     operator = "/";
//     document.getElementById("display").innerHTML = `${firstOperand} ${operator}`;
// } )


// Clear button
document.getElementById('clear').addEventListener("click", () =>{
    firstOperand = "";
    secondOperand = "";
    operator = "";
    answer = ""
    document.getElementById("display").innerHTML = 0;
    isOperandClicked = true;
} )




function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator === '+') { return add( parseInt(a), parseInt(b)) }
    if (operator === '-') { return subtract( parseInt(a), parseInt(b)) }
    if (operator === '*') { return multiply( parseInt(a), parseInt(b)) }
    if (operator === '/') { return divide( parseInt(a), parseInt(b)) }
}