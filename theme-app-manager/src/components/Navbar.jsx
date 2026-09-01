import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import NotificationBadge from './NotificationBadge';

export function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-bold text-gray-900 hover:underline dark:text-white"
          >
            Theme App
          </Link>

          {/* Desktop nav links */}
          {user && (
            <div className="hidden items-center gap-4 md:flex">
              <Link
                to="/dashboard"
                className="text-sm text-gray-700 hover:underline dark:text-gray-300"
              >
                Dashboard
              </Link>
              <Link
                to="/settings"
                className="text-sm text-gray-700 hover:underline dark:text-gray-300"
              >
                Settings
              </Link>
              <Link
                to="/notifications"
                className="text-sm text-gray-700 hover:underline dark:text-gray-300"
              >
                Notifications
              </Link>
            </div>
          )}
        </div>

        {/* Right: Theme + Notifications + Auth */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Notifications (sirf logged-in user ko) */}
          {user && <NotificationBadge />}

          {/* Auth buttons */}
          {user ? (
            <>
              <span className="hidden text-sm text-gray-700 dark:text-gray-300 sm:inline">
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}