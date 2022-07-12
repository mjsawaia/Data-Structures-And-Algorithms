// write a function that calculates the sum of all numbers from 1 up to (and including) n.

// assignments and comparisons count as operations just like addition subtraction etc. but ends up not mattering as you only care about big picture/broad trends

// General Rules:
// 1. Arithmetic operations are constant
// 2. Variable assignments are constant
// 3. Accessing elements in array using index or object by key is constant
// 4. In a loop, the comlexity is the length of the loop times the complexity of whatever happens inside of the loop

// O(N)
// number of operations is eventually bounded by a multiple of n (doesn't matter if its is n or 5n or 60n)
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

//O(1) - Constant time - does not matter what n is
// always 3 operations (*, +, /)
function addUpToBetter(n) {
  return (n * (n + 1)) / 2;
}

//O(N)
// more operations but still linear
function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("at the top going back down");
  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }
}

//O(n^2)
// nested loop results in exponential growth of runtime
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// console.log(addUpTo(100));
// console.log(addUpToBetter(100));
// countUpAndDown(10);
printAllPairs(5);
