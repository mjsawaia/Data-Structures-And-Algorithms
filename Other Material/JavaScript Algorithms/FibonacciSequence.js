// Given a number 'n', find the first 'n' elements of the Fibonacci sequence.
// Fibonacci sequence is a a sequence in which each number is the sum of the two preceeding ones. The first town umbers in the sequence are 0 and 1.
// examples: fibonacci(2) = [0,1], fibonacci(3) = [0,1,1], fibonacci(7) = [0,1,1,2,3,5,8]

// my attempt:
//O(N)
function fibonacci(n) {
  let fib = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }
  return fib;
}

// class solution:
//O(N)
function fibonacciClass(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(7));
