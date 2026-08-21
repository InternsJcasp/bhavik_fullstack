# Todo App

A responsive and persistent Todo application built with **HTML, CSS, and Vanilla JavaScript**.

The application allows users to create, manage, search, filter, sort, edit, complete, and delete tasks. All tasks are stored in the browser using `localStorage`, so they remain available after a page refresh.

---

## Features

- Add a new task with:
  - Title
  - Priority
  - Category
  - Due date
- Mark tasks as completed or incomplete.
- Update task status:
  - Not Started
  - In Progress
  - Completed
- Edit task titles.
- Delete an individual task.
- Clear only completed tasks.
- Delete all tasks.
- Search tasks by title.
- Filter tasks by:
  - Status
  - Category
  - Priority
- Sort tasks by:
  - Newest first
  - Due date: nearest first
  - Due date: latest first
  - Priority: highest first
  - Priority: lowest first
- View completed task count.
- View incomplete task count.
- View completion percentage.
- Persist tasks in browser `localStorage`.
- Handle invalid or unavailable local storage gracefully.
- Responsive layout for desktop and mobile screens.
- Support light/dark theme toggle if enabled in the UI.

---

## Tech Stack

| Technology              | Purpose                                 |
| ----------------------- | --------------------------------------- |
| HTML5                   | Application structure and form controls |
| CSS3                    | Responsive UI styling and theme styles  |
| JavaScript (ES Modules) | Application logic and DOM interaction   |
| Browser Local Storage   | Persistent task storage                 |
| Lucide Icons            | Optional icons used in the UI           |

---

## Project Structure

```text
todo-app/
├── index.html
├── README.md
├── css/
│   ├── variables.css
│   ├── main.css
│   └── responsive.css
└── js/
    ├── constants.js
    ├── storage.js
    ├── task-service.js
    ├── task-view.js
    └── main.js
```

---

## How to Run Locally

Because this project uses JavaScript modules (`type="module"`), run it using a local development server.

### VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

---

## How to Use

### Add a task

1. Enter a task title.
2. Select a priority.
3. Select a category.
4. Optionally choose a due date.
5. Click **Add Todo**.

### Complete a task

- Click the checkbox next to a task.
- The task becomes completed and its status is updated to `Completed`.

### Change task status

- Use the status dropdown inside a task item.
- Selecting `Completed` automatically marks the task as complete.
- Selecting `Not Started` or `In Progress` marks the task as incomplete.

### Search tasks

- Type text into the search input.
- The task list updates while typing.

### Filter tasks

Use the filter controls to show tasks matching a selected:

- Status
- Category
- Priority

Choose `All` to disable a specific filter.

### Sort tasks

Use the sort dropdown to arrange visible tasks by creation date, due date, or priority.

### Clear completed tasks

- Click **Clear Completed Tasks**.
- Only tasks with `completed: true` are removed from browser storage.

### Delete all tasks

- Click **Delete All Tasks**.
- Confirm the browser dialog.
- All tasks are removed from the Todo App storage key.

---

## Data Model

Each task is stored as an object similar to this:

```js
{
  id: "1755761234567",
  title: "Learn browser events",
  priority: "High",
  category: "study",
  dueDate: "2026-08-25",
  status: "in-progress",
  completed: false,
  createdAt: "2026-08-21T10:30:00.000Z"
}
```

### Field Description

| Field       | Description                             |
| ----------- | --------------------------------------- |
| `id`        | Unique task identifier                  |
| `title`     | User-entered task title                 |
| `priority`  | Low, Medium, High, or Blocker           |
| `category`  | Study, Work, or Personal                |
| `dueDate`   | Optional task due date                  |
| `status`    | Not Started, In Progress, or Completed  |
| `completed` | Boolean completion state                |
| `createdAt` | ISO timestamp when the task was created |

---

## Application Architecture

The project separates responsibilities into focused modules.

### `main.js`

Acts as the application controller.

Responsibilities:

- Select DOM elements.
- Listen for user events.
- Add, edit, delete, and update tasks.
- Read filter values.
- Save updated task data.
- Trigger UI rendering.

### `storage.js`

Handles browser storage operations.

Responsibilities:

- Read tasks from `localStorage`.
- Convert stored JSON back into JavaScript objects.
- Save tasks using JSON serialization.
- Handle storage and parsing errors safely.

### `task-service.js`

Contains business logic.

Responsibilities:

- Create new task objects.
- Filter visible tasks.
- Sort tasks by priority or date.
- Calculate task counters and completion percentage.

### `task-view.js`

Handles DOM rendering.

Responsibilities:

- Render task list items.
- Render task summary counters.
- Show success and error messages.
- Create task controls such as checkboxes, buttons, and status dropdowns.

---

## Important JavaScript Concepts Used

### `data-*` Attributes

Each task row stores its task ID in the DOM:

```html
<li data-task-id="1755761234567"></li>
```

Buttons and controls store their action:

```html
<button data-action="edit">Edit</button>
<button data-action="delete">Delete</button>
```

This allows the app to identify both:

- Which task was clicked.
- Which action the user requested.

### JSON Serialization

`localStorage` stores strings only, so task arrays are converted before saving:

```js
localStorage.setItem("todo-app-tasks", JSON.stringify(tasks));
```

When loading:

```js
const tasks = JSON.parse(localStorage.getItem("todo-app-tasks"));
```

### Safe DOM Rendering

Task titles are rendered with `textContent` rather than `innerHTML`:

```js
title.textContent = task.title;
```

This ensures user-entered task text is displayed as plain text instead of being interpreted as executable HTML.

---

## Browser Storage

Tasks are saved under a dedicated local storage key:

```js
todo - app - tasks;
```

The app intentionally removes only this key when deleting all tasks:

```js
localStorage.removeItem("todo-app-tasks");
```

It does not use:

```js
localStorage.clear();
```

because `localStorage.clear()` would remove every local storage key for the current website, including data belonging to other features.

---

## Future Improvements

- Add task descriptions and notes.
- Add an undo feature after deleting a task.
- Add unit tests for filtering, sorting, and storage logic.
- Add IndexedDB or backend storage for larger datasets and multi-device sync.
- Add user authentication.

---

## Learning Goals

This project was created to practice:

- DOM manipulation
- Browser events
- Event bubbling
- Event delegation
- Form submission handling
- `localStorage`
- JSON serialization and deserialization
- Error handling
- Filtering and sorting arrays
- ES module imports and exports
- Responsive CSS
- Safe user-input rendering

---

## License

This project is available for learning and personal use.

You may add an MIT License if you plan to publish this project as open source.
