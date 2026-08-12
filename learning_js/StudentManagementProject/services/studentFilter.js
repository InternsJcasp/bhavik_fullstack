// Filtering:

// Filter By Marks:
export const filterByMarks = (students, marks) => {
  return students.filter((student) => student.marks === marks);
};

// Filter by Minimum Marks:
export const filterByMinimumMarks = (students, marks) => {
  return students.filter((student) => student.marks >= marks);
};

// Filter by Maximum marks:
export const filterByMaximumMarks = (students, marks) => {
  return students.filter((student) => student.marks <= marks);
};

// Filter based on Course and Marks: For Ex- Show me the Javascript Students who had scored more than 80
export const filterByCourseAndMinimumMarks = (students, course, marks) => {
  return students.filter((student) => {
    return student.course === course && student.marks >= marks;
  });
};

// Filter based on Course and Marks: For Ex- Show me the Javascript Students who had scored less than 80
export const filterByCourseAndMaximumMarks = (students, course, marks) => {
  return students.filter((student) => {
    return student.course === course && student.marks <= marks;
  });
};

// Filter based on together like Course, MinMarks, MaxMarks: if no minmarks and maxmarks are there in parameter then only based on course students will be returned and if course and max marks not given then only based on minmarks same in this way:

export const filterStudents = (students, options) => {
  return students.filter((student) => {
    return (
      (!options.course || options.course === student.course) &&
      (!options.minMarks || student.marks >= options.minMarks) &&
      (!options.maxMarks || student.marks <= options.maxMarks)
    );
  });
};
