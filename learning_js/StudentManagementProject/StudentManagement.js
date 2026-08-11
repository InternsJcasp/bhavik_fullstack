import students from "./data/students.json" with { type: "json" };
import {
  searchByCourse,
  searchById,
  searchByName,
} from "./services/studentSearch.js";
import { sortByAge, sortByMarks, sortByName } from "./services/studentSort.js";

// Searching:
// Search Student by Id
// console.log(searchById(students, 105));

// Search Students by Name:
// console.log(searchByName(students, "priya"));

// Search Students by Course:
// console.log(searchByCourse(students, "TypeScript"));

// Sorting:
// sort By Marks:
// console.log(sortByMarks(students));

// sort By Age:
// console.log(sortByAge(students));

// sort By Name:
// console.log(sortByName(students));
