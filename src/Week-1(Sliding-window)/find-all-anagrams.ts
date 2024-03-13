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

// ********** EXPLANATION AND THOUGHT PROCESS ********* //

// This approach achieves a time complexity of O(n) as it iterates through the array only once.
// The space complexity of this solution is O(n) because in the worst case, every substring is an anagram, thus linear.

// Given the constraint that both strings s and p consist only of lowercase English letters, we can avoid using hash maps.

// 1. initialize two arrays, pArr and sArr, each of length 26, and initialize all elements to 0. These arrays represent the frequency of each letter.

// 2. iterate through pArr to populate the frequency of each character in string p. For example, if there are two identical characters, the frequency will be set to 2, and so on. The index of each letter from p is determined using charCodeAt % 26 (the length of the array).

// 3. loop through sArr in a similar manner to step 2, updating the frequency for each character in string s

// if the current window is within the specified range (i - p.length - 1).
// if not, decrement the head index. => the index at the beginning of the window, in this case i
// 4. if within the given range (p.length - 1), compare the strings for equality.
// 5. if they are equal, push (i - (p.length - 1)) to the result index.

// This solution made me think of methods in js such as charCodeAt that returns the unicode value of the character at the given index. We use that to place the frequency of the character into the pArr and sArr. We mod that unicode value by 26 because there are 26 English letters.
// If the input consisted of characters other than lowercase English letters, the best way to have an optimal solution would be to use a hash map.
