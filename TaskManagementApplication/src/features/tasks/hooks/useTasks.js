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

  // Refresh function
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

  return { tasks, loading, error, refresh };
}
