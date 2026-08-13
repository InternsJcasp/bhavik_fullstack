export const addTodo = (todos, taskText) => {
  todos.push({
    id: Date.now(),
    title: taskText.title,
    completed: false,
  });
};

export const editTodo = (todos, taskText, id) => {
  return todos.filter((todo) => {
    if (todo.id === id) {
    }
  });
};
