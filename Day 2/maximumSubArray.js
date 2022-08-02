// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
//....................................................................................

// solution -> O(n2)


let data = [1,2,3];
// let data = [-2, -3, 4, -1, -2, 1, 5, -3];
let maxSum = 0;

for (let a = 0; a < data.length; a++) {
    let currSum = 0
    for (b = a; b < data.length; b++) {
        currSum += data[b]
        if (maxSum < currSum) {
            maxSum = currSum
        }
    }
}
// console.log('maxSum:', maxSum)

// Solution -> O(n)
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let sum = -Infinity;
let currSum = 0;

for(let i=0; i< arr.length; i++){
    currSum += arr[i];

    if(currSum > sum){
        sum = currSum
    }
    if(currSum < 0){
        currSum = 0
    }
}
        console.log('sum:', sum)