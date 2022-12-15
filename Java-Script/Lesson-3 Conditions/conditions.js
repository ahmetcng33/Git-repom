// -------- 4 Operations Calculator------------ //

let operate = prompt("Which math operation do you want to do? ex: +, *, /, -")
let num1 = +prompt("Enter your first number")
let num2 = +prompt("Enter your second number")

if(operate === "+"){
    result=num1 + num2
    console.log(`Your result is ${result}`)
}

else if(operate === "-"){
    result=num1-num2
    console.log(`Your result is ${result}`)
}

else if(operate === "*"){
    result=num1*num2
    console.log(`Your result is ${result}`)
}

else if(operate === "/"){
    result=num1/num2
    console.log(`Your result is ${result}`);
}
else{
    console.log("You entered the wrong math operate")
}



// ------------------ Second Solution Switch Case --------------------//

let number1=+prompt("Enter your first number")
let operator=prompt("Which math operation do you want to do? ex: +, *, /, -")
let number2 = +prompt("Enter your second number")

switch(operator){
    case "+":
        conclusion = number1 + number2
        break;

    case "-":
        conclusion = number1 - number2
        break;

    case "*":
        conclusion = number1 * number2
        break;

    case "/":
        conclusion = number1 / number2
        break;
    default:
        console.log("You entered wrong math operate");
}

console.log(`${number1} ${operator} ${number2} = ${conclusion}`)



// -------------------- Weakly Program ------------------------ //

let day= toUpperCase(prompt("Enter the day you want to see"))

console.log(day);
// switch(day){
//     case monday,tuesday,wednesday,thursday
// }
