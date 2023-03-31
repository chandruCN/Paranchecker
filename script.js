"use strict";

var input = document.querySelector(".inputBox");
var clickbtn = document.querySelector(".check");
var finalValue = document.querySelector(".finalValue");
var searchValue;
var split_string = [];
var Result;

input.addEventListener("input", updateValue);
clickbtn.addEventListener("click", checkinuputs);

// Function for updating value
function updateValue(e) {
  searchValue = e.target.value;
  split_string = searchValue.split("");
}

function checkinuputs() {
  Result = inputsave(split_string);
  finalValue.innerHTML = Result;
}

function inputsave(split_string) {
  var stack = [];
  for (var i = 0; i < split_string.length; i++) {
    let x = split_string[i];
    if (x == "{" || x == "(" || x == "[" || x == "]" || x == "}" || x == ")") {
      if (isOpeningBrace(split_string[i])) {
        stack.push(split_string[i]);
      } else if (closingBracesMatch(split_string[i], stack)) {
        stack.pop();
      }
    } else {
      stack.length = 1;
    }
  }
  return stack.length === 0;
}

function closingBracesMatch(closing, stack) {
  var opening = stack[stack.length - 1];

  return (
    (opening === "(" && closing === ")") ||
    (opening === "[" && closing === "]") ||
    (opening === "{" && closing === "}")
  );
}

function isOpeningBrace(character) {
  return character === "(" || character === "{" || character === "[";
}
