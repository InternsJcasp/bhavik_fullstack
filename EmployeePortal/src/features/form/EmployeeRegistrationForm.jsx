import { useState } from "react";
import {
  validateFullName,
  validateEmail,
  validatePassword,
  validateDepartment,
  validateJoiningDate,
  validatePhone,
} from "../../utils/validation";

import InputField from "../../components/forms/InputField";
import SelectField from "../../components/forms/SelectField";
import PasswordField from "../../components/forms/PasswordField";
import SubmitButton from "../../components/forms/SubmitButton";
import ResetButton from "../../components/forms/ResetButton";
import { AppLayout } from "../../app/layout/AppLayout";

const initialFormState = {
  fullName: "",
  email: "",
  password: "",
  department: "",
  joiningDate: "",
  phone: "",
};

const initialErrorsState = {
  fullName: "",
  email: "",
  password: "",
  department: "",
  joiningDate: "",
  phone: "",
};

const initialTouchedState = {
  fullName: false,
  email: false,
  password: false,
  department: false,
  joiningDate: false,
  phone: false,
};

const departmentOptions = [
  { value: "engineering", label: "Engineering" },
  { value: "product", label: "Product" },
  { value: "design", label: "Design" },
  { value: "hr", label: "HR" },
  { value: "sales", label: "Sales" },
];

export default function EmployeeRegistrationForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [touched, setTouched] = useState(initialTouchedState);

  const handleFieldChange = (fieldName, value) => {
    // 1) Update form data
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // 2) If field is already touched, validate immediately
    if (touched[fieldName]) {
      let errorMessage = "";

      switch (fieldName) {
        case "fullName":
          errorMessage = validateFullName(value);
          break;
        case "email":
          errorMessage = validateEmail(value);
          break;
        case "password":
          errorMessage = validatePassword(value);
          break;
        case "department":
          errorMessage = validateDepartment(value);
          break;
        case "joiningDate":
          errorMessage = validateJoiningDate(value);
          break;
        case "phone":
          errorMessage = validatePhone(value);
          break;
        default:
          break;
      }

      setErrors((prev) => ({
        ...prev,
        [fieldName]: errorMessage,
      }));
    }
  };

  const handleFieldBlur = (fieldName) => {
    // 1) Mark as touched
    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    // 2) Validate this field based on current value
    const value = formData[fieldName];
    let errorMessage = "";

    switch (fieldName) {
      case "fullName":
        errorMessage = validateFullName(value);
        break;
      case "email":
        errorMessage = validateEmail(value);
        break;
      case "password":
        errorMessage = validatePassword(value);
        break;
      case "department":
        errorMessage = validateDepartment(value);
        break;
      case "joiningDate":
        errorMessage = validateJoiningDate(value);
        break;
      case "phone":
        errorMessage = validatePhone(value);
        break;
      default:
        break;
    }

    // 3) Update error for this field
    setErrors((prev) => ({
      ...prev,
      [fieldName]: errorMessage,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1) Mark all fields as touched
    const allTouched = {
      fullName: true,
      email: true,
      password: true,
      department: true,
      joiningDate: true,
      phone: true,
    };
    setTouched(allTouched);

    // 2) Validate all fields
    const newErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      department: validateDepartment(formData.department),
      joiningDate: validateJoiningDate(formData.joiningDate),
      phone: validatePhone(formData.phone),
    };

    setErrors(newErrors);

    // 3) If any error, stop here
    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) {
      return;
    }

    // 4) No errors -> simulate submission
    console.log("Form submitted with data:", formData);

    handleReset();
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors(initialErrorsState);
    setTouched(initialTouchedState);
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-xl p-6">
        <h1 className="mb-6 text-2xl font-semibold">Employee Registration</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
        >
          {/* Full Name */}
          <InputField
            id="fullName"
            name="fullName"
            label="Full Name"
            type="text"
            value={formData.fullName}
            onChange={(value) => handleFieldChange("fullName", value)}
            onBlur={() => handleFieldBlur("fullName")}
            error={errors.fullName}
            placeholder="e.g. Bhavik Sharma"
            required
          />

          {/* Email */}
          <InputField
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => handleFieldChange("email", value)}
            onBlur={() => handleFieldBlur("email")}
            error={errors.email}
            placeholder="bhavik123@gmail.com"
            required
          />

          {/* Password */}
          <PasswordField
            id="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={(value) => handleFieldChange("password", value)}
            onBlur={() => handleFieldBlur("password")}
            error={errors.password}
            placeholder="Minimum of 8 characters"
            required
          />

          {/* Department */}
          <SelectField
            id="department"
            name="department"
            label="Department"
            value={formData.department}
            onChange={(value) => handleFieldChange("department", value)}
            onBlur={() => handleFieldBlur("department")}
            error={errors.department}
            options={departmentOptions}
            placeholder="Select department"
            required
          />

          {/* Joining Date */}
          <InputField
            id="joiningDate"
            name="joiningDate"
            label="Joining Date"
            type="date"
            value={formData.joiningDate}
            onChange={(value) => handleFieldChange("joiningDate", value)}
            onBlur={() => handleFieldBlur("joiningDate")}
            error={errors.joiningDate}
            required
          />

          {/* Phone (optional) */}
          <InputField
            id="phone"
            name="phone"
            label="Phone (optional)"
            type="tel"
            value={formData.phone}
            onChange={(value) => handleFieldChange("phone", value)}
            onBlur={() => handleFieldBlur("phone")}
            error={errors.phone}
            placeholder="+91 9876543210"
          />

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <SubmitButton label="Register Employee" />
            <ResetButton onClick={handleReset} />
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
