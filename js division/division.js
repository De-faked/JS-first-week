function diviion(zahl, zahl2) {
  let result4 = zahl / zahl2;
  console.log(`${zahl} / ${zahl2} = ${result4}`);
}

let inputdivision1 = document.getElementById("input7");
let inputdivision2 = document.getElementById("input8");

const buttondivision = document.getElementById("button4");

buttondivision = document.addEventListener("click", function () {
  let inputvalue1 = parseFloat(inputdivision1.value);
  let inputdvalue2 = parseFloat(inputdivision2.value);
  diviion(inputvalue1, inputdvalue2);
});
