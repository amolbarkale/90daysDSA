// Q] Find the all possible subarray from an array

// solution ->
let arr = [1, 2, 3, 4]
for (let a = 0; a < arr.length; a++) {
    for (let b = a; b <= arr.length; b++) {
        a !== b && console.log(arr.slice(a, b))
    }
}