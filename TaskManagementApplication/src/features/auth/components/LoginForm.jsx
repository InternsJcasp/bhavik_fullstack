import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("bhavik123@gmail.com");
  const [password, setPassword] = useState("bhavik123@");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      login(email, password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 rounded-lg bg-white dark:bg-gray-800 shadow"
      >
        <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Login
        </h1>

        {error && (
          <p className="mb-3 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}

        <div className="space-y-3">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="bhavik123@gmail.com"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="bhavik123@"
          />
        </div>

        <Button type="submit" className="mt-4 w-full">
          Login
        </Button>
      </form>
    </div>
  );
}
