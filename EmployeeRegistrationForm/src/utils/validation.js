// Common regex patterns
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password: min 8 chars, at least 1 lowercase, 1 uppercase, 1 digit
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// Phone: optional, but if present: allow + and digits, length 7–15
export const PHONE_REGEX = /^\+?\d{7,15}$/;

/**
 * Validate full name:
 * - Required
 * - Min 2 characters
 * - Only letters, spaces, and basic punctuation (.,-',)
 */
export const validateFullName = (value) => {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Full name is required";
  }

  if (trimmed.length < 2) {
    return "Full name must be at least 2 characters";
  }

  // Allow letters, spaces, and a few punctuation marks
  const namePattern = /^[a-zA-Z\s.,'-]+$/;
  if (!namePattern.test(trimmed)) {
    return "Full name can only contain letters, spaces, and basic punctuation";
  }

  return "";
};

/**
 * Validate email:
 * - Required
 * - Must match EMAIL_REGEX
 */
export const validateEmail = (value) => {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Email is required";
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return "Enter a valid email address";
  }

  return "";
};

/**
 * Validate password:
 * - Required
 * - Must match PASSWORD_REGEX (min length + complexity)
 */
export const validatePassword = (value) => {
  if (!value) {
    return "Password is required";
  }

  if (!PASSWORD_REGEX.test(value)) {
    return "Password must be at least 8 characters and include uppercase, lowercase, and a number";
  }

  return "";
};

/**
 * Validate department:
 * - Required
 * - Must be one of allowed values
 */
const ALLOWED_DEPARTMENTS = ["engineering", "product", "design", "hr", "sales"];

export const validateDepartment = (value) => {
  if (!value) {
    return "Department is required";
  }

  if (!ALLOWED_DEPARTMENTS.includes(value)) {
    return "Please select a valid department";
  }

  return "";
};

/**
 * Validate joining date:
 * - Required
 * - Must be a valid ISO date string (YYYY-MM-DD)
 * - No restriction on past/future (as per your requirement)
 */
export const validateJoiningDate = (value) => {
  if (!value) {
    return "Joining date is required";
  }

  // Basic check: must be a valid date
  const dateObj = new Date(value);
  if (Number.isNaN(dateObj.getTime())) {
    return "Enter a valid joining date";
  }

  return "";
};

/**
 * Validate phone (optional):
 * - If empty → valid (because optional)
 * - If non-empty → must match PHONE_REGEX
 */
export const validatePhone = (value) => {
  const trimmed = value.trim();

  if (!trimmed) {
    return ""; // optional field, empty is fine
  }

  if (!PHONE_REGEX.test(trimmed)) {
    return "Enter a valid phone number (e.g. +91 9876543210)";
  }

  return "";
};
