

//Minimum
// Your code here.
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



//Recursion

// Your code here.
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??




function countChar(strings,char) {

  var count = 0;
  for (var i = 0; i < strings.length; i++)
    if (strings.charAt(i) == char)
      count += 1;
      return count;

}

function countBs(strings) {
  return countChar(strings,"B");
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
