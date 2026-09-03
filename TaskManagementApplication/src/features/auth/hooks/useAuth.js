import { useState, useEffect } from "react";
import { authService } from "../services/authService";

export function useAuth() {
  const [user, setUser] = useState(() => authService.getCurrentUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // First time Load hone par user check
    setUser(authService.getCurrentUser());
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const user = authService.login(email, password);
    setUser(user);
    return user;
  };
  const logout = () => {
    authService.logout();
    setUser(null);
  };
  return { user, loading, login, logout };
}
