"use strict";

let num1 = parseInt(prompt("Enter first number!"));
let op = prompt("Enter operation (+, -, *, /)!");
let num2 = parseInt(prompt("Enter second number!"));

if (op === "+" || op === "-" || op === "*" || op === "/") {
  if (op === "+") {
    console.log(num1 + num2);
  } else if (op === "-") {
    console.log(num1 - num2);
  } else if (op === "*") {
    console.log(num1 * num2);
  } else if (op === "/") {
    console.log(num1 / num2);
  }
} else {
  console.log("Operation provided is not correct!");
}
