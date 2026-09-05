const priorityOrder = {
  high: 3,
  medium: 2,
  low: 1,
};

export const getFilteredAndSortedTasks = (tasks, filters) => {
  const searchText = filters.search.trim().toLowerCase();

  const filteredTasks = tasks.filter((task) => {
    const matchesTitle = task.title.toLowerCase().includes(searchText);

    const matchesStatus =
      filters.status === "all" || task.status === filters.status;

    const matchesPriority =
      filters.priority === "all" || task.priority === filters.priority;

    return matchesTitle && matchesStatus && matchesPriority;
  });

  const sortedTasks = [...filteredTasks].sort((firstTask, secondTask) => {
    if (filters.sortBy === "newest") {
      return new Date(secondTask.createdAt) - new Date(firstTask.createdAt);
    }

    if (filters.sortBy === "oldest") {
      return new Date(firstTask.createdAt) - new Date(secondTask.createdAt);
    }

    if (filters.sortBy === "due-date-asc") {
      return new Date(firstTask.dueDate) - new Date(secondTask.dueDate);
    }

    if (filters.sortBy === "due-date-desc") {
      return new Date(secondTask.dueDate) - new Date(firstTask.dueDate);
    }

    if (filters.sortBy === "priority-high") {
      return (
        priorityOrder[secondTask.priority] - priorityOrder[firstTask.priority]
      );
    }

    if (filters.sortBy === "priority-low") {
      return (
        priorityOrder[firstTask.priority] - priorityOrder[secondTask.priority]
      );
    }

    return 0;
  });

  return sortedTasks;
};

export const getTaskCounts = (tasks) => {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  const remainingTasks = totalTasks - completedTasks;

  return {
    totalTasks,
    completedTasks,
    remainingTasks,
  };
};
