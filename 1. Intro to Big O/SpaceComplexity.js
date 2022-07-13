// We can use Big O notation to analyze space/memory needed to run an algorithm

// Auxiliary space complexity refers to space required by the algorithm, not including space taken up by the inputs. This is what we typically focus on

// Rules:
// most primitives (boolean, numbers, undefinde, null) are constant
// Strings require O(n) space where n is the string length
// Reference types (arrays and objects) require O(n) where n is the length of array or number of keys

// example 1:
// sum function that adds all items in a given array
// not storing any additional information as input grows. Only updating "total".
// space complexity of O(1) - Constant
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// example 2:
// accept an array and return a new array with each element doubled
// space complexity of O(N)
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
