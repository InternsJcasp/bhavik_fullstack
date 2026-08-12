import students from "./data/students.json" with { type: "json" };
import {
  filterByCourseAndMinimumMarks,
  filterByMarks,
  filterByMaximumMarks,
  filterByMinimumMarks,
  filterByCourseAndMaximumMarks,
  filterStudents,
} from "./services/studentFilter.js";
import {
  searchByCourse,
  searchById,
  searchByName,
} from "./services/studentSearch.js";
import { sortByAge, sortByMarks, sortByName } from "./services/studentSort.js";
import {
  getAverageMarks,
  getHighestMarks,
  getTotalMarks,
  getLowestMarks,
  getTotalNumberOfStudents,
  getCoursewiseStats,
} from "./services/studentStatistics.js";

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

// Filtering:

// filter by Exact Marks:
// console.log(filterByMarks(students, 89));

// filter by Minimum Marks:
// console.log(filterByMinimumMarks(students, 89));

// filter by Maximum Marks:
// console.log(filterByMaximumMarks(students, 89));

// filter by course and Minimum Marks:
// console.log(filterByCourseAndMinimumMarks(students, "Javascript", 80));

// filter by course and Minimum Marks:
// console.log(filterByCourseAndMaximumMarks(students, "Javascript", 80));

// filter based on given course and min-max range of Marks:
// console.log(
//   filterStudents(students, {
//     course: "Javascript",
//     minMarks: 84,
//     maxMarks: 95,
//   }),
// );

// Student Statistics:

// Total Marks:
// console.log(getTotalMarks(students));

// Average Marks:
// console.log(getAverageMarks(students));

// Highest Marks:
// console.log(getHighestMarks(students));

// Lowest Marks:
// console.log(getLowestMarks(students));

// Total No. of Students:
// console.log(getTotalNumberOfStudents(students));

// Course Wise Statistics includes: count, totalMarks, averageMarks"
console.log(getCoursewiseStats(students));
