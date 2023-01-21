// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function shortest(sentence) {
  const arr = sentence.split(" ");
  let shortest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i].length;
    }
  }
  return arr[i];
}

console.log(shortest("Hey there i am using WhatsUpp"));
