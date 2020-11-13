// Variables
let firstOperand = "";
let secondOperand = "";
let operator = "";
let answer = "";
let isOperandClicked = true;
let isDot = false;
document.getElementById("display").innerHTML = "0";



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


// Asign click and keypress properties to number
for (let i = 0; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener("click", () => populate(`${i}`) );
    document.addEventListener("keydown", (e) => {
        if (e.keyCode === i + 96 || e.keyCode === i + 48) {
            populate(`${i}`);
        }
    });
}

// Asign click and keypress properties to decimal
document.getElementById(".").addEventListener("click", () => { if (!isDot) { populate("."); isDot = true; }});
document.addEventListener("keydown", (e) => {
    if ((e.keyCode === 190 || e.keyCode === 110) && (!isDot)) {
        populate(".");
        isDot = true;
    }
});

// Asign click and keypress properties to backspace
document.getElementById(".").addEventListener("click", () => { backSpace() });
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 8) {
        backSpace();
    }
});


// Backspace function
function backSpace() {
    document.getElementById("display").innerHTML = 
        document.getElementById("display").innerHTML.slice(0, -1);
}

// Operands behavior
function operatorFunc(operatorSymbol) {

    if (firstOperand === "") {

        operator = operatorSymbol;
        firstOperand = document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML = `${firstOperand} ${operator}`;
        isOperandClicked = true;
    }
    else if (secondOperand === "0" ||  document.getElementById("display").innerHTML === "0" && operator === "/") {
        document.getElementById("display").innerHTML = "Cannot divide by zero" 
    }
    else {
        secondOperand = document.getElementById("display").innerHTML;
        answer = operate(firstOperand, secondOperand, operator);
        operator = operatorSymbol;
        document.getElementById("display").innerHTML = `${answer} ${operator}`;
        firstOperand = answer;
        isOperandClicked = true;
        isDot = false;
    }

}

// Equal function
function equal() {
    if (firstOperand === "" && secondOperand === "") { 
        document.getElementById("display").innerHTML = "0" 
    }
    else if (secondOperand === "0" ||  document.getElementById("display").innerHTML === "0" && operator === "/") {
        document.getElementById("display").innerHTML = "Cannot divide by zero" 
    }
    else {
        secondOperand = document.getElementById("display").innerHTML;
        answer = operate(firstOperand, secondOperand, operator);
        document.getElementById("display").innerHTML = answer;
        firstOperand = document.getElementById("display").innerHTML;
        isOperandClicked = true;
        firstOperand = "";
        console.log(firstOperand,operator, secondOperand, answer);
        isDot = false;
    }
}


// Equal button and keypress behavior
document.getElementById("equal").addEventListener("click", () => { equal() });
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        equal();
    }
});


// Running operators
document.getElementById("+").addEventListener("click", () => operatorFunc("+"));
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 107) {
        operatorFunc("+");
    }
});
document.getElementById("-").addEventListener("click", () => operatorFunc("-"));
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 109) {
        operatorFunc("-");
    }
});
document.getElementById("*").addEventListener("click", () => operatorFunc("*"));
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 106) {
        operatorFunc("*");
    }
});
document.getElementById("/").addEventListener("click", () => operatorFunc("/"));
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 111) {
        operatorFunc("/");
    }
});

// Clear function
function clear() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    answer = ""
    document.getElementById("display").innerHTML = "0";
    isOperandClicked = true;
}

// Clear button
document.getElementById('clear').addEventListener("click", () => clear() );
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 46) {
        clear();
    }
});




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
    if (operator === '+') { return add( parseFloat(a), parseFloat(b)) }
    if (operator === '-') { return subtract( parseFloat(a), parseFloat(b)) }
    if (operator === '*') { return multiply( parseFloat(a), parseFloat(b)) }
    if (operator === '/') { return divide( parseFloat(a), parseFloat(b)) }
}