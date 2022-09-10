// Kth smallest element

// Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

// Example 1:

// Input:
// N = 6
// arr = [7, 10, 4, 3, 20, 15] 
// K = 3
// Output : 7
// Explanation :
// 3rd smallest element in the given 
// array is 7.
// Example 2:

// Input:
// N = 5
// arr[] = 7 10 4 20 15
// K = 4
// Output : 15
// Explanation :
// 4th smallest element in the given 
// array is 15.
// Your Task:
// You don't have to read input or print anything. Your task is to complete the function kthSmallest() which takes the array arr[], integers l and r denoting the starting and ending index of the array and an integer K as input and returns the Kth smallest element.


// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(log(n))
// Constraints:
// 1 <= N <= 105
// 1 <= arr[i] <= 105
// 1 <= K <= N

 let arr = [ 12,2, 3, 5, 7, 4, 19, 26,12, 3, 5, 7, 4, 19, 1,26,0] ;
 let left = 0;
 let right = arr.length-1;
 let k = 4;

console.log(kthSmallest(arr,left, right, k))

function kthSmallest(arr,left, right, k){

    if(left === right){
        return arr[left]
    }
    let pos = partition(arr,left, right);

    let count = pos -left +1

    if(count === k) return arr[pos]

    else if(count > k){
        return kthSmallest(arr, left, pos-1, k)
    }
    else {
        return kthSmallest(arr, pos+1, right, k -count)

    }
}

function partition(arr, l,r){
    let rightEle = arr[r];
    let leftIndex = l;

for(let a=l; a<r; a++){
if(arr[a] <= rightEle){
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[a];
    arr[a] = temp
    leftIndex++;
}
}
let temp = arr[leftIndex];
    arr[leftIndex] = arr[r];
    arr[r] = temp
return leftIndex
}
