function add(zahl1, zahl2) {
  let ergebnis = zahl1 + zahl2;
  console.log(ergebnis);
}

let input1 = document.getElementById("zahl1");
let input2 = document.getElementById("zahl2");

const buttonAddition = document.getElementById("btnAddition");
buttonAddition.addEventListener("click", function () {
  // let input1 = document.getElementById("zahl1");
  // let input2 = document.getElementById("zahl2");
  let input1Value = parseFloat(input1.value);
  let input2Value = parseFloat(input2.value);
  add(input1Value, input2Value);
});
