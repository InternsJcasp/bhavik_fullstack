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
    setFieldErrors({});
    setError(null);

    const errors = validateRegisterForm(values);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      const result = registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (!result.success) {
        setError(result.message);
        return;
      }

      login(result.user);
      alert("Successfully registered");
      navigate("/dashboard", { replace: true });
    } catch {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, register, fieldErrors };
};
