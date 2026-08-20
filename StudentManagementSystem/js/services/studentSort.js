// Approach:
// 1. sort() original array ko modify karta hai.
// 2. Original student data ko change nahi karna hai.
// 3. Isliye spread operator se shallow copy banate hain.
// 4. Marks ko ascending order mein sort karte hain.
// 5. a.marks - b.marks:
//    negative → a pehle
//    positive → b pehle
//    0 → order same

// Sort By Marks:
export const sortByMarks = (students) => {
  const copyOfStudentData = [...students]; // copyOfStudentData = original array ko modify hone se bachane ke liye new array copy
  return copyOfStudentData.sort((a, b) => a.marks - b.marks); // a = current first student, b = current second student being compared
};

// Approach:
// 1. sort() original array ko modify karta hai.
// 2. Original student data ko preserve karne ke liye copy create karte hain.
// 3. Students ko age ke ascending order mein sort karte hain.
// 4. a.age - b.age numeric comparison perform karta hai.

// Sort By Age:
export const sortByAge = (students) => {
  const copyOfStudentData = [...students]; // copyOfStudentData = original array ko preserve karne ke liye copied array
  return copyOfStudentData.sort((a, b) => a.age - b.age); // a = first student, b = second student being compared
};

// Approach:
// 1. Original student array ko modify nahi karna hai, isliye copy create karte hain.
// 2. Har student ka name compare karna hai.
// 3. charCodeAt(0) name ke first character ka Unicode/character code deta hai.
// 4. Character codes compare karke names ko ascending order mein arrange karte hain.

// Sort By Names:
export const sortByName = (students) => {
  const copyOfStudentData = [...students]; // copyOfStudentData = original array ko preserve karne ke liye copied array
  return copyOfStudentData.sort(
    (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0), // a = first student, b = second student being compared
  );
};
