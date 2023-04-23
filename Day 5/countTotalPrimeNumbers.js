//Q]Count total numbers of prime numbers less than or equal to the given input "num"

let numberOfPrimeNumbers = 0;
let num = 10;

for (let a = 0; a <= num; a++) {
  let isPrime = getFactors(a);
  if (isPrime) numberOfPrimeNumbers++;
}

function getFactors(integer) {
  let factors = 0;
  for (let i = 0; i * i <= integer; i++) {
    if (integer % i === 0 && integer / i === i) factors += 1;
    else if (integer % i === 0) factors += 2;
  }
  if (factors === 2) return true;
  return false;
}
console.log("numberOfPrimeNumbers", numberOfPrimeNumbers);

//  Small optimization.........................................................................
countPrimes(3)
function countPrimes(n) {
// Create an array of booleans representing whether each index is prime or not
  const isPrime = new Array(n).fill(true);
  
// Mark 0 and 1 as not prime (not necessary for the algorithm, but avoids some unnecessary iterations)
  isPrime[0] = false;
  isPrime[1] = false;
  
// Iterate over all numbers up to the square root of n
  for (let i = 2; i * i < n; i++) {
    // If i is prime, mark all its multiples as not prime
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        console.log('false:', false, j )
        isPrime[j] = false;
      }
    }
  }
  
// Count the number of primes (i.e., the number of true values in the isPrime array)
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;
    }
  }
  
  return console.log("count",count);
}