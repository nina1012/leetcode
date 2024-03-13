// 438. Find All Anagrams in a String

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// CONSTRAINS
// - s and p consist of lowercase English letters.

// EXAMPLES:

// Example 1
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

function areArraysEqual(arr1, arr2): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function findAnagrams(s: string, p: string): number[] {
  const result = [];
  const sArr = new Array(26).fill(0);
  const pArr = new Array(26).fill(0);

  // populate frequencies for each character in p string
  for (let i = 0; i < p.length; i++) {
    let index = p.charCodeAt(i) % 26;
    pArr[index]++;
  }

  // populate frequencies for each character in s string
  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) % 26;
    sArr[index]++;

    // check if we are outside the range (p.length)
    if (i > p.length - 1) {
      // decrement the frequency from the sArr by the value at the beginning
      const headIndex = s.charCodeAt(i - p.length) % 26;
      sArr[headIndex]--;
    }

    // if we are within the range
    if (i >= p.length - 1) {
      // we want to check if sArr and pArr are equal and if they are, push the index from the beginning to the result array
      if (areArraysEqual(pArr, sArr)) {
        result.push(i - (p.length - 1));
      }
    }
  }

  return result;
}
