// Basic Version:

// Approach:
// 1. ID unique hoti hai, isliye hume maximum ek student chahiye.
// 2. find() use karte hain because find() first matching element return karta hai.
// 3. Student ki ID ko given ID ke saath compare karte hain.

// Search By Id:
// export const searchById = (students, id) => { // students = complete student array, id = student ID we want to search
//   return students.find((student) => id === student.id); // student = current student being checked
// };

// Approach:
// 1. Name ke basis par students search karne hain.
// 2. filter() use karte hain because same name ke multiple students ho sakte hain.
// 3. Student ka name given name ke saath compare karte hain.

// Search By Name:

// export const searchByName = (students, name) => { // students = complete student array, name = name we want to search
//   return students.filter((student) => name === student.name); // student = current student being checked
// };

// Approach:
// 1. Course ke basis par multiple students mil sakte hain.
// 2. Isliye filter() use karte hain.
// 3. Student ke course ko given course ke saath compare karte hain.

// Search By Course:

// export const searchByCourse = (students, course) => { // students = complete student array, course = course we want to search
//   return students.filter((student) => student.course === course); // student = current student being checked
// };

// Improved Version:

// Approach:
// 1. ID unique hoti hai, isliye ek student search karna hai.
// 2. find() first matching student return karta hai.
// 3. ID exact match honi chahiye.

// Search By Id:
export const searchById = (students, id) => {
  // students = complete student array, id = unique ID we want to search
  return students.find((student) => id === student.id); // student = current student being checked
};

// Approach:
// 1. Name search ko case-insensitive banana hai.
// 2. User "rahul", "Rahul" ya "RAHUL" likhe to same student milna chahiye.
// 3. Search karne se pehle given name ko lowercase mein convert karte hain.
// 4. Student ka stored name bhi lowercase mein convert karke compare karte hain.
// 5. normalizedName variable baar-baar name.toLowerCase() karne se bachata hai.

// Search By Name: converted name to Lowercase to keep both same like json data values and parameter values

export const searchByName = (students, name) => {
  // students = complete student array, name = name provided by user
  const normalizedName = name.toLowerCase(); // normalizedName = lowercase version of input name for case-insensitive comparison
  return students.filter(
    (student) => normalizedName === student.name.toLowerCase(), // student = current student being checked
  );
};

// Approach:
// 1. Course search ko case-insensitive banana hai.
// 2. User "javascript", "Javascript" ya "JAVASCRIPT" likhe to same course match ho.
// 3. Given course aur student's course dono ko lowercase mein convert karke compare karte hain.

// Search By Course: converted course to Lowercase to keep both same like json data values and parameter values

export const searchByCourse = (students, course) => {
  // students = complete student array, course = course provided by user
  return students.filter(
    (student) => student.course.toLowerCase() === course.toLowerCase(), // student = current student being checked
  );
};
