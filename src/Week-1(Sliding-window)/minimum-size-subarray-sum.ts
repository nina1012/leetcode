// 209. Minimum Size Subarray Sum

// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// CONSTRAINS:
// numbers inside the array and target are always positive integers

// EXAMPLES:
// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

function minSubArrayLen(target: number, nums: number[]): number {
  let left: number = 0;
  let result: number = Infinity;
  let sum: number = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    // whenever sum of the nums inside the window is satisfying the condition
    // we want
    while (sum >= target) {
      // update the result
      result = Math.min(right - left + 1, result);
      // and at the end, we want to move our left pointer to right
      // first by decrementing the sum by the first number inside the window
      // and incrementing the left pointer, moving it to the right
      sum -= nums[left];
      left++;
    }
  }
  return result === Infinity ? 0 : result;
}

// This solution uses sliding window because we are looking for the length of the ****subarray****
// The tricky part for me was to find the length of the subarray which we get by decrementing the right and left pointer + 1 (line 35)
