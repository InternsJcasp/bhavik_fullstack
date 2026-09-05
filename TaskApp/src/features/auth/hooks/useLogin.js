import { useState } from "react";
import { useAuth } from "./useAuth";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = loginUser(email, password);

      if (!result.success) {
        setError(result.message);
        return;
      }

      login(result.user);
      navigate("/dashboard", { replace: true });
    } catch {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { login: handleLogin, isLoading, error };
};
