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
const opTotal = document.querySelector("#totalbut");
const number0 = document.querySelector("#n0");
const opPow = document.querySelector("#pow");
const opDivide = document.querySelector("#divide");

//variables

let text = null; 

let operation = null;

let text2 = null;

let result = null;

let operationFunction = null;

//array
const numbers = [];
numbers.push(number0, number1, number2, number3, number4, number5, number6, number7, number8, number9);

//text fetch number consoante a posicao no index [i]
for (let i = 0; i < numbers.length; i++){ 
    function incrementation (){
        if (operation === null) { //enquanto a operação for nula estas no primeiro operando
            if (text === null){
                text = ""; //passa a var para uma string pra depois juntar os "dois numeros"
            }
            text = text.concat(i); //junta as variaveis todas com concat (funciona so em strings)          
        } else {
            if (text2 === null){
                text2 = "";
            }
            text2 = text2.concat(i);
        }
        write();
    }
    numbers[i].addEventListener("click", incrementation);  
}





//Math functions
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
    if (operationFunction && text2 !== null){ // previne que chame a funcao antes que a propria funcao esteja definida
        result = operationFunction(+text, +text2); //resultado, +var para tornar a var num numero no resultado
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
    /* if(operation === null){
        if(text2 === null || text === null){
            myText.textContent = `${text}`;
        }else{
            myText.textContent = `${text} ${operation} ${text2}`;
    }
    }else{
        
    } */
    
    myText.textContent = `${text} ${operation} ${text2} = ${result}`;

}
