// Student Create, Read, Update and Delete Operations are performed in this File.

// Mutable Way : Means direct change in original Array.

// Approach:
// 1. New student ko existing array mein directly add karna hai.
// 2. push() original array ko modify karta hai.
// 3. Updated original array return karte hain.

// Create:
export const addStudentMutably = (students, newStudent) => {
  // students = existing student array, newStudent = student to be added
  students.push(newStudent);
  return students;
};

// Approach:
// 1. Pehle findIndex() se student ki position find karni hai.
// 2. Agar student mil gaya, to index -1 nahi hoga.
// 3. splice() se us index par student ko remove karna hai.
// 4. Original array directly modify hota hai.
// 5. Updated array return karna hai.

// Delete:
export const deleteStudentMutably = (students, id) => {
  // students = existing student array, id = student ID to delete
  let index = students.findIndex((student) => student.id === id); // index = jis position par matching student mila
  if (index !== -1) {
    students.splice(index, 1); // index = delete start position, 1 = ek student delete karna hai
  }
  return students;
};

// Immutable Way:

// Approach:
// 1. Original students array ko modify nahi karna.
// 2. Spread operator se existing students ki copy create karni hai.
// 3. New student ko copied array ke end mein add karna hai.
// 4. New array return karna hai.

// Add
export const addStudentImmutably = (students, newStudent) => {
  // students = existing student array, newStudent = student to be added
  return [...students, newStudent];
};

// Approach:
// 1. Original array ko modify nahi karna.
// 2. filter() se har student ko check karna hai.
// 3. Jiski ID given ID ke equal hai usko remove karna hai.
// 4. Baaki students ko new array mein preserve karna hai.

// Delete:
export const deleteStudentImmutably = (students, id) => {
  // students = existing student array, id = student ID to delete
  return students.filter((student) => student.id !== id); // student = current student being checked
};

// Approach:
// 1. Agar ID provide ki gayi hai, to ek specific student find karna hai.
// 2. find() first matching student return karega.
// 3. Agar ID provide nahi ki gayi, to complete students array return karna hai.

// Read:
export const readStudentData = (students, id) => {
  // students = complete student array, id = optional student ID
  if (id) {
    return students.find((student) => student.id === id); // student = current student being checked
  } else {
    return students;
  }
};

// Approach:
// 1. Pehle findIndex() se student ka index find karna hai.
// 2. Agar student nahi mila, findIndex() -1 return karega.
// 3. Student milne par Object.assign() se provided updated fields ko existing student object mein copy karna hai.
// 4. Sirf updatedData mein di gayi fields change hongi.
// 5. Original array aur student object directly modify hoga.

// Update: Mutable
export const updateStudentDataMutable = (students, id, updatedData) => {
  // students = existing array, id = student to update, updatedData = fields to update
  let index = students.findIndex((student) => student.id === id); // index = matching student ki position
  if (index === -1) {
    return students;
  }
  Object.assign(students[index], updatedData); // students[index] = target student, updatedData = new values
  return students;
};

// Approach:
// 1. Original array ko modify nahi karna.
// 2. map() se har student ko traverse karna hai.
// 3. Matching ID wale student ka new object create karna hai.
// 4. ...student se existing fields copy hongi.
// 5. ...updatedData se sirf provided fields overwrite hongi.
// 6. Non-matching students ko exactly as they are return karna hai.
// 7. Isse ek new array create hota hai.

// Update: Immutable
export const updateStudentDataImmutable = (students, id, updatedData) => {
  // students = existing array, id = student to update, updatedData = fields to update
  let studentData = students.map((student) => {
    // studentData = new updated array, student = current student being checked
    if (student.id === id) {
      return {
        ...student, // existing student ki saari properties copy karta hai
        ...updatedData, // provided updated fields ko overwrite karta hai
      };
    }
    return student; // non-matching student ko unchanged return karta hai
  });
  return studentData;
};
