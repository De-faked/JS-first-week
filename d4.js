// let zahl = 315;
// if (zahl < 500)
//     {
//   console.log(`${zahl} ist eine grosse zahl`);

//     }
// else if (zahl < 300)
//     {
//   console.log(Das ist );
// }
// else if(300<zahl<500)
//     {
//   console.log(zahl)
// }

function substract(zahl1, zahl2) {
  let result = zahl2 - zahl1;
  if (result < 12) {
    console.log(`${result} is too small`);
  } else if (result == 50) {
    console.log(`${result} is exact`);
  } else if (result == 50) {
    console.log(`${result} is exact`);
  } else {
    console.log(`${result} is a big number`);
  }
}

substract(1, 2);
substract(2, 8);
substract(3, 32);
substract(4, 64);

function add(zahl22, zahl23) {
  let result2 = zahl22 + zahl23;
  if (result2 > 0) {
    console.log(`sorry,,  ${result2} is greater than x`);
  } else if (result2 < 0) {
    console.log(`good,  ${result2} is smaller than x`);
  } else {
    console.log(`good,  ${result2} is exactly x`);
  }

  return result2;
}

add();
add();
let zahl17 = -5;
let name = "Qeshra";
let zahl24 = "23";
let zahl25 = 15;
let zahl26 = 73;

const button = document.getElementById("button1");
button.addEventListener("click", function () {
  if (zahl26 > 67) {
    console.log("number is bigger");
  } else {
    console.log("number is smaller ");
  }
});

let input11 = document.getElementById("input1");

let input1 = input11.value;
let zahl100 = 99;

const button2 = document.getElementById("button-sub");
button2.addEventListener("click", function () {
  input1 = input11.value;
  substract(input1, zahl100);
});

let input12 = document.getElementById("input2");

let input2 = input12.value;

const button3 = document.getElementById("button-sub2");
button3.addEventListener("click", function () {
  input2 = input12.value;
  substract(input1, input2);
});
