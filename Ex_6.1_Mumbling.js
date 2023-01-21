// ("abcd") => "A-Bbb-Ccc-Dddd";

function accum(str) {
  let result1 = "";
  let result2 = "";
  for (let i = 1; i < str.length; i++) {
    result1 += "-" + str.charAt(i).repeat(i + 1);
  }

  return result1;
}

console.log(accum("abcd")); //1*2*3*4*5 == 120
