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



// ------------------ Second Solution 4 Operations Calculator With Switch Case --------------------//

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

let day= prompt("Enter the day you want to see").toLowerCase()

switch(day){
    case "monday":
        program= "In Class"
        break;
    
    case "tuesday":
        program = "In Class"
        break;
    case "wednesday":
        program = "In Class"
        break;

    case "thursday":
        program = "In Class"
        break;

    case "friday":
        program = "Teamwork"
        break;

    case "saturday":
        program = "InClass + Workshop"
        break;
    
    case "sunday":
        program = "Self-Study"
        break;
    default:
        console.log("You entered wrong, please enter a day of the week")

}

console.log(`Your ${day} schedule ${program}`);


// -----------------  Salary Increase  ----------------//

let salary=+prompt("Enter your salary")

if(salary<= 5000){
    salary=Math.ceil(salary*1.5)
    console.log(`You are so poor we give you a raise. Your new salary is ${salary}`)
}else{
    salary = salary*1.1
    console.log("Your salary is good enough you don't get a raise ")
}



// -------------- Credit Card Inquiry --------------//

let wage = +prompt("Enter your wage(maas)")
let spent = +prompt("Enter your spending")
const asgari = 5000;

(wage-spent)>=asgari ? alert("Kredi Verilebilir 🤑 ") : alert("Kredi Verilemez 🥺")