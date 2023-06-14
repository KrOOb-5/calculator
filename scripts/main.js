const myText = document.querySelector("#result")
const number1 = document.querySelector("#n1");
const number2 = document.querySelector("#n2");
const number3 = document.querySelector("#n3");
const opPlus = document.querySelector("#plus");
const number4 = document.querySelector("#n4");
const number5 = document.querySelector("#n5");
const number6 = document.querySelector("#n6");
const opMinus = document.querySelector("#minus");
const number7 = document.querySelector("#n7");
const number8 = document.querySelector("#n8");
const number9 = document.querySelector("#n9");
const opTimes = document.querySelector("#times");
const opTotal = document.querySelector("#total");
const number0 = document.querySelector("#n0");
const opPow = document.querySelector("#pow");
const opDivide = document.querySelector("#divide");

let text = null; 

let operation = null;

let text2 = null;

let result = null;

let operationFunction = null;

const numbers = [];
numbers.push(number0, number1, number2, number3, number4, number5, number6, number7, number8, number9);


for (let i = 0; i < numbers.length; i++){
    function incrementation (){
        if (text === null) {
            text = i;
        } else {
            text2 = i;
        }
        write();
    }
    numbers[i].addEventListener("click", incrementation); // 
}


function plus (){
    operation = "+";
    operationFunction = function (a,b){return a + b;};
    write();
}

function minus (){
    operation = "-";
    operationFunction = function (a,b){return a - b;};
    write();
}

function times (){
    operation = "*";
    operationFunction = function (a,b){return a * b;};
    write();
}

function divide (){
    operation = "/";
    operationFunction = function (a,b){return a / b;};
    write();
}

function pow (){
    operation = "^";
    operationFunction = Math.pow;
    write();
}

function total (){
    // if(operation === "+"){
    //     result = text + text2;

    // }else if (operation === "-") {
    //     result = text - text2;
    
    // }else if (operation === "*") {
    //     result = text * text2;
    
    // }else if (operation === "/"){
    //     result = text / text2;

    // }else if (operation === "^") {
    //     result = Math.pow(text, text2);

    // }
    if (operationFunction && text2 !== null){ // previne que chame a funcao antes que a propria funcao esteja definida
        result = operationFunction(text, text2);
        write();
    }

    
    text = null;
    text2 = null;
    operation = null;
    result = null;
    operationFunction = null;
}

opPlus.addEventListener("click", plus);
opMinus.addEventListener("click", minus);
opTimes.addEventListener("click", times);
opDivide.addEventListener("click", divide);
opPow.addEventListener("click", pow);
opTotal.addEventListener("click", total);

function write (){
    myText.textContent = `${text} ${operation} ${text2} = ${result}`;
}

