// features/tasks/components/TaskForm.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { taskService } from "../services/taskService";
import { taskConstants } from "../constants/taskConstants";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export default function TaskForm({ taskToEdit, onSuccess, onCancel }) {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(taskConstants.TODO);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDescription(taskToEdit.description || "");
      setStatus(taskToEdit.status || taskConstants.TODO);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setLoading(true);
    try {
      if (taskToEdit) {
        await taskService.updateTask(
          taskToEdit.id,
          { title, description, status },
          user.id,
        );
      } else {
        await taskService.createTask({
          title,
          description,
          status,
          userId: user.id,
        });
      }
      onSuccess?.();
    } catch (err) {
      setError(err.message || "Failed to save task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
        {taskToEdit ? "Edit Task" : "Create Task"}
      </h2>

      {error && <p className="mb-3 text-sm text-red-600">{error}</p>}

      <div className="space-y-3">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
        />
        <Input
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
        />
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-2 py-1.5"
          >
            <option value={taskConstants.TODO}>TODO</option>
            <option value={taskConstants.IN_PROGRESS}>IN_PROGRESS</option>
            <option value={taskConstants.DONE}>DONE</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : taskToEdit ? "Update" : "Create"}
        </Button>
        {onCancel && (
          <Button type="button" onClick={onCancel} variant="secondary">
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
