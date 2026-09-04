// Form + Services ke beech ka Layer: useRegister
// Form component ko simple interface dena: “bas submit handler do, baaki main handle kar lunga”.

import { useState } from "react";
import { validateRegisterForm } from "../../../shared/utils/validators";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const navigate = useNavigate();
  const { login } = useAuth();

  const register = (values) => {
    // Clear Previous Errors
    setFieldErrors({});
    setError(null);

    // Validate Errors
    const errors = validateRegisterForm(values);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    // Start Loading
    setIsLoading(true);

    // call service.
    try {
      // store details in result
      const result = registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      if (!result.success) {
        setError(result.message);
        setIsLoading(false);
        return;
      }

      // succes: login + redirect:
      login(result.user.email, result.user.password);
      alert("Successfully registered");
      navigate("/dashboard");
    } catch {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, register, fieldErrors };
};
