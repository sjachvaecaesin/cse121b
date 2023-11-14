/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers (add1, add2) {
    addNumber1 = Number(document.querySelector("#add1").value);
    addNumber2 = Number(document.querySelector("#add2").value);
    return document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function (subtract1, subtract2) {
    subtract1 = Number(document.querySelector("#subtract1").value);
    subtract2 = Number(document.querySelector("#subtract2").value);
    return document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = (factor1, factor2) => {
    factor1 = Number(document.querySelector("#factor1").value);
    factor2 = Number(document.querySelector("#factor2").value);
    return document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers (dividend, divisor) {
    dividend = Number(document.querySelector("#dividend").value);
    divisor = Number(document.querySelector("#divisor").value);
    return document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function total () {
    number = Number(document.querySelector("#subtotal").value);
    if (document.querySelector("#member").checked) {
        number = number * .85;
    }
    document.querySelector("#total").textContent = `$ ${number.toFixed(2)}`;
}

document.querySelector("#getTotal").addEventListener("click", total);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = `${numbersArray}`;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 != 0);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 == 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
temp = numbersArray.map(number => number * 2);
document.querySelector("#sumOfMultiplied").innerHTML = temp.reduce((sum, number) => sum + number);
