import { PRIORITY_RANK } from "./constants.js";
export function createTask({ title, priority, category, dueDate }) {
  return {
    id: String(Date.now()),
    title,
    priority,
    category,
    dueDate: dueDate || null,
    status: "not-started",
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

export function getVisibleTasks(tasks, filters) {
  const searchText = filters.search.toLowerCase();

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchText);
    const matchesStatus =
      filters.status === "all" || task.status === filters.status;
    const matchesCategory =
      filters.category === "all" || task.category === filters.category;
    const matchesPriority =
      filters.priority === "all" || task.priority === filters.priority;

    return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
  });

  return sortTasks(filteredTasks, filters.sortBy);
}

function sortTasks(tasks, sortBy) {
  return tasks.slice().sort((firstTask, secondTask) => {
    if (sortBy === "priority-desc") {
      return (
        PRIORITY_RANK[secondTask.priority] - PRIORITY_RANK[firstTask.priority]
      );
    }

    if (sortBy === "priority-asc") {
      return (
        PRIORITY_RANK[firstTask.priority] - PRIORITY_RANK[secondTask.priority]
      );
    }

    if (sortBy === "date-asc") {
      return compareDates(firstTask.dueDate, secondTask.dueDate);
    }

    if (sortBy === "date-desc") {
      return compareDates(secondTask.dueDate, firstTask.dueDate);
    }

    return new Date(secondTask.createdAt) - new Date(firstTask.createdAt);
  });
}

function compareDates(firstDate, secondDate) {
  if (!firstDate && !secondDate) return 0;
  if (!firstDate) return 1;
  if (!secondDate) return -1;

  return new Date(firstDate) - new Date(secondDate);
}

export function getTaskSummary(tasks) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return {
    completedCount,
    notCompletedCount: totalCount - completedCount,
    percentage:
      totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100),
  };
}
