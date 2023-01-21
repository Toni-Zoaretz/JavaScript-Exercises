// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

function longestWords(words) {
  const arr = words.split(" ");
  let longest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(longestWords("toni , shay, bananaaa, lkjdkljlfjfdj"));

// const wordsa = "toni, shay, banana";
// console.log(wordsa.split(" "));
// console.log(wordsa);
