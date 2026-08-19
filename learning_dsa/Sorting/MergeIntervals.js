// Concept: Used when overlapping occurs.

// For Ex:
// [1, 3] & [2, 4] & [5, 8] So here [1,3] & [2, 4] overlaps so combine them: [1, 4]

// Useful in Backend for Booking System.
// Booking Timing: 10:00-14:00, 12:00-17:00, 18:00-21:00
// 10:00-14:00 and 12:00-17:00 overlaps so Combine them into [10:00-17:00] & [18:00-21:00]

// Simple Code to implement Merge Intervals:

const mergeIntervals = (intervals) => {
  console.log(intervals);
  console.log(intervals.length);
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];
  console.log(result);

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    console.log("current element is:", current);
    let last = result[result.length - 1];
    console.log("last element is:", last);

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 12],
  ]),
);
