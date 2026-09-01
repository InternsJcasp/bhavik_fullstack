// src/pages/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { useNotifications } from "../contexts/NotificationContext";
import { toast } from "react-toastify";

export default function Dashboard() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { addNotification } = useNotifications();

  const handleToggleTheme = () => {
    toggleTheme();
    const newTheme = theme === "light" ? "dark" : "light";
    addNotification(`Theme switched to ${newTheme}`);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleAddNotification = () => {
    addNotification("Hello from Dashboard!");
    toast.success("Notification added!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Welcome, <span className="font-semibold">{user?.name}</span>
          </div>
        </div>

        {/* User info card */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-2 text-lg font-semibold">User Information</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Name: <span className="font-medium">{user?.name}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Email: <span className="font-medium">{user?.email}</span>
          </p>
        </div>

        {/* Actions */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-3 text-lg font-semibold">Quick Actions</h2>

          <div className="flex flex-wrap gap-2">
            {/* Theme toggle */}
            <button
              onClick={handleToggleTheme}
              className="rounded bg-black px-4 py-2 text-white hover:bg-black/80 dark:hover:bg-amber-50 dark:bg-white dark:text-slate-500"
            >
              Toggle Theme (current: {theme})
            </button>

            {/* Add notification */}
            <button
              onClick={handleAddNotification}
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Add Notification
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
          <p className="font-semibold">Context API in action:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">
                useAuth
              </code>{" "}
              → user info, logout
            </li>
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">
                useTheme
              </code>{" "}
              → current theme, toggle
            </li>
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">
                useNotifications
              </code>{" "}
              → add notifications
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
