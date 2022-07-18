// Given an integer 'n', find the factorial of that integer
// Factorial = product of all positive integers less than or equal to 'n'
// Factorial of zero is 1

// my attempt:
// O(n)
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac = fac * i;
  }
  return fac;
}

// class solution:
// O(n)
function factorialClass(n) {
  result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
