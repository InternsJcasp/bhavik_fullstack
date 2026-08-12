const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("button");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    alert("Please write down a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <label>
        <input type="checkbox" />
        <span>${taskText}</span>
    </label>
    <span class="edit-btn">Edit Task</span>
    <span class="delete-btn">Delete Task</span>
  `;

  const todoContainer = document.querySelector(".todo-container");
  const taskSpan = li.querySelector("label span");
  const checkBox = li.querySelector("input[type='checkbox']");

  checkBox.addEventListener("change", () => {
    taskSpan.classList.toggle("completed", checkBox.checked);
    updateTaskCounter();
  });

  const editBtn = li.querySelector(".edit-btn");
  const deleteBtn = li.querySelector(".delete-btn");

  editBtn.addEventListener("click", () => {
    let updatedTask = prompt("Edit Your Task: ", taskSpan.textContent);
    if (!updatedTask) {
      console.log("Click on Edit Again");
      return;
    }

    taskSpan.textContent = updatedTask.trim();
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateTaskCounter();
  });

  let completed = document.querySelector("#completed-counter");
  let notCompleted = document.querySelector("#not-completed-counter");

  const updateTaskCounter = () => {
    let allTasks = document.querySelectorAll("li");
    let completedTasks = document.querySelectorAll(
      "input[type='checkbox']:checked",
    );
    let notCompletedTasks = allTasks.length - completedTasks.length;
    completed.textContent = completedTasks.length;
    notCompleted.textContent = notCompletedTasks;
  };

  taskList.append(li);
  updateTaskCounter();

  taskInput.value = "";
});
