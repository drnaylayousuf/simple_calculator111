#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([

    {
        message: "enter first number ? ",
        type: "number",
        name: "number1"
    },

    {
        message: "enter second number ? ",
        type: "number",
        name: "number2"  
    },

    {
        message: "select any one operator to perfom operation ? ",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction","multiplication","division", "modulus",]

    }
]);

//condition statement

if (answer.operator === "addition") {

console.log(answer.number1 + answer.number2);
}
else if (answer.operator === "subtraction") {
    console.log(answer.number1 - answer.number2);
}

else if (answer.operator === "multiplication") {
    console.log(answer.number1 * answer.number2);
}

else if (answer.operator === "defiion") {
    console.log(answer.number1 / answer.number2);
}

else if (answer.operator === "modulus") {
    console.log(answer.number1 % answer.number2);
}

else{
    console.log(`please enter valid operator`);
    
}