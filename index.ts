import { question } from 'readline-sync';

type Operator = "+" | "-" | "*" | "/";

function main(): void
{
    const firstStr: string = question("Enter first number: ");
    const operator: string = question("Enter operator: ");
    const secondStr: string = question("Enter the second string: ")

    const validInput: boolean = isNumber(firstStr) && isOp(operator) && isNumber(secondStr);

    if (validInput) 
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);

        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(result);
    }
    else
    {
        console.log("\ninvalid input\n");
        main();
    }
    
    // const firstNum = isNumber(firstStr);
    // console.log(firstNum + " its a num");

    // const opera = isOp(operator);
    // console.log(opera + " its operator");


    // console.log(firstStr, operator, secondStr);
}

function calculate(firstNum: number, operator: Operator, secondNum: number)
{
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

function isOp(operator: string): boolean
{
    switch(operator){
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}

function isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}
main();