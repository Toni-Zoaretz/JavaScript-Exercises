function isogram(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).repeat(2)) {
      return false;
    }
    return true;
  }
}
console.log(isogram("Dermatoglyphics"));
// console.log(isogram("aba"));
