const studentsList = [
  { id: 101, name: "Rahul", age: 20, grade: "B" },
  { id: 102, name: "Priya", age: 21, grade: "B" },
  { id: 103, name: "Amit", age: 19, grade: "C" },
];

const studentDetails = (students, id) => {
  const toBeUpdatedStudent = students.find((student) => student.id === id);
  return toBeUpdatedStudent;
};

const toBeUpdatedStudent = studentDetails(studentsList, 102);

console.log(studentDetails(studentsList, 102));

const updatedData = { name: "Richa", grade: "B+" };
const updatedStudent = Object.assign(toBeUpdatedStudent, updatedData);

console.log(updatedStudent);
console.log(studentsList);
