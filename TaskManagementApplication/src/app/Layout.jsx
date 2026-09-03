import { useTheme } from "./providers";
import Header from "./Header";

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="mx-auto max-w-6xl p-4">{children}</main>
      </div>
    </div>
  );
}
