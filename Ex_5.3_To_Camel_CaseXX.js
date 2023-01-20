// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior

function dashToUpper(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str.charAt(i) < "a" || str.charAt(i) > "z") &&
      (str.charAt(i) < "A" || str.charAt(i) > "Z")
    ) {
      result = str.replace(str.charAt(i + 1), str.charAt(i + 1).toUpperCase());
    }
  }
  return result;
}
console.log(dashToUpper("the-stealth-warrior"));

// function isLetter(str) {
//   return str.length === 1 && str.match(/[a-z]/i);
// }
// let test = "the-stealth-warrior";
// console.log(isLetter("a"));
// const split1 = test.split("");
// console.log(split1.length);

// function ax(str) {
//   if ((str >= "A" && str <= "Z") || (str >= "a" && str <= "z")) {
//     return true;
//   }
//   return false;
// }

// console.log(ax("/"));
