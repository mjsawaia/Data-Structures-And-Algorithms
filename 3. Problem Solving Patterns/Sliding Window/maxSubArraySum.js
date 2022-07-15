// Write a function called maxSubarraySum which accepts an array of integers and a number n. The function should calculate the maximum sum of n consecutive elements in the array.

// Second attempt with sliding window
// O(N)
function maxSubarraySumTwo(arr, n) {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// My Attempt with just looping - O(N^2)
// THIS IS BAD
function maxSubarraySum(arr, n) {
  if (arr.length < 1) {
    return null;
  }

  let maxSum = 0;
  let i = 0;

  while (i <= arr.length - n) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum = sum + arr[j];
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
    i++;
  }
  return maxSum;
}

console.log(maxSubarraySumTwo([4, 2, 1, 6, 2], 4));
