//1876. Substrings of Size Three with Distinct Characters

// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

// CONSTRAINS
// - s and p consist of lowercase English letters.

// EXAMPLES:

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz".
// The only good substring of length 3 is "xyz".

// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".

function countGoodSubstrings(s: string): number {
  let result: number = 0;

  for (let i = 0; i < s.length; i++) {
    const subStr = s.substring(i, i + 3);
    const subSet = new Set(subStr);
    if (subSet.size === 3) {
      result++;
    }
  }
  return result;
}

// ********** EXPLANATION AND THOUGHT PROCESS ********* //

// This solution has O(n) - time complexity and O(1) - space complexity because variables subStr, subSet and counter are of constant size and the input - s.length doesn’t take up more memory.

// 1. initialise counter of good substrings
// 2. loop through the s string
// 3. in each iteration, create a subStr and subSet
// 4. if subSet(which holds unique values) size is less than 3, we don’t do anything, but if the subSet size is exactly 3, then we increment the counter
// 5. return counter

// Whenever we have to deal with unique characters, we should use sets. Sets are internally implemented as hash tables that give us a constant O(1) or O(logN) lookup time in searching an element. It is always guaranteed to give us time complexity better than O(n).

// Time complexity - O(n)
// Space complexity - O(1)
