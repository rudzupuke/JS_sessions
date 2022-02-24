"use strict";

const resultDisplay = document.querySelector(".result");
let userNumber = parseInt(prompt("How many FizzBuzz numbers do you want?"));

let numbersArray = [];

for (let i = 15; !(numbersArray.length === userNumber); i += 15) {
  numbersArray.push(i);
}

resultDisplay.textContent = numbersArray.toString();
