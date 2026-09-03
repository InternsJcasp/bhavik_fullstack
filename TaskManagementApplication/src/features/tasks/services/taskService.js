import { taskConstants } from "../constants/taskConstants";

const STORAGE_KEY = "mock_tasks";

function loadTasks() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  // default tasks
  return [
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
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

let MOCK_TASKS = loadTasks();
let nextId = MOCK_TASKS.length + 1;

export const taskService = {
  getTasks(userId) {
    return MOCK_TASKS.filter((t) => t.userId === userId);
  },
  createTask({ title, description, status, userId }) {
    const newTask = {
      id: `t${nextId++}`,
      title,
      description,
      status: status || taskConstants.TODO,
      userId,
    };
    MOCK_TASKS.push(newTask);
    saveTasks(MOCK_TASKS);
    return newTask;
  },
  updateTask(id, changes, userId) {
    const index = MOCK_TASKS.findIndex(
      (t) => t.id === id && t.userId === userId,
    );
    if (index === -1) throw new Error("Task not found");
    MOCK_TASKS[index] = { ...MOCK_TASKS[index], ...changes };
    saveTasks(MOCK_TASKS);
    return MOCK_TASKS[index];
  },
  deleteTask(id, userId) {
    const index = MOCK_TASKS.findIndex(
      (t) => t.id === id && t.userId === userId,
    );
    if (index === -1) throw new Error("Task not found");
    MOCK_TASKS.splice(index, 1);
    saveTasks(MOCK_TASKS);
  },
};
