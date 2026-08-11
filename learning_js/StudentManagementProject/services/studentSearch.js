// Basic Version:

// Search By Id:
// export const searchById = (students, id) => {
//   return students.find((student) => id === student.id);
// };

// Search By Name:

// export const searchByName = (students, name) => {
//   return students.filter((student) => name === student.name);
// };

// Search By Course:

// export const searchByCourse = (students, course) => {
//   return students.filter((student) => student.course === course);
// };

// Improved Version:

// Search By Id:
export const searchById = (students, id) => {
  return students.find((student) => id === student.id);
};

// Search By Name: converted name to Lowercase to keep both same like json data values and parameter values

export const searchByName = (students, name) => {
  const normalizedName = name.toLowerCase();
  return students.filter(
    (student) => normalizedName === student.name.toLowerCase(),
  );
};

// Search By Course: converted course to Lowercase to keep both same like json data values and parameter values

export const searchByCourse = (students, course) => {
  return students.filter(
    (student) => student.course.toLowerCase() === course.toLowerCase(),
  );
};
