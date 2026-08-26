import { AppLayout } from "../../app/layout/AppLayout";

export function Home() {
  return (
    <AppLayout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Welcome to{" "}
            <span className="text-slate-600 dark:text-slate-400">
              Employee Portal
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your complete solution for managing and exploring employee
            information with modern React patterns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border hover:border-slate-400 transition-shadow">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-400/60 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-lg  font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Employee Management
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Browse, search, and filter through employee records with advanced
              filtering options
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border hover:border-slate-400 transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Fast Load
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Load Data very fast due to the use of Cache which helps storing
              data when it is fetched first time.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border hover:border-slate-400 transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Smart Search
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Find employees by name, age, salary, and department with real-time
              filtering
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Ready to Explore?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Start browsing through our employee database and experience all the
            features firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/employees"
              className="inline-flex items-center justify-center px-8 py-3 bg-slate-600 text-white dark:bg-slate-400 rounded-lg hover:bg-black font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Employees
              <span className="ml-2">→</span>
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 font-medium transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
