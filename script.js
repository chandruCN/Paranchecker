"use strict";
//create a variable from class name

var input = document.querySelector(".inputBox");
var clickbtn = document.querySelector(".check");
var finalValue = document.querySelector(".finalValue");
var searchValue;
var split_string = [];
var Result;
//for input value
input.addEventListener("input", updateValue);
clickbtn.addEventListener("click", checkinuputs);

// Function for updating value
function updateValue(e) {
  searchValue = e.target.value;
  //string into an array of substrings
  split_string = searchValue.split("");
}
//checkinputsn
function checkinuputs() {
  Result = inputsave(split_string);
  finalValue.innerHTML = Result;
}

function inputsave(split_string) {
  //empty arr
  var stack = [];
  for (var i = 0; i < split_string.length; i++) {
    //condition for getinput
    let x = split_string[i];
    if (x == "{" || x == "(" || x == "[" || x == "]" || x == "}" || x == ")") {
      if (isOpeningBrace(split_string[i])) {
        //add neew items at end of the array
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
//function for closing bracket matching (boolean)

function closingBracesMatch(closing, stack) {
  var opening = stack[stack.length - 1];

  return (
    (opening === "(" && closing === ")") ||
    (opening === "[" && closing === "]") ||
    (opening === "{" && closing === "}")
  );
}
//for openbrace (boolean)

function isOpeningBrace(character) {
  return character === "(" || character === "{" || character === "[";
}
