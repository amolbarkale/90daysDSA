
let arr = [0, 1, 0, 1, 0, 1, 1];

let k = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0 && arr[k] !== 0) k = i;

    if (arr[i] === 1) {
        [arr[k], arr[i]] = [arr[i], arr[k]]
        k++
    }
}
console.log('arr:', arr)