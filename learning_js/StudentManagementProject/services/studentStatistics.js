// For Student Statistics we are gonna use reduce
// Operations that are gonna happen: Total Marks, Avg Marks, Highest & Lowest Marks, No. of Students, Course-Wise Statistics.

// Approach:
// 1. Traverse every student using reduce().
// 2. Start the accumulator from 0 because we are calculating a total.
// 3. Add each student's marks to the accumulator.
// 4. Return the final accumulated marks.

// Total Marks:
export const getTotalMarks = (students) => {
  return students.reduce((acc, curr) => {
    // acc = stores the running total, curr = stores the current student
    acc += curr.marks;
    return acc;
  }, 0); // 0 = initial total because no marks have been added yet
};

// Approach:
// 1. Traverse all students using reduce().
// 2. Add every student's marks to calculate the total.
// 3. Divide the total by the number of students.
// 4. Use toFixed(2) to keep the average up to 2 decimal places.

// Average Marks:
export const getAverageMarks = (students) => {
  let result = students.reduce((acc, curr) => {
    // result = stores final total marks, acc = running total, curr = current student
    acc += curr.marks;
    return acc;
  }, 0); // 0 = initial total
  return (result / students.length).toFixed(2);
};

// Approach:
// 1. Traverse every student using reduce().
// 2. Keep the highest marks found so far in the accumulator.
// 3. Compare the current student's marks with the highest marks.
// 4. Return the highest value.

// Highest Marks:
// export const getHighestMarks = (students) => {
//   return students.reduce((acc, curr) => { // acc = highest marks found so far, curr = current student
//     acc < curr.marks ? (acc = curr.marks) : acc;
//     return acc;
//   }, -Infinity); // -Infinity = ensures the first student's marks can become the highest
// };

// Approach:
// 1. Traverse every student using reduce().
// 2. Keep the lowest marks found so far in the accumulator.
// 3. Compare the current student's marks with the lowest marks.
// 4. Return the lowest value.

// Lowest Marks:
// export const getLowestMarks = (students) => {
//   return students.reduce((acc, curr) => { // acc = lowest marks found so far, curr = current student
//     acc > curr.marks ? (acc = curr.marks) : acc;
//     return acc;
//   }, Infinity); // Infinity = ensures the first student's marks can become the lowest
// };

// Approach:
// 1. Use students.length because we only need the number of elements.
// 2. No reduce() is required because the array already provides its length.
// 3. Return the total number of students.

// Total Number of Students:
export const getTotalNumberOfStudents = (students) => {
  return `Total Numbers of Students are ${students.length}`;
};

// Improved Version for Highest and Lowest Marks using INbuilt functions like max and min

// Approach:
// 1. Traverse all students using reduce().
// 2. Keep the highest marks found so far in the accumulator.
// 3. Math.max() compares the current highest value with the current student's marks.
// 4. Return the highest marks.

// Highest Marks:
export const getHighestMarks = (students) => {
  return students.reduce(
    (highest, student) => Math.max(highest, student.marks), // highest = highest marks found so far, student = current student
    -Infinity, // -Infinity = starting value so any valid marks can become the highest
  );
};

// Approach:
// 1. Traverse all students using reduce().
// 2. Keep the lowest marks found so far in the accumulator.
// 3. Math.min() compares the current lowest value with the current student's marks.
// 4. Return the lowest marks.

// Lowest Marks:
export const getLowestMarks = (students) => {
  return students.reduce(
    (lowest, student) <= Math.min(lowest, student.marks), // lowest = lowest marks found so far, student = current student
    Infinity, // Infinity = starting value so any valid marks can become the lowest
  );
};

// Approach:
// 1. Traverse every student using reduce().
// 2. Use the student's course as a dynamic object key.
// 3. If the course already exists, increase count and add marks.
// 4. If the course does not exist, create a new course object.
// 5. Store count, total marks and average marks for every course.

// Course-Wise Stats:
export const getCoursewiseStats = (students) => {
  return students.reduce((studentData, student) => {
    // studentData = stores statistics grouped by course, student = current student

    if (studentData[student.course]) {
      studentData[student.course].count++;
      studentData[student.course].totalMarks += student.marks;
      studentData[student.course].averageMarks =
        studentData[student.course].totalMarks /
        studentData[student.course].count;
    } else {
      studentData[student.course] = {
        count: 1,
        totalMarks: student.marks,
        averageMarks: student.marks,
      };
    }

    return studentData;
  }, {}); // {} = initial empty object because statistics will be grouped by course
};
