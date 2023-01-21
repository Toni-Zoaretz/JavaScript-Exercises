function countDuplicat(str) {
  let str2 = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str2.charAt(i) === " ") {
      continue;
    }
    if (str2.indexOf(str2.charAt(i)) !== str2.lastIndexOf(str2.charAt(i))) {
      count++;
    }
    str2 = str2.replaceAll(str2.charAt(i), " ");
  }
  return count;
}
console.log(countDuplicat("aaaabBcde"));
// a a b b c d
// 0 1 2 3 4 5
