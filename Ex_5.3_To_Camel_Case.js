// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior

// function convertDashCamel(str) {
// let result = "";

function dashToUpper(str) {
  for (let i = 0; i < str.length; i++) {
    let result = "";
    if (
      !(str.charAt(i) >= "A" && str.charAt(i) <= "Z") ||
      (str.charAt(i) >= "a" && str.charAt(i) <= "z")
    ) {
      str.charAt(i).toUpperCase();
    }
    result += str.charAt(i);
  }

  return result;
}

console.log(dashToUpper("the-stealth-warrior"));

// }

// console.log(convertDashCamel("the-stealth-warrior"));

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
