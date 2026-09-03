import { useEffect, useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { taskService } from "../services/taskService";

export function useTasks() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      setTasks([]);
      setLoading(false);
      return;
    }

    try {
      const data = taskService.getTasks(user.id);
      setTasks(data);
    } catch (err) {
      setError(err.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }, [user]);

  const refresh = () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = taskService.getTasks(user.id);
      setTasks(data);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to refresh tasks");
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData) => {
    if (!user) throw new Error("No user logged in");
    const newTask = taskService.createTask({ ...taskData, userId: user.id });
    setTasks((prev) => [...prev, newTask]); // immediate UI update
    return newTask;
  };

  const updateTask = async (id, changes) => {
    if (!user) throw new Error("No user logged in");
    const updated = taskService.updateTask(id, changes, user.id);
    setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    return updated;
  };

  const deleteTask = async (id) => {
    if (!user) throw new Error("No user logged in");
    taskService.deleteTask(id, user.id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return { tasks, loading, error, refresh, createTask, updateTask, deleteTask };
}
