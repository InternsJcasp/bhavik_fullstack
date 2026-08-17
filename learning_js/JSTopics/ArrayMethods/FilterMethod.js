// Data Filteration:
const studentsList = [
  { id: 101, name: "Rahul", age: 20, grade: "B", course: "MERN" },
  { id: 102, name: "Priya", age: 21, grade: "B", course: "Data Science" },
  { id: 103, name: "Amit", age: 19, grade: "C", course: "Management" },
];

const mernStudents = studentsList.filter(
  (student) => student.course === "MERN",
);
console.log(mernStudents);