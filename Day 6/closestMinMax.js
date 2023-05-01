// Problem Description
// Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

// and at least one occurrence of the minimum value of the array.



// Problem Constraints
// 1 <= |A| <= 2000



// Input Format
// First and only argument is vector A



// Output Format
// Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



// Example Input
// Input 1:

// A = [1, 3, 2]
// Input 2:

// A = [2, 6, 1, 6, 9]


// Example Output
// Output 1:

//  2
// Output 2:

//  3

A = [2, 6, 1, 6, 9]

findTotalMinMax(A)
function findTotalMinMax(A) {
    if (A.length === 1) return 1
    let arr = A
    let min, max
    let ans = arr.length
    let maxIndex = -1
    let minIndex = -1

    if (arr[0] < arr[1]) {
        min = arr[0]
        max = arr[1]
    }
    else if (arr[1] < arr[0]) {
        min = arr[1]
        max = arr[0]
    }
    //checking min, max using loop
    for (let a = 2; a < arr.length; a++) {
        if (arr[a] > max) max = arr[a];

        else if (arr[a] < min) min = arr[a];

    }
    if (min == max) return 1

    //count min length subarray
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == min) {

            minIndex = i
            if (maxIndex !== -1) {
                ans = Math.min(ans, minIndex - maxIndex + 1)
            }

        } else if (arr[i] == max) {
            maxIndex = i
            if (minIndex !== -1) {
                ans = Math.min(ans, maxIndex - minIndex + 1)
            }
        }
    }
    return ans
}