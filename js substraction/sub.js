//substraction function
function sub(zahl1, zahl2) {
  let ergebnis = zahl2 - zahl1;
  console.log(ergebnis);
}

//input felder aus
let input1 = document.getElementById("zahl1");
let input2 = document.getElementById("zahl2");

const buttonsubstraction = document.getElementById("btnsubstraction");


buttonsubstraction.addEventListener("click", function () {
  let input1Value = parseFloat(input1.value);
  let input2Value = parseFloat(input2.value);
  sub(input1Value, input2Value);
});
