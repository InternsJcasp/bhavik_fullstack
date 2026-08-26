import { NavLink } from "react-router-dom";
import { Home, Users, Building, User, Info, Mail } from "lucide-react";

export function Sidebar() {
  const menuItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/employees", label: "Employees", icon: Users },
    { path: "/departments", label: "Departments", icon: Building },
    { path: "/profile", label: "Profile", icon: User },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <aside className="w-64 h-full bg-slate-800 dark:bg-stone-950 border-r-2 border-gray-600 flex flex-col">
      <div className="p-4 border-b border-gray-600">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-semibold">
            B
          </div>
          <div>
            <h2 className="text-white font-semibold text-sm">
              Welcome, Bhavik
            </h2>
            <p className="text-gray-400 text-xs">Administrator</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors ${
                    isActive
                      ? "bg-slate-400 dark:bg-slate-200 text-black"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Info
      <div className="p-4 border-t border-gray-600">
        <p className="text-gray-400 text-xs text-center">© 2026 EPortal</p>
      </div> */}
    </aside>
  );
}
