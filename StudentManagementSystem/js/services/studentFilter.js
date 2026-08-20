// Filtering:

// Approach:
// 1. Use filter() because we may need multiple students as the result.
// 2. Traverse every student.
// 3. Check whether the student's marks exactly match the given marks.
// 4. filter() automatically returns all students that satisfy the condition.

// Filter By Marks:
export const filterByMarks = (students, marks) => {
  // students = complete student array, marks = marks we want to match
  return students.filter((student) => student.marks === marks); // student = current student being checked
};

// Approach:
// 1. Use filter() because multiple students can have marks greater than or equal to the given value.
// 2. Traverse every student.
// 3. Keep students whose marks are greater than or equal to the given marks.

// Filter by Minimum Marks:
export const filterByMinimumMarks = (students, marks) => {
  // students = complete student array, marks = minimum marks required
  return students.filter((student) => student.marks >= marks); // student = current student being checked
};

// Approach:
// 1. Use filter() because multiple students can have marks less than or equal to the given value.
// 2. Traverse every student.
// 3. Keep students whose marks are less than or equal to the given marks.

// Filter by Maximum marks:
export const filterByMaximumMarks = (students, marks) => {
  // students = complete student array, marks = maximum marks allowed
  return students.filter((student) => student.marks <= marks); // student = current student being checked
};

// Approach:
// 1. Use filter() because multiple students can satisfy both conditions.
// 2. First check whether the student's course matches the requested course.
// 3. Then check whether the student's marks are greater than or equal to the minimum marks.
// 4. && ensures BOTH conditions must be true.

// Filter based on Course and Marks: For Ex- Show me the Javascript Students who had scored more than 80
export const filterByCourseAndMinimumMarks = (students, course, marks) => {
  // students = complete array, course = required course, marks = minimum marks
  return students.filter((student) => {
    // student = current student being checked
    return student.course === course && student.marks >= marks;
  });
};

// Approach:
// 1. Use filter() because multiple students can satisfy both conditions.
// 2. Check whether the student's course matches the requested course.
// 3. Check whether the student's marks are less than or equal to the maximum marks.
// 4. && ensures BOTH conditions must be true.

// Filter based on Course and Marks: For Ex- Show me the Javascript Students who had scored less than 80
export const filterByCourseAndMaximumMarks = (students, course, marks) => {
  // students = complete array, course = required course, marks = maximum marks
  return students.filter((student) => {
    // student = current student being checked
    return student.course === course && student.marks <= marks;
  });
};

// Approach:
// 1. Use one filter() so multiple conditions can be handled together.
// 2. Course is optional. If course is not provided, ignore the course condition.
// 3. minMarks is optional. If minMarks is not provided, ignore the minimum-marks condition.
// 4. maxMarks is optional. If maxMarks is not provided, ignore the maximum-marks condition.
// 5. If an option exists, its condition must be satisfied.
// 6. && ensures all provided conditions are satisfied.
// 7. || allows a condition to be skipped when that option is not provided.

// Filter based on together like Course, MinMarks, MaxMarks: if no minmarks and maxmarks are there in parameter then only based on course students will be returned and if course and max marks not given then only based on minmarks same in this way:

export const filterStudents = (students, options) => {
  // students = complete student array, options = object containing optional filtering conditions
  return students.filter((student) => {
    // student = current student being checked
    return (
      (!options.course || options.course === student.course) &&
      (!options.minMarks || student.marks >= options.minMarks) &&
      (!options.maxMarks || student.marks <= options.maxMarks)
    );
  });
};
