// Problem Description
// Given an array of integers A, find and return the peak element in it.
// An array element is considered a peak if it is not smaller than its neighbors. For corner elements, we need to consider only one neighbor.

// NOTE:

// It is guaranteed that the array contains only a single peak element.
// Users are expected to solve this in O(log(N)) time. The array may contain duplicate elements.


// Problem Constraints
// 1 <= |A| <= 100000

// 1 <= A[i] <= 109



// Input Format
// The only argument given is the integer array A.



// Output Format
// Return the peak element.



// Example Input
// Input 1:

let A = [1, 2, 3, 4, 5]
// Input 2:

// A = [5, 17, 100, 11]


// Example Output
// Output 1:

//  5
// Output 2:

//  100


// Example Explanation
// Explanation 1:

//  5 is the peak.
// Explanation 2:

//  100 is the peak.
//Solution:

function solve(A){
    let arr = A

    if(arr.length == 1) return arr[0]
    if(arr[arr.length-1] > arr[arr.length-2]) return arr[arr.length-1]
    if(arr[0] > arr[1]) return arr[0]

    let l = 1
    let r = arr.length - 2

    while(l <= r) {
        let mid = Math.floor(l + (r - l) / 2)

        if(arr[mid] > arr[mid-1] && arr[mid] >= arr[mid+1]) return arr[mid]

        else if(arr[mid] > arr[mid - 1]){
            l = mid + 1
        }
        else {
            r = mid - 1
        }
    }
}