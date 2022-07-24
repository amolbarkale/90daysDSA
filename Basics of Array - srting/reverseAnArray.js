let arr = [1, 2, 3, 4, 5];

let l = 0,
  r = arr.length - 1;

while (l < r) {
  [arr[l], arr[r]] = [arr[r], arr[l]];
  l++;
  r--;
}
console.log("arr:", arr);
