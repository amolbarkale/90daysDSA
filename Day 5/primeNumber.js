
function getFactors(num) {
    let sqrtOfN = Math.sqrt(num);
    let factors = 0;
  
    for (let i = 1; i <= sqrtOfN; i++) {
      if (num % i === 0 && sqrtOfN === i) factors += 1;
  
      else if (num % i === 0) factors += 2;
    }
    
    if(factors === 2) console.log("pime number", num)
    else if(factors !== 2) console.log("Not a pime number", num)
  }
  getFactors(num);