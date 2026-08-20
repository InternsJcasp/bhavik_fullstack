const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector(".add-todo");
const searchButton = document.querySelector(".search-todo");
const clearCompletedTasks = document.querySelector(".clear-completed-tasks");
const taskList = document.querySelector("#taskList");
const completed = document.querySelector("#completed-counter");
const notCompleted = document.querySelector("#not-completed-counter");

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskCounter() {
  const tasks = getTasks();
  const completedCount = tasks.filter((task) => task.completed).length;
  completed.textContent = completedCount;
  notCompleted.textContent = tasks.length - completedCount;
}

function renderTasks(filterText = "") {
  taskList.innerHTML = "";
  const tasks = getTasks();

  tasks.forEach((task) => {
    if (
      filterText &&
      !task.title.toLowerCase().includes(filterText.toLowerCase())
    ) {
      return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
      <label>
        <input type="checkbox" ${task.completed ? "checked" : ""} />
        <span class="${task.completed ? "completed" : ""}">${task.title}</span>
      </label>
      <div class="individual-todo-buttons">
        <span class="edit-btn">Edit Task</span>
        <span class="delete-btn">Delete Task</span>
      </div>
    `;

    const taskSpan = li.querySelector("label span");
    const checkBox = li.querySelector("input[type='checkbox']");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    checkBox.addEventListener("change", () => {
      const currentTasks = getTasks();
      const targetTask = currentTasks.find((t) => t.id === task.id);
      if (targetTask) {
        targetTask.completed = checkBox.checked;
        saveTasks(currentTasks);
      }
      taskSpan.classList.toggle("completed", checkBox.checked);
      updateTaskCounter();
    });

    editBtn.addEventListener("click", () => {
      const updatedTask = prompt("Edit Your Task:", task.title);
      if (updatedTask && updatedTask.trim()) {
        const currentTasks = getTasks();
        const targetTask = currentTasks.find((t) => t.id === task.id);
        if (targetTask) {
          targetTask.title = updatedTask.trim();
          saveTasks(currentTasks);
          renderTasks(taskInput.value.trim());
        }
      }
    });

    deleteBtn.addEventListener("click", () => {
      const currentTasks = getTasks();
      const updatedTasks = currentTasks.filter((t) => t.id !== task.id);
      saveTasks(updatedTasks);
      renderTasks(taskInput.value.trim());
    });

    taskList.appendChild(li);
  });

  updateTaskCounter();
}

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    alert("Please write down a task");
    return;
  }

  const task = {
    id: Date.now(),
    due_date: new Date(),
    title: taskText,
    completed: false,
  };

  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);

  taskInput.value = "";
  renderTasks();
});

clearCompletedTasks.addEventListener("click", () => {
  const currentTasks = getTasks();
  const activeTasks = currentTasks.filter((task) => !task.completed);
  saveTasks(activeTasks);
  renderTasks(taskInput.value.trim());
});

searchButton.addEventListener("click", () => {
  const searchText = taskInput.value.trim();
  renderTasks(searchText);
});

taskInput.addEventListener("input", () => {
  const searchText = taskInput.value.trim();
  renderTasks(searchText);
});

renderTasks();
