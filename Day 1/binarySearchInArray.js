// Q] Binary search an element in the given array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let search = 9;
let low = 0;
let high = arr.length;

const binarySearch = (arr, low, high, search) => {
  if (low > high) return "wrong info";

  let mid = low + Math.floor((high - low) / 2);

  while (low <= high) {

    if (arr[mid] === search) return mid;

    if (arr[mid] < search) {
      // right side of the mid
      // search space will be mid+1 to high
      return binarySearch(arr, mid + 1, high, search);
    } else {
      // left side of the mid
      // search space will be low to mid-1
      return binarySearch(arr, low, mid - 1, search);
    }
  }
  return -1;
};

console.log(binarySearch(arr, low, high, search));
