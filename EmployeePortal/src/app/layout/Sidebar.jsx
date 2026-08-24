// src/app/layout/Sidebar.jsx

export function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-gray-100 border-r border-gray-200">
      <nav className="p-4">
        <ul className="space-y-2 text-sm sm:text-base *:block *:px-3 *:py-2 *:rounded *:hover:bg-gray-200">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/employees">Employees</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
