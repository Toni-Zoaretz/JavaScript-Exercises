// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function shortest(sentence) {
  const arr = sentence.split(" ");
  result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i].length;
  }
  return result;
}

// console.log(shortest("Hey there i am using WhatsUpp"));

const test = ["lily", "sh", "i"];
for (let i = 0; i < test.length; i++) {
  console.log(test[i].length);
}
