// Q] Check if the array has duplicates or not (return true false)

let arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; 
let arr1 = [1, 2, 3, 4,1];
let arr2 = [12, 12,1,];
const data1 = ['a', 'a'];
const data2 = ['a', 'b'];

//................................................................................
// Approach 1 --> 
// checkDuplicatesInArr(arr)

function checkDuplicatesInArr(array) {
    if (new Set(array).size !== array.length) {
       return console.log('exists Duplicates:')
    } else {
       return console.log('NOT exists Duplicates:')
    }
}
//................................................................................
// Approach 2 --> 
console.log(checkDuplicatesUsingSome(data2));

function checkDuplicatesUsingSome(array){
   return  array.some((el)=>array.indexOf(el) !== arraylastIndexOf(el))
}