// Write a function sumZero which accepts a SORTED array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum zero or undefined if a pair does not exist

// WORKING TOWARD EACH OTHER IN MIDDLE

// O(N)
function sumZero(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] > 0) {
      j--;
    } else {
      i++;
    }
  }
  return undefined;
}

console.log(sumZero([-4, -3, -2, -1, 0, 9, 29, 49, 10, 11]));
