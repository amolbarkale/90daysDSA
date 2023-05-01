// Q4. Special Subsequences "AG"
// Problem Description
// You have given a string A having Uppercase English letters.

// You have to find how many times subsequence "AG" is there in the given string.

// NOTE: Return the answer modulo 109 + 7 as the answer can be very large.



// Problem Constraints
// 1 <= length(A) <= 105



// Input Format
// First and only argument is a string A.



// Output Format
// Return an integer denoting the answer.



// Example Input
// Input 1:

//  A = "ABCGAG"
// Input 2:

//  A = "GAB"


// Example Output
// Output 1:

//  3
// Output 2:

//  0

let A = "ABCGAG"

getCount(A)
function getCount(A) {
    let str = A
    let count = 0
    let answer = 0

    for (let a = str.length - 1; a >= 0; a--) {
        if (str[a] === "G") {
            count++
        } else if (str[a] === "A") {
            answer += count
        }
    }
return answer % (10**9 + 7)
}