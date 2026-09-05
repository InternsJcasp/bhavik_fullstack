export const TaskFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onFilterChange(name, value);
  };

  const hasActiveFilters =
    filters.search ||
    filters.status !== "all" ||
    filters.priority !== "all" ||
    filters.sortBy !== "newest";

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-black">Filter and sort</h2>

          <p className="mt-1 text-sm text-gray-600">
            Find the tasks you need quickly.
          </p>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="w-fit rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-semibold text-black"
          >
            Search title
          </label>

          <input
            id="search"
            name="search"
            type="text"
            value={filters.search}
            onChange={handleChange}
            placeholder="Search tasks"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="mb-2 block text-sm font-semibold text-black"
          >
            Status
          </label>

          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
          >
            <option value="all">All statuses</option>
            <option value="not-started">Not Started</option>
            <option value="todo">Todo</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="priority"
            className="mb-2 block text-sm font-semibold text-black"
          >
            Priority
          </label>

          <select
            id="priority"
            name="priority"
            value={filters.priority}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
          >
            <option value="all">All priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sortBy"
            className="mb-2 block text-sm font-semibold text-black"
          >
            Sort by
          </label>

          <select
            id="sortBy"
            name="sortBy"
            value={filters.sortBy}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
          >
            <option value="newest">Created: Newest first</option>
            <option value="oldest">Created: Oldest first</option>
            <option value="due-date-asc">Due date: Earliest first</option>
            <option value="due-date-desc">Due date: Latest first</option>
            <option value="priority-high">Priority: High to Low</option>
            <option value="priority-low">Priority: Low to High</option>
          </select>
        </div>
      </div>
    </section>
  );
};
