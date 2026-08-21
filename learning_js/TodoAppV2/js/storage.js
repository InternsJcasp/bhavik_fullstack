import { STORAGE_KEY } from "./constants.js";

export function getTasks() {
  try {
    const rawTasks = localStorage.getItem(STORAGE_KEY);

    if (rawTasks === null) {
      return [];
    }

    const parsedTasks = JSON.parse(rawTasks);

    return Array.isArray(parsedTasks) ? parsedTasks : [];
  } catch (error) {
    console.error("Could not read tasks from storage:", error);
    return [];
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error("Could not save tasks:", error);
    return false;
  }
}
