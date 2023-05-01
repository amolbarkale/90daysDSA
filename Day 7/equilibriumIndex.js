// You are given an array A of integers of size N.

// Your task is to find the equilibrium index of the given array

// The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

// If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

// Note:

// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.


// Problem Constraints
// 1 <= N <= 105
// -105 <= A[i] <= 105


// Input Format
// First arugment is an array A .


// Output Format
// Return the equilibrium index of the given array. If no such index is found then return -1.


// Example Input
// Input 1:
// A = [-7, 1, 5, 2, -4, 3, 0]
// Input 2:

// A = [1, 2, 3]


// Example Output
// Output 1:
// 3
// Output 2:

// -1

let A = [-7, 1, 5, 2, -4, 3, 0]

equilibriumInd(A)

function equilibriumInd(A) {
    let arr = A
    let psum = []
    psum[0] = arr[0]

    for (let i = 1; i < arr.length; i++) {
        psum[i] = psum[i - 1] + arr[i]
    }

    for (let j = 0; j < arr.length; j++) {
        if (j === 0) {
            if (0 === psum[arr.length - 1] -psum[j]) {
                return j
            }
        }
        else if (psum[j - 1] === psum[arr.length - 1] - psum[j]) {
            return j
        }
    }
   return -1

}