// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such cinema, formed from iceman.

// my attempt - O(N)
const anagram = (first, second) => {
  if (!first || !second) {
    return console.log("please enter valid strings");
  }
  if (first.length !== second.length) {
    return false;
  }
  const counterFirst = {};
  const counterSecond = {};

  for (let char of first) {
    counterFirst[char] = (counterFirst[char] || 0) + 1;
  }

  for (let char of second) {
    counterSecond[char] = (counterSecond[char] || 0) + 1;
  }

  for (let property in counterFirst) {
    if (counterFirst[property] !== counterSecond[property]) {
      return false;
    }
  }
  return true;
};

// another option with one counter - O(N)
const anagramTwo = (first, second) => {
  if (!first || !second) {
    return console.log("please enter valid strings");
  }
  if (first.length !== second.length) {
    return false;
  }
  const counter = {};

  for (char of first) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (let el of second) {
    if (!counter[el]) {
      return false;
    } else {
      counter[el]--;
    }
  }
  return true;
};

console.log(anagramTwo("azz", "zaa"));
