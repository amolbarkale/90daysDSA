//ip  const arr = [3, 2, 1, 56, 10000, 167];
//op  min = 1, max =  10000

const arr = [3, 2, 1, 56, 10000, 167];
let min = Infinity;
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
}
// console.log(min, max);
//////////////////////////////////////////////////////////////////////////////////////

const getMin = (arr) => {
  return Math.min(arr);
};

const getMax = (arr) => {
  return Math.max(arr);
};

console.log("for min", Math.min(...arr));
console.log("for max", Math.max(...arr));
