import { useState } from "react";
import { TaskFilters } from "./TaskFilters";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { useTasks } from "../hooks/useTasks";
import { getFilteredAndSortedTasks } from "../utils/taskHelpers";

const initialFilters = {
  search: "",
  status: "all",
  priority: "all",
  sortBy: "newest",
};

export const TasksPage = () => {
  const { tasks, isLoading, error, addTask, editTask, removeTask } = useTasks();

  const [filters, setFilters] = useState(initialFilters);
  const [editingTask, setEditingTask] = useState(null);

  const visibleTasks = getFilteredAndSortedTasks(tasks, filters);

  const handleFilterChange = (name, value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  const handleFormSubmit = (taskData) => {
    if (editingTask) {
      const result = editTask(editingTask.id, taskData);

      if (result.success) {
        setEditingTask(null);
      }

      return result;
    }

    return addTask(taskData);
  };

  const handleEdit = (task) => {
    setEditingTask(task);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleDelete = (taskId) => {
    const taskToDelete = tasks.find((task) => task.id === taskId);

    const shouldDelete = window.confirm(
      `Delete "${taskToDelete?.title || "this task"}"?`,
    );

    if (!shouldDelete) {
      return;
    }

    const result = removeTask(taskId);

    if (result.success && editingTask?.id === taskId) {
      setEditingTask(null);
    }
  };

  const handleStatusChange = (taskId, updatedTaskData) => {
    editTask(taskId, updatedTaskData);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8">
          <p className="text-sm font-medium text-gray-500">Task management</p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Your tasks
          </h1>

          <p className="mt-2 max-w-2xl text-gray-600">
            Create, organize, update, and complete your work from one place.
          </p>
        </section>

        {error && (
          <div className="mb-6 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black">
            {error}
          </div>
        )}

        <TaskForm
          onSubmit={handleFormSubmit}
          editingTask={editingTask}
          onCancel={handleCancelEdit}
        />

        <div className="mt-8">
          <TaskFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        </div>

        <div className="mt-8">
          <TaskList
            tasks={visibleTasks}
            isLoading={isLoading}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        </div>
      </main>
    </div>
  );
};
