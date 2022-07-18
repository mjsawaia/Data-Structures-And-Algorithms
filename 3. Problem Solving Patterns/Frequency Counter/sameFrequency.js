// Write a function called sameFrequency. Given two positive integers, find ot if the two numbers have the same frequency of digits.

function sameFrequency(x, y) {
  let xString = x.toString();
  let yString = y.toString();
  let xCounter = {};

  for (let el of xString) {
    xCounter[el] = (xCounter[el] || 0) + 1;
  }

  for (let el of yString) {
    if (!xCounter[el]) {
      return false;
    } else {
      xCounter[el]--;
    }
  }
  return true;
}

console.log(sameFrequency(22, 222));
