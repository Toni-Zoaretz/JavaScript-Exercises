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
// ------Filter words thats contanis the letter "p":
function contaniesP(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("p")) {
      result += arr[i] + " ";
    }
  }
  return result;
}

console.log(contaniesP(arr));

// ------------ForEach------------------------------
// ------Return how much words have "e":
function countE(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf("e") !== -1) {
      ans++;
    }
  }
  return ans;
}

console.log(countE(arr));

// ------------Map-----------------------------------
// ------Return array with all words upperCase:
function toUpper(arr) {
  let wordsToUpperCase = [];
  for (let i = 0; i < arr.length; i++) {
    wordsToUpperCase.push(arr[i].toUpperCase());
  }
  return wordsToUpperCase;
}

console.log(toUpper(arr));

// -------------FOR-LOOP-ON-OBJECT:-----------------
// ------------Filter-----------
// ------Filter all the Numbers from the Object:
function onlyNumbers(obj) {
  let result = [];
  let keyArr = Object.values(obj);
  for (let i = 0; i < keyArr.length; i++) {
    if (typeof keyArr[i] === "number") {
      result.push(keyArr[i]);
    }
  }
  return result;
}

console.log(onlyNumbers(obj1));

// ------------ForEach------------------------------
// ------Return only first and last name:
function firstAndLast(obj) {
  let keyArr = Object.keys(obj);
  let fullName = [];
  for (let i = 0; i < keyArr.length; i++) {
    if (keyArr[i] === "lastName" || keyArr[i] === "firstName") {
      fullName.push(obj[keyArr[i]]);
    }
  }
  return fullName;
}

console.log(firstAndLast(obj1));

// ------------Map------------------------------
// ------Return all value with capital letters:

function allCapital(obj) {
  let resultToUpper = [];
  let valurArr = Object.values(obj);
  let valuSt = valurArr.join(" ").toUpperCase();
  return valuSt.split(" ");
}

console.log(allCapital(obj1));
