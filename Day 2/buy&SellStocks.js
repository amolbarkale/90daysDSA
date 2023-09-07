// Q] A person will buy and sell stock, we have to find what is the maximum profit he will gain (find buy and sell days)

// day =>     1, 2, 3, 4, 5, 6, 7, 8
// let prices = [5, 7, 1, 3, 6, 14, 5];
let prices = [4,7,5,50];


const findMaxProfit = (arr) => {
  let minPrice = Infinity;

  let maxProfit = 0;

  for (let a = 0; a < arr.length; a++) {

    if (arr[a] < minPrice) {

      minPrice = arr[a];

    } else if (arr[a] - minPrice > maxProfit) {

      maxProfit = arr[a] - minPrice;

    }
  }
  return console.log(maxProfit);
};

findMaxProfit(prices);


// TC => O (n)