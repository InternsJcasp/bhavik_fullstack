import students from "./students.json" with { type: "json" };

const studentArray = Array.from(students);
console.log(studentArray[0].id);
