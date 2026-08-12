// DOM: It is JS accessible tree strucutre of an HTML Page.

// DOM Selection: HTML ke kisi element ko JS mein access karna.
// Ex: document.getElementById, document.querySelector, document.querySelectorAll
// Technical Ex: const taskInput = document.querySelector("#task-btn")

// DOM Manipulation: After DOM Selection we can change the value of elements.
// Ex: Text Change - title.textContent = "How to upgrade Yourself."
// style Change - title.style.backgroundColor = "red"

// DOM Selection:
// A. getElementById()
// Jab element ki unique id pata ho.
// const title = document.getElementById("title");

// B. querySelector() - First matching element select karta hai.
// const title = document.querySelector("#title");

// Class:
// const button = document.querySelector(".add-btn");

// Element:
// const input = document.querySelector("input");

// C. querySelectorAll() - Multiple matching elements select karne ke liye.

// <li class="todo">Learn DOM</li>
// <li class="todo">Learn Events</li>
// <li class="todo">Build Todo App</li>

// const todos = document.querySelectorAll(".todo");

// Ab multiple elements milenge.
// todos.forEach((todo) => {
//   console.log(todo.textContent);
// });

// DOM Manipulation:

// A. Change Text — textContent
// title.textContent = "My Todo Application";

// B. Change HTML — innerHTML
// todoList.innerHTML = "<li>Learn DOM</li>";

// C. Change CSS - we change css
// title.style.color = "red";

// D. classList

// Add class
// title.classList.add("completed");

// Remove class
// title.classList.remove("completed");

// Toggle class
// title.classList.toggle("completed");

// Example:

// Checkbox checked
//       ↓
// completed class add

// Checkbox unchecked
//       ↓
// completed class remove
