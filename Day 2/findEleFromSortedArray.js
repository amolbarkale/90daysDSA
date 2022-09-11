// array is sorted with target K = 210;
let arr = [20, 40, 60, 80, 90, 120, 240];
let K = 210,
  l = 0,
  r = arr.length - 1;

findIndexOfEle(arr, K, l, r);

function findIndexOfEle(arr, K, l, r) {
  while (l < r) {
    let sum = arr[l] + arr[r];

    if (sum === K) {
      return console.log(l, r);
    } else if (sum > K) {
      r--;
    } else {
      l++;
    }
  }
  return -1;
}

// TC => O(n) two pointer approach