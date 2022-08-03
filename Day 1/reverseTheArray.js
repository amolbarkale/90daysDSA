// Q] Reverse the given array

// let arr = [4, 5, 1, 2];
let arr = [599,12,65,89,555];

let start = 0, end = arr.length - 1;

while (start < end) {
   [arr[start], arr[end]] = [arr[end],arr[start]]
    start++;
     end--;
}
console.log('arr:', arr);