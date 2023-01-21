function isogram(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) !== i) {
      return false;
    }
  }
  return true;
}

console.log(isogram("Dermatoglyphics"));
