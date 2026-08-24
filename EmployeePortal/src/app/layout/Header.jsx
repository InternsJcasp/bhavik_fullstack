export function Header() {
  return (
    <header className="bg-gray-900 text-white px-4 py-3 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold shrink-0">
          <a className="hover:text-slate-300" href="/">
            EPortal
          </a>
        </h1>

        <nav>
          <ul className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
            <li>
              <a className="hover:underline hover:text-slate-300" href="/">
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:text-slate-300"
                href="/employees"
              >
                Employees
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="/profile"
          className="shrink w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white overflow-hidden"
        >
          <img
            src="https://i.pravatar.cc/150?u=amit"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </header>
  );
}
