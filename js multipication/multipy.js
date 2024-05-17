function multiply(zahl1, zahl2) {
  let ergebnis = zahl1 * zahl2;
  console.log(ergebnis);
}

let input1 = document.getElementById("zahl1");
let input2 = document.getElementById("zahl2");

const buttonmutiply = document.getElementById("ntnMultiply");

buttonmutiply.addEventListener("click", function () {
  let input1Value = parseFloat(input1.value);
  let input2Value = parseFloat(input2.value);
  multiply(input1Value, input2Value);
});
