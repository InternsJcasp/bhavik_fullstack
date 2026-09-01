import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Login call karna
    await login({ email, name, password });

    // Login ke baad dashboard pe redirect
    navigate("/dashboard");
  };

  return (
    <div className="h-[90vh] px-5 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Login
        </h1>

        {/* Error message */}
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white"
          />
        </div>

        {/* Email field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white"
          />
        </div>

        {/* Password field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
