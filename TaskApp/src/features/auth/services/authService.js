// Yahan actual data operations: localStorage se users read/write, register logic.
// Main 2 functions: registerUser(userData), loginUser(email, password)

export const registerUser = (userData) => {
  if (!userData.name || !userData.email || !userData.password) {
    return { success: false, message: "Please fill all the details" };
  }
  try {
    const users = JSON.parse(localStorage.getItem("app_users") || "[]");
    const existingUser = users.find((u) => u.email === userData.email);
    if (existingUser) {
      return { success: false, message: "Email already registered." };
    } else {
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        password: userData.password,
        createdAt: Date.now(),
      };
      users.push(newUser);
      localStorage.setItem("app_users", JSON.stringify(users));
      return { success: true, user: newUser };
    }
  } catch {
    return { success: false, message: "Failed to load users" };
  }
};
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("app_users") || "[]");
  const user = users.find((u) => u.email === email);
  if (!user) {
    return { success: false, message: "User not found" };
  } else {
    if (user.password !== password) {
      return { success: false, message: "Invalid Email or Password" };
    } else {
      return { success: true, user };
    }
  }
};
