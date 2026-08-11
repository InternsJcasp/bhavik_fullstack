// Higher Order Functions: A higher-order function is a function that accepts another function or returns a function. -> Map, Reduce, Filter

// Here We can see that student is passed as variable and it will only be returned if his marks are greater than 80. Here we used Filter but same with reduce and Map

const students = [
  { marks: 15 },
  { marks: 35 },
  { marks: 89 },
  { marks: 45 },
  { marks: 90 },
];

console.log(students.filter((student) => student.marks >= 80));
