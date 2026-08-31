import { Link } from "react-router-dom";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { AppLayout } from "../../app/layout/AppLayout";

export function NotFound() {
  return (
    <AppLayout>
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-lg">
          <div className="mx-auto w-20 h-20 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
            <SearchX className="w-10 h-10" />
          </div>

          <p className="mt-6 text-7xl font-bold text-slate-700 dark:text-slate-300">
            404
          </p>

          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Page not found
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            The page you are looking for does not exist or may have been moved.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-black hover:bg-black dark:hover:bg-white transition-colors font-medium"
            >
              <Home className="w-4 h-4" />
              Go to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Go back
            </button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
