// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// my attempt
// Time Complexity: O(Log(N))
function search(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] > n) {
      end = middle - 1;
    } else if (arr[middle] < n) {
      start = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 8, 10, 11, 14, 15], 17));
