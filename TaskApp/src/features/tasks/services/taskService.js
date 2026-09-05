const TASKS_STORAGE_KEY = "tasks";

export const getAllTasks = () => {
  try {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);

    const tasks = storedTasks ? JSON.parse(storedTasks) : [];

    return {
      success: true,
      tasks,
    };
  } catch {
    return {
      success: false,
      message: "Failed to load tasks",
      tasks: [],
    };
  }
};

export const saveAllTasks = (tasks) => {
  try {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      message: "Failed to save Tasks",
    };
  }
};

export const createTask = (task) => {
  try {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];

    const newTask = {
      id: crypto.randomUUID(),
      userEmail: task.userEmail,
      title: task.title.trim(),
      description: task.description.trim(),
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate,
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);

    const saveResult = saveAllTasks(tasks);
    if (!saveResult.success) {
      return saveResult;
    }

    return {
      success: true,
      task: newTask,
    };
  } catch {
    return {
      success: false,
      message: "Failed to create task",
    };
  }
};

export const updateTask = (taskId, updatedTaskData) => {
  try {
    const getResult = getAllTasks();
    if (!getResult.success) {
      return getResult;
    }

    const taskExists = getResult.tasks.some((task) => task.id === taskId);
    if (!taskExists) {
      return {
        success: false,
        message: "Task not found",
      };
    }
    const updatedTasks = getResult.tasks.map((task) => {
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
    });

    const updatedTask = updatedTasks.find((task) => task.id === taskId);
    const saveResult = saveAllTasks(updatedTasks);

    if (!saveResult.success) {
      return saveResult;
    }

    return {
      success: true,
      task: updatedTask,
    };
  } catch {
    return {
      success: false,
      message: "Failed to update task",
    };
  }
};

export const deleteTask = (taskId) => {
  try {
    const getResult = getAllTasks();

    if (!getResult.success) {
      return getResult;
    }

    const taskToDelete = getResult.tasks.find((task) => task.id === taskId);

    if (!taskToDelete) {
      return {
        success: false,
        message: "Task not found",
      };
    }

    const updatedTasks = getResult.tasks.filter((task) => task.id !== taskId);

    const saveResult = saveAllTasks(updatedTasks);

    if (!saveResult.success) {
      return saveResult;
    }

    return {
      success: true,
      task: taskToDelete,
    };
  } catch {
    return {
      success: false,
      message: "Failed to delete task",
    };
  }
};
