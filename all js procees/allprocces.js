//global  inputs here

let input1 = document.getElementById("zahl1");
let input2 = document.getElementById("zahl2");

//addition starts here

function add(zahl1, zahl2) {
  let result1 = zahl1 + zahl2;
  console.log(result1);
}

const buttonAddition = document.getElementById("btnAddition");

buttonAddition.addEventListener("click", function () {
  let inputValue1 = parseFloat(input1.value);
  let inputValue2 = parseFloat(input2.value);
  add(inputValue1, inputValue2);
});

// division starts here

function diviion(zahl1, zahl2) {
  let result2 = zahl1 / zahl2;
  console.log(result2);
}

const buttondivision = document.getElementById("button-division");

buttondivision = document.addEventListener("click", function () {
  let inputValue3 = parseFloat(input1.value);
  let inputValue4 = parseFloat(input2.value);
  diviion(inputValue3, inputValue4);
});

// multiply starts here

function multiply(zahl1, zahl2) {
  let result3 = zahl1 * zahl2;
  console.log(result3);
}

const buttonmutiply = document.getElementById("button-Multiply");

buttonmutiply.addEventListener("click", function () {
  let inputValue5 = parseFloat(input1.value);
  let inputValue6 = parseFloat(input2.value);
  multiply(inputValue5, inputValue6);
});

// //substraction starts here

function sub(zahl1, zahl2) {
  let result4 = zahl2 - zahl1;
  console.log(result4);
}

const buttonsubstraction = document.getElementById("button-straction");

buttonsubstraction.addEventListener("click", function () {
  let inputValue7 = parseFloat(input1.value);
  let inputValue8 = parseFloat(input2.value);
  sub(inputValue7, inputValue8);
});
