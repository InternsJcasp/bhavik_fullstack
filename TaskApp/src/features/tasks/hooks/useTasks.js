import { useEffect, useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../services/taskService";

export const useTasks = () => {
  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = () => {
      if (!user?.email) {
        setTasks([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      const result = getAllTasks();

      if (!result.success) {
        setError(result.message);
        setTasks([]);
        setIsLoading(false);
        return;
      }

      const currentUserTasks = result.tasks.filter(
        (task) => task.userEmail === user.email,
      );

      setTasks(currentUserTasks);
      setIsLoading(false);
    };

    loadTasks();
  }, [user]);

  const addTask = (taskData) => {
    if (!user?.email) {
      return {
        success: false,
        message: "You must be logged in to create a task",
      };
    }

    setError(null);

    const result = createTask({
      ...taskData,
      userEmail: user.email,
    });

    if (!result.success) {
      setError(result.message);
      return result;
    }

    setTasks((previousTasks) => [...previousTasks, result.task]);

    return result;
  };

  const editTask = (taskId, updatedTaskData) => {
    const taskBelongsToUser = tasks.some(
      (task) => task.id === taskId && task.userEmail === user?.email,
    );

    if (!taskBelongsToUser) {
      return {
        success: false,
        message: "Task not found",
      };
    }

    setError(null);

    const result = updateTask(taskId, updatedTaskData);

    if (!result.success) {
      setError(result.message);
      return result;
    }

    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        return {
          ...task,
          title: updatedTaskData.title.trim(),
          description: updatedTaskData.description.trim(),
          status: updatedTaskData.status,
          priority: updatedTaskData.priority,
          dueDate: updatedTaskData.dueDate,
        };
      }),
    );

    return result;
  };

  const removeTask = (taskId) => {
    const taskBelongsToUser = tasks.some(
      (task) => task.id === taskId && task.userEmail === user?.email,
    );

    if (!taskBelongsToUser) {
      return {
        success: false,
        message: "Task not found",
      };
    }

    setError(null);

    const result = deleteTask(taskId);

    if (!result.success) {
      setError(result.message);
      return result;
    }

    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId),
    );

    return result;
  };

  return {
    tasks,
    isLoading,
    error,
    addTask,
    editTask,
    removeTask,
  };
};
