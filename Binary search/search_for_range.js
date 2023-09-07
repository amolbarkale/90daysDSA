// Problem Description
// Given a sorted array of integers A (0-indexed) of size N, find the left most and the right most index of a given integer B in the array A.

// Return an array of size 2, such that 
//           First element = Left most index of B in A
//           Second element = Right most index of B in A.
// If B is not found in A, return [-1, -1].

// Note : Your algorithm's runtime complexity must be in the order of O(log n).


// Problem Constraints
// 1 <= N <= 106
// 1 <= A[i], B <= 109


// Input Format
// The first argument given is the integer array A.
// The second argument given is the integer B.


// Output Format
// Return the left most and right most index (0-based) of B in A as a 2-element array. If B is not found in A, return [-1, -1].


// Example Input
// Input 1:

let A = [5, 7, 7, 8, 8, 10]
let B = 8
// Input 2:

//  A = [5, 17, 100, 111]
//  B = 3


// Example Output
// Output 1:

//  [3, 4]
// Output 2:

//  [-1, -1]


// Example Explanation
// Explanation 1:

//  The first occurrence of 8 in A is at index 3.
//  The last occurrence of 8 in A is at index 4.
//  ans = [3, 4]
// Explanation 2:

//  There is no occurrence of 3 in the array.
//SOlution:
searchRange(A, B)
function searchRange(A, B){
    let arr = A
    let op = []
    let target = B

    let fo = -1
    let lo = -1

    let l = 0
    let r = arr.length - 1
            
    while(l <= r){
        let mid = Math.floor(l + (r - l) / 2)

        if(arr[mid] == target){
            fo = mid
            r = mid - 1
        }
        else if(arr[mid] < target){
            l = mid + 1
        }
        else{
            r = mid - 1
        }
    }
    op[0] = fo

l = 0
r = arr.length - 1

    while(l <= r){
        let mid = Math.floor(l + (r - l) / 2)

        if(arr[mid] == target){
            lo = mid
            l = mid + 1
        }
        else if(arr[mid] < target){
            l = mid + 1
        }
        else{
            r = mid - 1
        }
    }
    op[1] = lo
    return op
}