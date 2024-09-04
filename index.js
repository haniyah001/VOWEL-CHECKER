"use strict";

const vowel = ["a", "e", "i", "o", "u"];

const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");
const message = document.querySelector(".message");

btn.addEventListener("click", function () {
  // collecting the value & immediately converting it to lowercase
  const textareaValue = textarea.value.toLowerCase();

  // if (!textareaValue) return; // Guard Clause

  if (!textareaValue) {
    textarea.focus();
    return;
  }

  const splittedString = textareaValue.split("");

  let num = 0;

  // splittedString.forEach(function (char) {
  //   if (vowel.includes(char)) {
  //     num++;
  //   }
  // });

  // OR

  // for (let i = 0; i < splittedString.length; i = i + 1) {
  //   if (vowel.includes(splittedString[i])) {
  //     num++;
  //   }
  // }

  message.textContent = num;
  textarea.value = ""; // empty textarea
  textarea.focus(); // focus textarea
});

// JAVASCRIPT ENGINE
// function first() {
//   console.log("First function start");
//   second();
//   console.log("First function end");
// }

// function second() {
//   console.log("Second function start");
//   third();
//   console.log("Second function end");
// }

// function third() {
//   console.log("Third function start and end");
// }

// first();
