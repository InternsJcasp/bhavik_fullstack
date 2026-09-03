import { useNavigate } from "react-router-dom";
import { useTheme } from "./providers";
import { useAuth } from "../features/auth/hooks/useAuth";
import ThemeToggle from "../components/ThemeToggle";

export default function Header() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Task Manager
        </h1>

        <div className="flex items-center gap-3">
          {user && (
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Hi, {user.name}
            </span>
          )}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          {user && (
            <button onClick={handleLogout} className="text-sm hover:underline">
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
