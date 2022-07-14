// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. there can be negative numbers in the array, but will always be sorted.

//START AT BEGINNIN AND WORK TOWARDS END

// my attempt - O(N)
// does not alter the original array (seperate counter variable)
function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  let counter = 1;
  if (arr.length < 1) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }
  while (j < arr.length) {
    let first = arr[i];
    let second = arr[j];
    if (first === second) {
      j++;
    } else {
      counter = counter + 1;
      i = j;
      j++;
    }
  }
  return counter;
}

// My Attempt
// Another option altering the array
function countUniqueValuesTwo(arr) {
  let i = 0;
  let j = 1;
  if (arr.length < 1) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

// My Attempt
// Bonus using frequency counter
function countUniqueValuesThree(arr) {
  const counterObj = {};
  let counter = 0;
  for (let el of arr) {
    counterObj[el] = (counterObj[el] || 0) + 1;
  }
  for (let key in counterObj) {
    counter++;
  }
  return counter;
}

// Class Answer - O(N)
function countUniqueValuesClass(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const sampleArray = [1, 1, 1, 4, 5, 9, 9, 9];

// console.log(countUniqueValues(sampleArray));
// console.log(countUniqueValuesTwo(sampleArray));
// console.log(countUniqueValuesThree(sampleArray));
console.log(countUniqueValuesClass(sampleArray));
