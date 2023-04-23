const num = 60;
//Note: if num is not a perfect square then floor(sqrt(num)) eg. num == 31

function findSqrt(num) {
  let sqrt;
  let i = 1;
    while (i * i <= num) {
      sqrt = i;
      i ++
    }
    return console.log(sqrt);
  
}
findSqrt(num);
//there will be always root N iterations
