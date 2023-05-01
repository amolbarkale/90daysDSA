// You are given an array A of length N and Q queries given by the 2D array B of size Q×2.

// Each query consists of two integers B[i][0] and B[i][1].

// For every query, your task is to find the count of even numbers in the range from A[B[i][0]] to A[B[i][1]].



// Problem Constraints
// 1 <= N <= 105
// 1 <= Q <= 105
// 1 <= A[i] <= 109
// 0 <= B[i][0] <= B[i][1] < N


// Input Format
// First argument A is an array of integers.
// Second argument B is a 2D array of integers.


// Output Format
// Return an array of integers.


// Example Input
// Input 1:
// A = [1, 2, 3, 4, 5]
// B = [   [0, 2] 
//         [2, 4]
//         [1, 4]   ]
// Input 2:
// A = [2, 1, 8, 3, 9, 6]
// B = [   [0, 3]
//         [3, 5]
//         [1, 3] 
//         [2, 4]   ]


// Example Output
// Output 1:
// [1, 1, 2]
// Output 2:
// [2, 1, 1, 1]


let A = [1, 2, 3, 4, 5]
let B = [   [0, 2] 
        [2, 4]
        [1, 4]   ]

printEvens(A, B)
function printEvens(A, B) {
    let arr = A
    let queries = B
    let query = 0
    let psum = []
    let outputArr = []
    // step1: let even = 1 and odd = 0 in the array, and create an array as per the assumptions
    for (let a = 0; a < arr.length; a++) {
        if (parseInt(arr[a]) % 2 == 0) psum[a] = 1

        else psum[a] = 0
    }
    // step2: now create a psum array from the psum 
    for (let b = 1; b < arr.length; b++) {
        psum[b] = psum[b - 1] + psum[b]
    }

    // create an output array from givrn formula of prefix sum,

    while (query < queries.length) {
        let [L, R] = queries[query]

        if (L === 0)  outputArr[query] = psum[R]

        else outputArr[query] = psum[R] - psum[L - 1]
    
        query++
    }
    return outputArr
}