import { useEffect, useState } from "react";
import { AppLayout } from "../../app/layout/AppLayout";
import { EmployeeList } from "./EmployeeList";
import {
  fetchEmployees,
  clearEmployeesCache,
} from "../../services/employeeAPI";

export function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUsingCache, setIsUsingCache] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchEmployees();

        if (!cancelled) {
          setEmployees(data.data || []);
          const cached = localStorage.getItem("employees_cache");
          setIsUsingCache(!!cached);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Something went wrong");
          setIsUsingCache(false);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleRefresh = async () => {
    try {
      setIsLoading(true);
      setError(null);

      clearEmployeesCache();

      const data = await fetchEmployees();
      setEmployees(data.data || []);
      setIsUsingCache(false);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout pageTitle="Employee Portal - Employees">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Our Employees
          </h2>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {!isLoading && error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded mb-4">
            <p className="font-medium mb-2">{error}</p>
            <p className="text-sm mb-3">
              This could be due to network issues or API rate limits.
            </p>
            <button
              onClick={handleRefresh}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              🔄 Retry & Clear Cache
            </button>
          </div>
        )}

        {!isLoading && !error && employees.length === 0 && (
          <p className="text-gray-700 dark:text-gray-300 text-base">
            No employees found.
          </p>
        )}

        {!isLoading && !error && employees.length > 0 && (
          <EmployeeList employees={employees} />
        )}
      </section>
    </AppLayout>
  );
}
