// Writes Validation Logic.

export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (typeof email !== "string" || !email.trim()) return false;
  else if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const isValidPassword = (password) => {
  if (typeof password !== "string" || !password.trim() || password.length < 6) {
    return false;
  } else {
    return true;
  }
};

export const validateRegisterForm = (values) => {
  const { name, email, password, confirmPassword } = values;
  const errors = {};

  if (typeof name !== "string" || !name.trim()) {
    errors.name = "Name is required";
  } else if (name.length < 3 || name.length > 40) {
    errors.name = "Name can be between 3 and 40 characters";
  }
  if (typeof email !== "string" || !email.trim()) {
    errors.email = "Email is Required";
  } else if (!isValidEmail(email)) {
    errors.email = "Please Enter a Valid Email Address.";
  }

  if (typeof password !== "string" || !password.trim()) {
    errors.password = "Password is required.";
  } else if (!isValidPassword(password)) {
    errors.password = "Please Enter a valid Password.";
  }

  if (typeof confirmPassword !== "string" || !confirmPassword.trim()) {
    errors.confirmPassword = "Confirm password is required.";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Please write correct Confirm Password.";
  }

  return errors;
};
