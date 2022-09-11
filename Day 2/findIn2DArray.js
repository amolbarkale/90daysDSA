// Q] Given 2D array. Find out the K target ele index from the array. The given constraints are:

// 1. int. are sortef from left to right
// 2. first int. of each row > last int. of prev. row
let arr = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];
// virtual array => [1, 3, 5, 7,10, 11, 16, 20, 23, 30, 34, 60]
let K = 60;

function findEleFrom2DArray(arr, K){
    let m = arr.length; // number of rows
    
    if(m === 0){
        return console.log("-1")
    }

    let n = arr[0].length; // number of columns

    let low = 0;
    let high = (n * m) - 1;
    
    while (low <= high){

        let mid = low + Math.floor((high-low)/2);

        // columnNumber = mid % n
        // rowNumber = mid/n,

        let columnNumber = mid % n;
        let rowNumber = Math.floor(mid/n);

        let midElement = arr[rowNumber][columnNumber]
        console.log('midElement:', midElement)
        
        if(K === midElement){
            return console.log("Element availabel")
        }
        else if(K < midElement){
            high = mid-1
        }
        else{
            low = mid + 1
        }
    }
    return console.log("-1")

}

findEleFrom2DArray(arr, K)
