import { getTasks, saveTasks } from "./storage.js";
import { createTask, getTaskSummary, getVisibleTasks } from "./task-service.js";
import { renderTasks, renderSummary, showMessage } from "./task-view.js";

const elements = {
  form: document.querySelector("#taskForm"),
  taskInput: document.querySelector("#taskInput"),
  priorityInput: document.querySelector("#priorityInput"),
  categoryInput: document.querySelector("#categoryInput"),
  dueDateInput: document.querySelector("#dueDateInput"),

  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  priorityFilter: document.querySelector("#priorityFilter"),
  sortBy: document.querySelector("#sortBy"),
  clearCompletedButton: document.querySelector("#clearCompletedButton"),
  deleteAllButton: document.querySelector("#deleteAllButton"),

  taskList: document.querySelector("#taskList"),
  completed: document.querySelector("#completedCounter"),
  notCompleted: document.querySelector("#notCompletedCounter"),
  percentage: document.querySelector("#completionPercentage"),
  message: document.querySelector("#message"),
};

function getFilters() {
  return {
    search: elements.searchInput.value.trim(),
    status: elements.statusFilter.value,
    category: elements.categoryFilter.value,
    priority: elements.priorityFilter.value,
    sortBy: elements.sortBy.value,
  };
}

function renderApp() {
  const tasks = getTasks();
  const visibleTasks = getVisibleTasks(tasks, getFilters());

  renderTasks(elements.taskList, visibleTasks);

  renderSummary(getTaskSummary(tasks), {
    completed: elements.completed,
    notCompleted: elements.notCompleted,
    percentage: elements.percentage,
  });
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = elements.taskInput.value.trim();

  if (!title) {
    showMessage(elements.message, "Please enter a task title.", "error");
    return;
  }

  const tasks = getTasks();

  const newTask = createTask({
    title,
    priority: elements.priorityInput.value,
    category: elements.categoryInput.value,
    dueDate: elements.dueDateInput.value,
  });

  tasks.push(newTask);

  if (!saveTasks(tasks)) {
    showMessage(elements.message, "Task could not be saved.", "error");
    return;
  }

  elements.form.reset();
  elements.priorityInput.value = "Medium";
  showMessage(elements.message, "Task added successfully.");
  renderApp();
});

elements.taskList.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  const taskItem = event.target.closest("[data-task-id]");

  if (!actionElement || !taskItem) return;

  const taskId = taskItem.dataset.taskId;
  const action = actionElement.dataset.action;
  const tasks = getTasks();
  const task = tasks.find((currentTask) => currentTask.id === taskId);

  if (!task) return;

  if (action === "toggle") {
    task.completed = actionElement.checked;
    task.status = task.completed ? "completed" : "not-started";
  }

  if (action === "edit") {
    const updatedTitle = prompt("Edit task:", task.title)?.trim();

    if (!updatedTitle) return;

    task.title = updatedTitle;
  }

  if (action === "delete") {
    const shouldDelete = confirm(`Delete "${task.title}"?`);

    if (!shouldDelete) return;

    const remainingTasks = tasks.filter(
      (currentTask) => currentTask.id !== taskId,
    );

    if (!saveTasks(remainingTasks)) {
      showMessage(elements.message, "Task could not be deleted.", "error");
      return;
    }

    showMessage(elements.message, "Task deleted.");
    renderApp();
    return;
  }

  if (!saveTasks(tasks)) {
    showMessage(elements.message, "Changes could not be saved.", "error");
    return;
  }

  renderApp();
});

elements.taskList.addEventListener("change", (event) => {
  if (event.target.dataset.action !== "status") return;

  const taskItem = event.target.closest("[data-task-id]");
  const taskId = taskItem.dataset.taskId;
  const tasks = getTasks();
  const task = tasks.find((currentTask) => currentTask.id === taskId);

  if (!task) return;

  task.status = event.target.value;
  task.completed = task.status === "completed";

  if (!saveTasks(tasks)) {
    showMessage(elements.message, "Status could not be saved.", "error");
    return;
  }

  renderApp();
});

elements.clearCompletedButton.addEventListener("click", () => {
  const activeTasks = getTasks().filter((task) => !task.completed);

  if (!saveTasks(activeTasks)) {
    showMessage(
      elements.message,
      "Completed tasks could not be cleared.",
      "error",
    );
    return;
  }

  showMessage(elements.message, "Completed tasks cleared.");
  renderApp();
});

elements.deleteAllButton.addEventListener("click", () => {
  const tasks = getTasks();

  if (tasks.length === 0) {
    showMessage(elements.message, "There are no tasks to delete.", "error");
    return;
  }

  const shouldDelete = confirm(
    `Delete all ${tasks.length} task(s)? This cannot be undone.`,
  );

  if (!shouldDelete) {
    return;
  }

  try {
    localStorage.removeItem("todo-app-tasks");

    showMessage(elements.message, "All tasks deleted.");
    renderApp();
  } catch (error) {
    console.error("Could not delete all tasks:", error);
    showMessage(elements.message, "All tasks could not be deleted.", "error");
  }
});

[
  elements.searchInput,
  elements.statusFilter,
  elements.categoryFilter,
  elements.priorityFilter,
  elements.sortBy,
].forEach((element) => {
  element.addEventListener("input", renderApp);
  element.addEventListener("change", renderApp);
});

renderApp();

lucide.createIcons();
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});
