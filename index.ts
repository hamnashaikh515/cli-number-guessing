#! /usr/bin/env node

import inquirer from "inquirer"

// 1)computer will generate a random number - Done.

// 2)user input for guessing number - Done

// 3)compare user input with computer generated number and show result - Done

const randomNumber = Math.floor(Math.random() * 6 + 1 );

console.log("Welcome to Numbers Guessing Game");


const answers = await inquirer.prompt([
     {
         name : "userGuessedNumber",
         type : "number",
         message : "Please guess a number between 1-6:",
     }
])

console.log(answers);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number");
    
} else {
    console.log("You guessed wrong number");
    
}