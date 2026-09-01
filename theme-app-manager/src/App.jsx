// src/App.jsx
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <NavBar />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}
