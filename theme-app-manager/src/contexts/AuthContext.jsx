import { createContext, useContext, useState } from "react";

// 1. Context create karna
export const AuthContext = createContext(null);

const USER_KEY = "theme-app-manager-user";

// 2. Provider component
export function AuthProvider({ children }) {
  // 3. User state (initial value localStorage se)
  const [user, setUser] = useState(() => {
    // Sirf browser me hi localStorage access kar sakte hain
    if (typeof window === "undefined") return null;

    const stored = localStorage.getItem(USER_KEY);
    if (!stored) return null;

    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 4. Login function
  const login = async ({ email, name, password }) => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const fakeUser = {
        id: "user-1",
        name,
        role: "Intern Engineer",
        email,
      };

      setUser(fakeUser);
      localStorage.setItem(USER_KEY, JSON.stringify(fakeUser));
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // 5. Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  };

  // 6. Provider ko jo value deni hai
  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user, // boolean: user hai to true, nahi to false
  };

  // 7. Provider return karna
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 8. Custom hook
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return ctx;
}
