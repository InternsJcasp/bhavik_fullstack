import { useState, useMemo } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskCard from "./TaskCard";
import SearchBar from "./SearchBar";
import TaskFilters from "./TaskFilters";
import TaskForm from "./TaskForm";
import Button from "../../../components/Button";
import { useDebounce } from "../../../hooks/useDebounce";

export default function TaskList() {
  const { tasks, loading, error, refresh, deleteTask } = useTasks();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Debounced search query
  const debouncedQuery = useDebounce(searchQuery, 300);

  const filteredTasks = useMemo(() => {
    let result = tasks;

    if (statusFilter !== "ALL") {
      result = result.filter((t) => t.status === statusFilter);
    }

    const q = debouncedQuery.toLowerCase().trim();
    if (q) {
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          (t.description && t.description.toLowerCase().includes(q)),
      );
    }

    return result;
  }, [tasks, statusFilter, debouncedQuery]);

  const handleCreateClick = () => {
    setTaskToEdit(null);
    setShowForm(true);
  };

  const handleEditClick = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  const handleDeleteClick = async (task) => {
    if (!window.confirm(`Delete task "${task.title}"?`)) return;
    try {
      await deleteTask(task.id);
    } catch (err) {
      alert(err.message || "Failed to delete task");
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const handleSuccess = () => {
    refresh();
    handleCloseForm();
  };

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
          <Button onClick={handleCreateClick}>Add Task</Button>
        </div>
      </div>

      {!filteredTasks.length ? (
        <p>No tasks found.</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={() => handleEditClick(task)}
              onDelete={() => handleDeleteClick(task)}
            />
          ))}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg">
            <TaskForm
              taskToEdit={taskToEdit}
              onSuccess={handleSuccess}
              onCancel={handleCloseForm}
            />
          </div>
        </div>
      )}
    </div>
  );
}
