function sortAndCominedStr(str1, str2) {
  const concatStr = str1 + str2;
  const concatArr = concatStr.split("");
  const sortedArr = concatArr.sort();
  const sortedToStr = sortedArr.join("");
  let result = "";
  for (let i = 0; i < sortedToStr.length; i++) {
    if (result.indexOf(sortedToStr.charAt(i)) === -1) {
      result += sortedToStr.charAt(i);
    }
  }
  return result;
}

console.log(sortAndCominedStr("bcdjilsjdfiljdfaa", "bdfldejxlfjdladdc"));
