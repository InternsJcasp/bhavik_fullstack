import { taskConstants } from "../constants/taskConstants";

// Mock tasks data
let MOCK_TASKS = [
  {
    id: "t1",
    title: "Setup project",
    description: "Working on Real World Project",
    status: taskConstants.TODO,
    userId: "1",
  },
  {
    id: "t2",
    title: "Write docs",
    description: "Have to complete the documentation writing",
    status: taskConstants.IN_PROGRESS,
    userId: "1",
  },
  {
    id: "t3",
    title: "Review PR",
    description: "Have to Review the PR on time to merge properly",
    status: taskConstants.DONE,
    userId: "2",
  },
  {
    id: "t4",
    title: "Deploy app",
    description: "Have to deploy the app on this weekend anyhow",
    status: taskConstants.TODO,
    userId: "3",
  },
];

let nextId = 5; // next task id counter

export const taskService = {
  // Get all tasks for a user
  getTasks(userId) {
    return MOCK_TASKS.filter((t) => t.userId === userId);
  },

  // Create a new task for a user
  createTask({ title, description, status, userId }) {
    const newTask = {
      id: `t${nextId++}`,
      title,
      description,
      status: status || taskConstants.TODO,
      userId,
    };
    MOCK_TASKS.push(newTask);
    return newTask;
  },

  // Update an existing task (only if it belongs to the user)
  updateTask(id, changes, userId) {
    const index = MOCK_TASKS.findIndex(
      (t) => t.id === id && t.userId === userId,
    );
    if (index === -1) throw new Error("Task not found");
    MOCK_TASKS[index] = { ...MOCK_TASKS[index], ...changes };
    return MOCK_TASKS[index];
  },

  // Delete a task (only if it belongs to the user)
  deleteTask(id, userId) {
    const index = MOCK_TASKS.findIndex(
      (t) => t.id === id && t.userId === userId,
    );
    if (index === -1) throw new Error("Task not found");
    MOCK_TASKS.splice(index, 1);
  },
};
