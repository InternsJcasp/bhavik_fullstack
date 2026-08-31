// Best time to buy and sell stock and find profit from that.

// Approach: I will keep minPrice which will hold the minimum value and maxPrice which will hold the maximum value and a profit vaiable which will do currrentPrice-minPrice so I will get profit at the end. with that buy - minPrice, sell-maxPrice

// First Version:
let array = [2, 4, 1, 6, 3, 10];

// function bestTimeToBuySellStock(inputArray) {
//   let minPrice = inputArray[0];
//   let profit = 0;
//   let maxPrice = inputArray[0];

//   for (let i = 1; i < inputArray.length; i++) {
//     if (minPrice > inputArray[i]) {
//       minPrice = inputArray[i];
//     }
//     if (maxPrice < inputArray[i]) {
//       maxPrice = inputArray[i];
//     }
//     profit = inputArray[i] - minPrice;
//   }
//   return { profit: profit, sell: maxPrice, buy: minPrice };
// }

// console.log(bestTimeToBuySellStock(array));

// Second Version:

function bestTimeToBuySellStock(inputArray) {
  let minPrice = inputArray[0];
  let maxProfit = 0;

  for (let i = 1; i < inputArray.length; i++) {
    if (minPrice > inputArray[i]) {
      minPrice = inputArray[i];
    }

    const currentProfit = inputArray[i] - minPrice;

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }
  return { profit: maxProfit };
}

console.log(bestTimeToBuySellStock(array));
