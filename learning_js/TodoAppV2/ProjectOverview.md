# Todo App – Project Overview

A responsive Todo application built with **HTML, CSS, and Vanilla JavaScript**.

The project helps users create and manage daily tasks. Tasks are stored in browser `localStorage`, so they remain available after refreshing the page.

## Main Features

- Add tasks with title, priority, category, and due date
- Mark tasks as completed or incomplete
- Change task status: Not Started, In Progress, or Completed
- Edit and delete individual tasks
- Clear completed tasks
- Delete all tasks
- Search tasks by title
- Filter tasks by status, category, and priority
- Sort tasks by date and priority
- Show completed, incomplete, and completion-percentage counters
- Store data persistently using `localStorage`
- Responsive layout for mobile and desktop

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- ES Modules
- Browser Local Storage

## Architecture

```text
main.js         → Handles events and connects all modules
storage.js      → Reads and saves tasks in localStorage
task-service.js → Creates, filters, sorts, and summarizes tasks
task-view.js    → Renders tasks, counters, and messages in the UI
```

## Key Concepts Practiced

- DOM manipulation
- Event bubbling and event delegation
- Form handling with `preventDefault()`
- `data-*` attributes
- JSON serialization with `JSON.stringify()` and `JSON.parse()`
- Error handling with `try/catch`
- Array methods: `filter()`, `find()`, `sort()`, and `forEach()`
- Responsive CSS design
- Safe rendering using `textContent`

## Data Persistence

Tasks are stored under a dedicated `localStorage` key:

```js
todo - app - tasks;
```

Each task contains values such as:

```js
{
  id: "unique-task-id",
  title: "Learn JavaScript",
  priority: "High",
  category: "study",
  dueDate: "2026-08-25",
  status: "in-progress",
  completed: false,
  createdAt: "2026-08-21T10:30:00.000Z"
}
```

## Purpose

This project was built to practice production-style frontend fundamentals: separating application logic into modules, handling browser storage safely, rendering dynamic UI, and managing user interactions through event delegation.
