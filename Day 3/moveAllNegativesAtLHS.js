// Move all negative numbers to beginning and positive to end with constant extra space

// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

// Examples : 

// Input: [-12, 11, -13, -5, 6, -7, 5, -3, -6]
// Output: -12 -13 -5 -7 -3 -6 11 6 5


// solution 2 with Time complexity: O(N) Space complexity: O(1)
let arr = [-12, -13, -5, -7, -3, 11, 5, 6, -6];

let k = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < 0) {

        if (k != i) {
            [arr[i], arr[k]] = [arr[k], arr[i]];
        }
        k++;
    }
}

// solution 2 ->
let data = [-12, 11, -13, -5, 6, -7, 5, -3, 11];
let left = 0;
let right = data.length - 1;

while (left <= right) {

    if (data[left] < 0 && data[right] < 0) left++

    else if (data[left] > 0 && data[right] < 0) {
        [data[left], data[right]] = [data[right], data[left]]
        left++;
        right--;
    }

    else if (data[left] > 0 && data[right] > 0) right--

    else {
        left++;
        right--;
    }
}
console.log('data:', data)
