let display = document.getElementById("disPlay");
let chooseOperator = false;
let chooseEqual = false;

let operator ='';
let firstNum;
let secondNum;

function reset() {
    chooseOperator = false;
    chooseEqual = false;

    operator = '';
    firstNum = undefined;
    secondNum = undefined;
    display.value ='';
}

function clickNumber(number) {
    if (chooseOperator == true){
        // firstNum = display.value;
        console.log(firstNum);
        console.log(secondNum);

        display.value = number;
        chooseOperator = false;
    } else {
        display.value += number;
    }
}

function clickOperator( operatorValue ) {
    chooseOperator = true;
    operator = operatorValue;
    chooseEqual = false;
    firstNum = parseInt(display.value);
    display.value ="";
}

function clickEqual(){
    if (chooseEqual){
        firstNum = parseInt(display.value);
    } else if (operator && operator !== '') {
        secondNum = parseInt(display.value);
    } else {
        return;
    }
    console.log('chooseEqual()', firstNum, secondNum);

    let result;

    if(operator=== '+'){
        result = firstNum + secondNum;
    } else if (operator=== '-'){
        result = firstNum - secondNum;
    } else if (operator=== '*'){
        result = firstNum * secondNum;
    } else if (operator==='/') {
        result = firstNum / secondNum;
    }
    display.value = result;
    chooseEqual = true;
}