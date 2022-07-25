
// let arr = [1,23,-556,89,78,45,12];
// let arr = [1, 556, -556];
let arr = [23,32, 322]

let max = -Infinity; 
let min = Infinity; 

for(let key in arr){
    if( arr[key] >max) max = arr[key]
     if(arr[key] < min) min = arr[key]
}
console.log('max, min:', max, min)