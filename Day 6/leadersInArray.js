// Leaders in an array

// Problem Description

// Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.

// NOTE: The rightmost element is always a leader.

// Problem Constraints

// 1 <= N <= 105
// 1 <= A[i] <= 108
// Input Format

// There is a single input argument which a integer array A
// Output Format

// Return an integer array denoting all the **leader elements** of the array.
// NOTE: Ordering in the output doesn't matter.

// Example Input

//  A = [16, 17, 4, 3, 5, 2]
// Example Output

//  [17, 2, 5]

let A = [16, 17, 4, 3, 5, 2]
getCount(A)
function getCount(A) {
        let arr = A
        let max = arr[arr.length - 1]
        let leaders = [max]

        if (arr.length === 1) return arr
        
        for (let i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > max) {
                max = arr[i]
                leaders.push(arr[i])
            }
        }
        return leaders
    }
