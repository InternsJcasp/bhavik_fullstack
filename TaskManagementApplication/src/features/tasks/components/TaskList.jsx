// features/tasks/components/TaskList.jsx
import { useState, useMemo } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskCard from "./TaskCard";
import SearchBar from "./SearchBar";
import TaskFilters from "./TaskFilters";

export default function TaskList() {
  const { tasks, loading, error, refresh } = useTasks();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredTasks = useMemo(() => {
    let result = tasks;

    // Status filter
    if (statusFilter !== "ALL") {
      result = result.filter((t) => t.status === statusFilter);
    }

    // Search filter (title or description)
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          (t.description && t.description.toLowerCase().includes(q)),
      );
    }

    return result;
  }, [tasks, searchQuery, statusFilter]);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Your Tasks
        </h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <TaskFilters value={statusFilter} onChange={setStatusFilter} />
        </div>
      </div>

      {!filteredTasks.length ? (
        <p>No tasks found.</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
