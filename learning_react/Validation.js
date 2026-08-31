// Input Validation & Regex Validation:

// Why validation exists
// In a production app like an Employee Registration Form, validation protects us from:
// Bad data reaching the backend (invalid emails, weak passwords, wrong dates).
// Confusing UX (users submitting forms and only then seeing errors).
// Security issues (simple injection attempts, malformed inputs).
// So we split validation into two layers:

// Input validation logic – rules like “required”, “min length”, “must be a valid email”.
// Regex (pattern) validation – precise pattern checks for emails, passwords, phone numbers, etc.

// Input Validation Logic: Input validation is the process of checking whether a field’s value satisfies your business rules before you accept it.

// Typical Rules:
// Required/Not Empty
// Minimum/Maimum Length
// Type Checks(number, date)
// Custom Rules(Password Strength, allowed Characters).

// Simple React Pattern: Controlled + Errors State
function SimpleValidatedName() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    setError(validateName(value));
  };

  return (
    <div>
      <input value={name} onChange={handleChange} placeholder="Full name" />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

// Regex Validation: Pattern Matching - A regular expression (regex) is a pattern that describes allowed text shapes. In JavaScript, you use it with .test(value) to check if a string matches.

// // Email (practical, widely used)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password: min 8 chars, at least 1 lowercase, 1 uppercase, 1 digit
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// Optional: phone (basic international-ish)
const PHONE_REGEX = /^\+?\d{7,15}$/;

// Example:
if (!EMAIL_REGEX.test(email)) {
  return "Enter a valid email address";
}

// Real Time Error Messages:
// In production, We don’t just validate on submit. You want inline, real-time feedback so users can fix mistakes immediately.

// Common strategy:
// On blur (when user leaves the field): run validation and show errors.
// After first error: re-validate on every change so the message clears as they fix it.
// Never show errors before the user has dirty the field (avoid “aggressive” UX).

// React Pattern with dirty Flags:
function EmailField() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);

  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    if (!EMAIL_REGEX.test(value)) return "Enter a valid email address";
    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (dirty) setError(validateEmail(value)); // re-validate after first blur
  };

  const handleBlur = () => {
    setDirty(true);
    setError(validateEmail(email));
  };

  const showError = dirty && email.length > 0 && error;

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="you@company.com"
        className={error ? "border-red-500" : "border-gray-300"}
      />
      {showError && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
