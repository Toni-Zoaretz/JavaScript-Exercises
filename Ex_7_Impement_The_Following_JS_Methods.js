const arr = ["red", "blue", "white", "dark", "grey", "purple", "pink"];
const obj1 = {
  firstName: "toni",
  lastName: "zoaretz",
  age: 27,
  birthdYear: 1995,
  friends: ["Ayelet", "Shirel"],
};

// -------------FOR-LOOP-ON-ARRAYS:-----------------
// ------------Filter------------------------------
//------Filter words thats contanis the letter "p":
// function contaniesP(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].startsWith("p")) {
//       result += arr[i] + " ";
//     }
//   }
//   return result;
// }

// console.log(contaniesP(arr));

// ------------ForEach------------------------------
//------Return how much words have "e":
// function countE(arr) {
//   let ans = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf("e") !== -1) {
//       ans++;
//     }
//   }
//   return ans;
// }

// console.log(countE(arr));

// ------------Map-----------------------------------
//------Return array with all words upperCase:
// function toUpper(arr) {
//   let wordsToUpperCase = [];
//   for (let i = 0; i < arr.length; i++) {
//     wordsToUpperCase.push(arr[i].toUpperCase());
//   }
//   return wordsToUpperCase;
// }

// console.log(toUpper(arr));

// -------------FOR-LOOP-ON-OBJECT:-----------------
// ------------Filter-----------
//------Filter all the Numbers from the Object:
// function onlyNumbers(obj) {
//   let result = "";
//   for (let num of Object.keys(obj)) {
//     if (typeof obj[key] === "number") {
//       result += obj[key];
//     }
//   }
//   return result;
// }

// console.log(onlyNumbers(obj1));

// ------------ForEach------------------------------
//------Return only first and last name:
// function firstAndLast(obj) {
//   // let firstLast = "";
//   for (let name of Object.keys(obj)) {
//     return Object.keys[firstName] + Object.keys[lastName];
//   }
// }

// console.log(firstAndLast(obj1));

// ------------Map------------------------------
//------Return all value with capital letters:
// function allCapital(obj) {
//   let result = {};
//   for (let capital of Object.keys(obj)) {
//     result += Object.keys[key].toUpperCasr();
//   }
// }
// console.log(allCapital(obj1));
