import { useTheme } from "../contexts/ThemeContext";
import { useNotifications } from "../contexts/NotificationContext";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { addNotification } = useNotifications();

  const handleSetTheme = (newTheme) => {
    setTheme(newTheme);
    addNotification(`Theme set to ${newTheme} from Settings`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">Settings</h1>

        {/* Theme settings card */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-3 text-lg font-semibold">Theme Settings</h2>

          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Current theme: <span className="font-semibold">{theme}</span>
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => handleSetTheme("light")}
              className="rounded bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Light
            </button>
            <button
              onClick={() => handleSetTheme("dark")}
              className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              Dark
            </button>
          </div>
        </div>

        {/* Context API*/}
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
          <p className="font-semibold">Context API in action:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">
                useTheme
              </code>{" "}
              → theme change (setTheme)
            </li>
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">
                useNotifications
              </code>{" "}
              → notification add on theme change
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
