const num = 100;
// brute force......................................................................................
function getAllFactors(num) {
  let factors = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors++;
  }

  return console.log("getAllFactors", factors);
}

getAllFactors(num);

// optimization of  code......................................................................................

function getAllFactors(num) {
  let factors = 0;

  for (let i = 1; i*i <= num; i++) {
    if (num % i === 0 && i === num/i) factors += 1;

    else if (num % i === 0) factors += 2;
  }
  return console.log("AllFactors = ",factors)
  

}
getAllFactors(36);