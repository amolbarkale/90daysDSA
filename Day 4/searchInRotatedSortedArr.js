// There is an integer array arr sorted in ascending order (with distinct values).

// Prior to being passed to your function, arr is possibly rotated at an unknown pivot index k (1 <= k < arr.length) such that the resulting array is [arr[k], arr[k+1], ..., arr[n-1], arr[0], arr[1], ..., arr[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array arr after the possible rotation and an integer target, return the index of target if it is in arr, or -1 if it is not in arr.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:
// Input: arr = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: arr = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: arr = [1], target = 0
// Output: -1
 

// Constraints:

// 1 <= arr.length <= 5000
// -104 <= arr[i] <= 104
// All values of arr are unique.
// arr is an ascending array that is possibly rotated.
// -104 <= target <= 104
//.......................................................................................
