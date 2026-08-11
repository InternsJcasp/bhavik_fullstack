// Sort By Marks:
export const sortByMarks = (students) => {
  const copyOfStudentData = [...students];
  return copyOfStudentData.sort((a, b) => a.marks - b.marks);
};

// Sort By Age:
export const sortByAge = (students) => {
  const copyOfStudentData = [...students];
  return copyOfStudentData.sort((a, b) => a.age - b.age);
};

// Sort By Names:
export const sortByName = (students) => {
  const copyOfStudentData = [...students];
  return copyOfStudentData.sort(
    (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0),
  );
};
