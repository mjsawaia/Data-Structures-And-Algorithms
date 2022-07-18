// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// Time Complexity: O(N)
// SPace Complexity: O(N)
function areThereDuplicates(...args) {
  const inputs = [...args];
  const counter = {};
  for (let el of inputs) {
    if (counter[el]) {
      return true;
    } else {
      counter[el] = 1;
    }
  }
  return false;
}
