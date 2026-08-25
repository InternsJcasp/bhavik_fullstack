function stockSpan(prices) {
  const result = new Array(prices.length);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    // Remove all prices smaller than or equal to today's price.
    while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
      stack.pop();
    }

    // Stack empty: no greater price exists on the left.
    if (stack.length === 0) {
      result[i] = i + 1;
    } else {
      // Top index has the nearest previous greater price.
      result[i] = i - stack[stack.length - 1];
    }

    // Save today's index for future days.
    stack.push(i);
  }

  return result;
}

const prices = [100, 80, 60, 70, 60, 75, 85];

console.log(stockSpan(prices));
