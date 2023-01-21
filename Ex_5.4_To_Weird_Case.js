function toWeirdCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str.charAt(i).toUpperCase();
    }
    if (i % 2 !== 0) {
      result += str.charAt(i).toLowerCase();
    }
  }
  return result;
}
console.log(toWeirdCase("Weird string case"));
