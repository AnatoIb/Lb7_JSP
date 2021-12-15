let firstInputNum = document.getElementById('input_first_num');
let secondInputNum = document.getElementById('input_second_num');

let firstFloatNum;
let secondFloatNum;

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');

let outputResult = document.getElementById('result');

let resultNum;

plus.onclick = function (e) {
    convertToFloat();

    resultNum = firstFloatNum + secondFloatNum;
    outputResult.innerText = firstFloatNum + " + " + secondFloatNum + " = " + resultNum;
}

minus.onclick = function (e) {
    convertToFloat();

    resultNum = firstFloatNum - secondFloatNum;
    outputResult.innerText =  firstFloatNum + " - " + secondFloatNum + " = " + resultNum;
}

divide.onclick = function (e) {
    convertToFloat();

    if (secondFloatNum === 0) {
        window.location.href="error.jsp";
    }
    else {
        resultNum = firstFloatNum / secondFloatNum;
        outputResult.innerText =  firstFloatNum + " / " + secondFloatNum + " = " + resultNum;
    }
}

multiply.onclick = function (e) {
    convertToFloat();

    resultNum = firstFloatNum * secondFloatNum;
    outputResult.innerText =  firstFloatNum + " * " + secondFloatNum + " = " + resultNum;
}

function convertToFloat() {
    if (firstInputNum.value === "" || secondInputNum.value === "") {
        window.location.href="error.jsp";
    }
    else {
        firstFloatNum = parseFloat(firstInputNum.value);
        secondFloatNum = parseFloat(secondInputNum.value);
    }
}