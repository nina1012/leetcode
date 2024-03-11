// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

function findMaxAverage(nums: number[], k: number): number {
  let sum: number = 0;
  let maxSum: number = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, sum);
      sum -= nums[i - (k - 1)];
    }
  }

  return maxSum / k;
}

// ********** EXPLANATION AND THOUGHT PROCESS ********* //

// My approach achieves a time complexity of O(n) as it iterates through the array only once.
// The space complexity of my solution is O(1), which is constant space because it doesn't depend on the input size. We only keep track of sum and maxSum.

// 1. initialize two variables: sum to represent the sum of the current window, and maxSum to keep track of the maximum sum over time.

// 2. for loop to traverse the array.

// 3. increment the sum by adding nums[i] at each iteration.

// 4. The most complicated and crucial step for me was the conditional check if (i >= k - 1), indicating that we must update maxSum and subtract the first element of the window.

// For instance, if k = 4, the sum of items from 0 to 2 is stored in sum. When i = 3, signifying the last item of the window, we need to shift the window, excluding the first item:

// sum -= nums[i - (k - 1)];  -> This is equivalent to removing the item at index 0 from the window.
// Here's an example with the array [1, 12, -5, -6, 50, 3]:

// For i = 0, k = 4, i ≥ k - 1 ❌
// For i = 1, k = 4, i ≥ k - 1 ❌
// For i = 2, k = 4, i ≥ k - 1 ❌
// For i = 3, k = 4, i ≥ k - 1 ✅
// Set max as Math.max(max, sum)
// Decrement sum by the first item from the window (nums[i - (k - 1)])
// this process continues until the last item in the array.

// 6. after the loop concludes, return maxAverage = maxSum / k
