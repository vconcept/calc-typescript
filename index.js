"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number: ");
    var operator = (0, readline_sync_1.question)("Enter operator: ");
    var secondStr = (0, readline_sync_1.question)("Enter the second string: ");
    var validInput = isNumber(firstStr) && isOp(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("\ninvalid input\n");
        main();
    }
    // const firstNum = isNumber(firstStr);
    // console.log(firstNum + " its a num");
    // const opera = isOp(operator);
    // console.log(opera + " its operator");
    // console.log(firstStr, operator, secondStr);
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
function isOp(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
