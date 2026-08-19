// Problem 2: 1000 Items Ki List
// Scenario: Tu ek Todo app bana raha hai. User ke paas 1000 todos ho sakte hain.

// Problems:
// 1000 event listeners = Memory waste
// Naya todo add kiya? Uspe listener nahi hai! (bhool gaya attach karna)
// Sab cleanup karna hai? 1000 listeners remove kar!
// Yehi problem solve karti hai EVENT DELEGATION! ✅

// Problematic Code:
// Har todo item pe alag listener laga diya:
todos.forEach((todo) => {
  const deleteBtn = todo.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    deleteTodo(todo.id);
  });
});

// Solution:
// Event Delegation - Asli Solution
// Concept: Saare child elements ke bajaye, parent pe ek listener laga de!

// PRODUCTION WAY
const todoList = document.querySelector(".todo-list");

todoList.addEventListener("click", (e) => {
  // Check kar raha hai - kis element pe click hua?
  const deleteBtn = e.target.closest(".delete-btn");

  if (deleteBtn) {
    const todoItem = deleteBtn.closest(".todo-item");
    const todoId = todoItem.dataset.id;
    deleteTodo(todoId);
  }
});

// Event Delegation: Main 3 uses:

// Parent pe ek listener
todoList.addEventListener("click", (e) => {
  // Ab yahan se magic start hota hai
});

// e.target se identify karna
todoList.addEventListener("click", (e) => {
  // Wrong - Seedha parent ka kaam kar diya
  deleteTodo(); // Kaunsa item? Pata nahi!

  // Right - Check kar kis element pe click hua
  const deleteBtn = e.target.closest(".delete-btn");

  if (deleteBtn) {
    // Ab pata chala - delete button pe click hua
    const todoItem = deleteBtn.closest(".todo-item");
    const todoId = todoItem.dataset.id;
    deleteTodo(todoId);
  }
});

// Conditional Handling - Different Elements, Different Actions
todoList.addEventListener("click", (e) => {
  const todoItem = e.target.closest(".todo-item");

  if (!todoItem) return; // Bahar click hua, ignore

  // Delete button pe click?
  if (e.target.closest(".delete-btn")) {
    deleteTodo(todoItem.dataset.id);
    return;
  }

  // Checkbox pe click?
  if (e.target.closest(".todo-checkbox")) {
    toggleTodo(todoItem.dataset.id);
    return;
  }

  // Edit button pe click?
  if (e.target.closest(".edit-btn")) {
    editTodo(todoItem.dataset.id);
    return;
  }
});
