export function renderTasks(taskList, tasks) {
  taskList.replaceChildren();

  if (tasks.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-state";
    emptyMessage.textContent = "No tasks match your filters.";
    taskList.append(emptyMessage);
    return;
  }

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = task.id;

    const mainContent = document.createElement("div");
    mainContent.className = "task-main";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.dataset.action = "toggle";

    const title = document.createElement("span");
    title.className = task.completed ? "task-title completed" : "task-title";
    title.textContent = task.title;

    const metadata = document.createElement("div");
    metadata.className = "task-metadata";
    metadata.textContent =
      `Priority: ${task.priority} | Category: ${task.category} | ` +
      `Status: ${formatStatus(task.status)} | Due: ${task.dueDate || "No date"}`;

    const statusSelect = document.createElement("select");
    statusSelect.dataset.action = "status";

    ["not-started", "in-progress", "completed"].forEach((status) => {
      const option = document.createElement("option");
      option.value = status;
      option.textContent = formatStatus(status);
      option.selected = task.status === status;
      statusSelect.append(option);
    });

    const editButton = createButton("Edit", "edit");
    const deleteButton = createButton("Delete", "delete");

    mainContent.append(checkbox, title, metadata);
    taskItem.append(mainContent, statusSelect, editButton, deleteButton);
    taskList.append(taskItem);
  });
}

export function renderSummary(summary, elements) {
  elements.completed.textContent = summary.completedCount;
  elements.notCompleted.textContent = summary.notCompletedCount;
  elements.percentage.textContent = `${summary.percentage}%`;
}

export function showMessage(messageElement, text, type = "success") {
  messageElement.textContent = text;
  messageElement.className = `message ${type}`;
}

function createButton(text, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.dataset.action = action;
  return button;
}

function formatStatus(status) {
  if (status === "not-started") return "Not Started";
  if (status === "in-progress") return "In Progress";
  return "Completed";
}
