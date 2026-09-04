import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("current_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    try {
      // Take all Users.
      const users = JSON.parse(localStorage.getItem("app_users") || "[]");

      // Vo user dhundho jiska email match kare.
      const foundUser = users.find((u) => u.email === email);

      // Agar User naa mile to error set karo:
      if (!foundUser) {
        setError("User not Found.");
        return;
      }

      // Ab Password check karenge:
      if (foundUser.password !== password) {
        setError("Invalid Email or Password");
        return;
      }

      // save the founded user:
      setUser(foundUser);
      localStorage.setItem("current_user", JSON.stringify(foundUser));
      setError("");
    } catch {
      setError("Failed to load Users");
      return;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("current_user");
  };

  const value = { login, logout, loading, error, user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext };
