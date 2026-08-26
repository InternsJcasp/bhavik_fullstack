function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let currentDay = 0; currentDay < temperatures.length; currentDay++) {
    while (
      stack.length > 0 &&
      temperatures[currentDay] > temperatures[stack[stack.length - 1]]
    ) {
      const previousDay = stack.pop();

      result[previousDay] = currentDay - previousDay;
    }
    stack.push(currentDay);
  }

  return result;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
