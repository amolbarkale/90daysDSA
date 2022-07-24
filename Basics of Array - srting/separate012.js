let ip = [0, 2, 1, 0, 2, 1, 1];

// expected output: [0,0,1,1,2,2]
let zero = 0;
let ones = 0;
let twos = 0;

for (let a = 0; a < ip.length; a++) {
  ip[a] === 0 ? (zero += 1) : ip[a] === 1 ? (ones += 1) : (twos += 1);
}

let temp = 0;

while (zero > 0) {
  ip[temp] = 2;
  zero--;
  temp++;
}
while (ones > 0) {
  ip[temp] = 0;
  ones--;
  temp++;
}
while (twos > 0) {
  ip[temp] = 1;
  twos++;
  temp--;
}
