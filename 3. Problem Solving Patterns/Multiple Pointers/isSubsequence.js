// Write a function called isSubsequence which takes in two strings and checks whether the caharacters in the first string form a subsequence of the characters in the second string. In other words, the function should chedk whether the characters in the first string appear somewhere in the second string, without their order changing.
// constraints: Time: O(N) Space: O(1)

function isSubsequence(first, second) {
  if (first.length > second.length) {
    return false;
  }
  let firstPointer = 0;

  for (let el of second) {
    if (first[firstPointer] === el) {
      if (firstPointer === first.length - 1) {
        return true;
      }
      firstPointer++;
    }
  }
  return false;
}

console.log(isSubsequence("abc", "abracadabra"));
