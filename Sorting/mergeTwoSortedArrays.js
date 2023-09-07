// Merge Two Sorted arrays, then get final sorted array.

let A = [1, 3, 5, 7, 9];
let B = [2, 4, 6, 8];

// approach 1: add all the elements of both arrays in array C, and sort them finally.

// approah 2: use two pointer approach as we have an advantage of sorted arrays. -->

console.log('solve(A, B):', solve(A, B))
        function solve(A, B){
            
            let outputArray = []
            let i = 0, j = 0, k = 0
            
            while (i < A.length && j < B.length){
   
               if(A[i] <= B[j]) {
                   outputArray[k] = A[i]
                   i++
                   k++
               }
               else {
                   outputArray[k] = B[j]
                   j++
                   k++
               }
           }
   
           while( i < A.length) {
            console.log('solve:')

               outputArray[k] = A[i]
               i++
               k++
           }
           while(j < B.length) {
            console.log('solve1:')

               outputArray[k] = B[j]
               j++
               k++
           }
       return outputArray
       }


