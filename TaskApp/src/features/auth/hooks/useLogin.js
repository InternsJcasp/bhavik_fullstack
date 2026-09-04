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
    // clear Previous Errors
    setIsLoading(true);
    setError(null);

    try {
      // service call karo:
      const result = loginUser(email, password);

      if (!result.success) {
        setError(result.message);
        setIsLoading(false);
        return;
      }

      login(result.user);
      alert("Logged in Successfully.");
      navigate("/dashboard");
    } catch {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return { login: handleLogin, isLoading, error };
};
