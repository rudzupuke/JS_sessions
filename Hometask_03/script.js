"use strict";

function checkIfPalindrome(string) {
  const reversedString = string.split("").reverse().join("").toLowerCase();
  if (string.toLowerCase() === reversedString)
    console.log(`String "${string}" is a palindrome`);
}

function printAnagram(string) {
  //
}

printAnagram("brainy");

function countCharacters(string) {
  const charCount = string.length;

  // with loop:
  let charsCount = 0;
  for (let i = 0; i < string.length; i++) {
    charsCount++;
  }
  console.log(`String "${string}" has ${charCount} letters`);
}

function countWords(string) {
  const wordsArray = string.split(" ");
  const wordCount = wordsArray.length;

  // with loop:
  let wordsCount = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    wordsCount++;
  }

  console.log(`String "${string}" has ${wordCount} words!`);
}

function maxOccChar(string) {
  let charObject = {};
  const arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    charObject[arr[i]] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    charObject[string[i]]++;
  }

  let maxCharValue = 0;
  let maxChar = "";
  for (const key in charObject) {
    if (charObject[key] > maxCharValue) {
      maxCharValue = charObject[key];
      maxChar = key;
    }
  }
  console.log(
    `Max occuring character in string "${string}" is "${maxChar}", and it has occured ${maxCharValue} times`
  );
}

checkIfPalindrome("Racecar");
checkIfPalindrome("friend");
countCharacters("umbrella");
countWords(
  "The future belongs to those who believe in the beauty of their dreams"
);
maxOccChar("whippersnapper");
