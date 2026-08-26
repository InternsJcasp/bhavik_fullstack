import { useEmployeeFilters } from "../../hooks/useEmployeeFilters";
import { EmployeeCard } from "./EmployeeCard";

export function EmployeeList({ employees }) {
  const {
    search,
    setSearch,
    deptFilter,
    setDeptFilter,
    minAge,
    setMinAge,
    maxAge,
    setMaxAge,
    minSalary,
    setMinSalary,
    maxSalary,
    setMaxSalary,
    sortBy,
    setSortBy,
    setPage,
    totalPages,
    currentPage,
    paginated,
    departments,
    resetFilters,
  } = useEmployeeFilters(employees);

  return (
    <div>
      {/* Filters UI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Search */}
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Search by name
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="e.g. Quinn"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Department
          </label>
          <select
            value={deptFilter}
            onChange={(e) => {
              setDeptFilter(e.target.value);
              setPage(1);
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Min Age */}
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Min Age
          </label>
          <input
            type="number"
            value={minAge}
            onChange={(e) => {
              setMinAge(e.target.value);
              setPage(1);
            }}
            placeholder="e.g. 22"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          />
        </div>

        {/* Max Age */}
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Max Age
          </label>
          <input
            type="number"
            value={maxAge}
            onChange={(e) => {
              setMaxAge(e.target.value);
              setPage(1);
            }}
            placeholder="e.g. 65"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          />
        </div>
      </div>

      {/* Row 2: Min/Max Salary + Sort + Reset */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Min Salary */}
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Min Salary
          </label>
          <input
            type="number"
            value={minSalary}
            onChange={(e) => {
              setMinSalary(e.target.value);
              setPage(1);
            }}
            placeholder="e.g. 50000"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          />
        </div>

        {/* Max Salary */}
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Max Salary
          </label>
          <input
            type="number"
            value={maxSalary}
            onChange={(e) => {
              setMaxSalary(e.target.value);
              setPage(1);
            }}
            placeholder="e.g. 200000"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-700 dark:text-gray-300">
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setPage(1);
            }}
            className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          >
            <option value="name">Name</option>
            <option value="salary">Salary</option>
            <option value="age">Age</option>
          </select>
        </div>

        {/* Reset */}
        <div className="flex items-center">
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Employee Grid */}
      {paginated.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300 text-base">
          No employees match your filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {paginated.map((emp) => (
            <EmployeeCard
              key={emp.id}
              name={emp.employee_name || emp.name}
              employeeId={emp.id}
              age={parseInt(emp.employee_age) || emp.age || "Unknown"}
              dept={emp.employee_department || "Engineering"}
              salary={parseInt(emp.employee_salary) || emp.salary || 0}
              email={`${(emp.employee_name || emp.name || "user").toLowerCase().replace(/\s/g, ".")}@company.com`}
              photo={`https://i.pravatar.cc/150?u=${emp.id + 1}`}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 disabled:opacity-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          >
            Prev
          </button>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 disabled:opacity-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
