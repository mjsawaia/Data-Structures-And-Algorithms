// Write a function called same, which accepts two arrays. The function should return true if every value in the first array has it's correspondig value squared in the second array. The frequency of values must be the same.

// my attempt - O(N)
const same = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  let counterFirst = {};
  for (let el of first) {
    if (counterFirst[el ** 2]) {
      counterFirst[el ** 2] += counterFirst[el ** 2];
    } else {
      counterFirst[el ** 2] = 1;
    }
  }

  let counterSecond = {};
  for (let el of second) {
    if (counterSecond[el]) {
      counterSecond[el] += counterSecond[el];
    } else {
      counterSecond[el] = 1;
    }
  }

  for (let property in counterFirst) {
    if (counterFirst[property] !== counterSecond[property]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 1, 1], [1, 4, 1, 1]));
