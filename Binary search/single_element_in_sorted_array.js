// Problem Description
// Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.

// Elements which are appearing twice are adjacent to each other.

// NOTE: Users are expected to solve this in O(log(N)) time.



// Problem Constraints
// 1 <= |A| <= 100000

// 1 <= A[i] <= 10^9



// Input Format
// The only argument given is the integer array A.



// Output Format
// Return the single element that appears only once.



// Example Input
// Input 1:

// A = [1, 1, 7]
// Input 2:

// A = [2, 3, 3]


// Example Output
// Output 1:

//  7
// Output 2:

//  2


// Example Explanation
// Explanation 1:

//  7 appears once
// Explanation 2:

//  2 appears once

//Solution:

function solve(A){
    let arr = A
    let n = arr.length
    let l = 1
    let r = n - 1

    if (arr.length == 1) return arr[0]
    if (arr[0] !== arr[1]) return arr[0]
    if (arr[n-1] !== arr[n-2]) return arr[n-1]

    while( l <= r){
        let mid = Math.floor(l + (r-l)/2)

        if (arr[mid] !== arr[mid-1] && arr[mid] !== arr[mid+1]){
            return arr[mid]
        }

        fo = mid
        if(arr[mid] == arr[mid-1]) {
            fo = mid-1
        }
        
        if(fo % 2 == 0){ //first occurance is at even index
            l = fo + 2
        }
        else{  //first occurance is at odd index
            r = fo - 1
        }
    }
}
