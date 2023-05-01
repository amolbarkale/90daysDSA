// Given an array A of N integers. Construct prefix sum of the array in the given array itself.
let arr = [1,51,2,2,1,31,2]
function prefixArr(A) {
    let arr = A
    let psum = []
    psum[0] = arr[0]

    for (let i = 1; i < arr.length; i++) {
        psum[i] = psum[i-1] + arr[i]
    }
    return psum

}