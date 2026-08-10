const createUser = (name = "Guest", ...skills) => {
  const user = {
    name,
    skills,
  };

  return user;
};

const user = createUser("Bhavik", "JavaScript", "React", "Node");

const { name, skills } = user;

console.log(`User: ${name}, Skills: ${skills.join(", ")}`);

// In this we have practiced multiple things:
// const
// Arrow Function
// Default Parameter
// Rest Operator
// Object shorthand
// Destructuring
// Template Literal
