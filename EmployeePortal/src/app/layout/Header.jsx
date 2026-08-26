import { Sun } from "lucide-react";
export function Header() {
  return (
    <header className="bg-black/90 text-white px-4 py-3 sm:px-6 md:px-8 sticky top-0 border-b dark:border-slate-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold shrink-0">
          <a href="/">EPortal</a>
        </h1>

        <nav className="hidden sm:inline-flex">
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
          className="shrink p-1 w-7 h- sm:w-8 sm:h-8 rounded-full border-2 border-slate-400 hover:border-slate-200 overflow-hidden"
        >
          <Sun className="text-slate-500 size-4 sm:size-5" />
        </a>
      </div>
    </header>
  );
}
