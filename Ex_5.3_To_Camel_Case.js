// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior

function convertDashCamel(str) {
  let result = "";
  const arr = str.split('');
  for(let i = 0; i < arr.length; i++)
}

console.log(convertDashCamel("the-stealth-warrior"));

// function isLetter(str) {
//   return str.length === 1 && str.match(/[a-z]/i);
// }
// let test = "the-stealth-warrior";
// console.log(isLetter("a"));
// const split1 = test.split("");
// console.log(split1.length);

function ax(str) {
  if ((str >= "A" && str <= "Z") || (str >= "a" && str <= "z")) {
    return true;
  }
  return false;
}

console.log(ax("/"));
