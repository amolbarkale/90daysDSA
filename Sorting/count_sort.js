arr = [8,9,10]
let max = 0
for (let index = 0; index < arr.length; index++) {
    max = Math.max(max, arr[index])
}
let tempArr = new Array(max+1).fill(0)
let op = []

for(let i = 0; i < arr.length; i++) {
    tempArr[arr[i]] += 1
}

for(let i = 1; i < tempArr.length; i++) {
    for(let j = 1; j <= tempArr[i]; j++) {
        op.push(i)
    }
}
console.log('op:', op)