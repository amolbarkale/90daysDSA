// Q] Linear search an element in the given array

let arr = [20, 45, 27, 47, 55, 67, 75, 88, 90];

let search = 67;

const linearSearch = (arr) => {
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] === search) {
      return a;
    }
  }
  return -1
};
let result = linearSearch(arr);

console.log('index:', result)

// Time Complexity => O(n)
// Space Complexity => O(1)