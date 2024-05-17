let zahl1 = 10;
let zahl2 = zahl1 + zahl1;
let zahl3 = zahl2 * 2;
let zahl4 = zahl3 * 2;
let zahl5 = zahl4 * 2 + zahl1;
let zahl6 = 30;
let zahl7 = 10;
let zahl8 = 20;
let zahl9 = 30;
console.log(zahl1);
console.log(zahl2);
console.log(zahl3);
console.log(zahl4);
console.log(zahl5);
console.log(zahl6);
console.log(zahl7);
console.log(zahl8);
console.log(zahl9);

//multi
let multi = zahl1 * zahl1;
console.log(multi);

//addision
let add = zahl1 + zahl1;
console.log(add);

//subs
let sub = zahl1 - zahl1;
console.log(sub);

//division
let div = zahl1 / zahl1;
console.log(div);

//this section to discover document
document.getElementById("ergebnis1").innerHTML = `Multiplcation: ${multi}`;
document.getElementById("ergebnisspan").innerHTML = `Multiplcation: ${multi}`; //so this is another way of writing the resilt but using span
document.getElementById("ergebnis2").innerHTML = `addistion: ${add}`;
document.getElementById("ergebnis3").innerHTML = `substraction: ${sub}`;
document.getElementById("ergebnis4").innerHTML = `division: ${div}`;
document.getElementById("link1").herf = "https://www.js.com/";
// document.getElementById("img1").src =
//   "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

//functions
function test() {
  console.log(zahl1 + zahl9);
}
test();
test();

//a function to divids two numbers
function division2(zahl11, zahl22) {
  let result = zahl11 / zahl22;
  console.log(`the result is: ${zahl11 / zahl22}`);
  return result;
}

division2(100, 50);
division2(10, 5);
division2(zahl4, 50);
division2(zahl2, 50);
division2(100, zahl1);
division2(100, zahl2);
division2(100, zahl3);
division2(100, zahl5);
division2();

//a function to adds two numbers up:

function addision2(zahl11, zahl22) {
  let result = zahl11 + zahl22;
  console.log("the result is: ", result);
  return result;
}

// addision2(1,2);
// // addision2(addision2, addision2);

// let z1 =100;
// let z2 =10;
// let z3 =1;

// console.log(addision2)

// summe von

//
// function multifunction(n1, n2) {
//   let result = n1 * n2;
//   console.log("this is the result of this function: ", result);
//   return multifunction;
// }

// multifunction();


function (zahl1,zahl2)
{
  lest
}
