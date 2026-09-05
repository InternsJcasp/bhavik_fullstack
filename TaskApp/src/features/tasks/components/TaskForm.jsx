import { useEffect, useState } from "react";

const initialValues = {
  title: "",
  description: "",
  status: "not-started",
  priority: "medium",
  dueDate: "",
};

export const TaskForm = ({ onSubmit, editingTask, onCancel }) => {
  const [values, setValues] = useState(initialValues);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (editingTask) {
      setValues({
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
        priority: editingTask.priority,
        dueDate: editingTask.dueDate,
      });
      setFormError(null);
      return;
    }

    setValues(initialValues);
    setFormError(null);
  }, [editingTask]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.title.trim()) {
      setFormError("Task title is required");
      return;
    }

    if (!values.dueDate) {
      setFormError("Due date is required");
      return;
    }

    setFormError(null);

    const result = onSubmit(values);

    if (!result.success) {
      setFormError(result.message);
      return;
    }

    if (!editingTask) {
      setValues(initialValues);
    }
  };

  const handleCancel = () => {
    setValues(initialValues);
    setFormError(null);
    onCancel();
  };

  const isEditing = Boolean(editingTask);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-black">
            {isEditing ? "Edit task" : "Create a task"}
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            {isEditing
              ? "Update the details of your selected task."
              : "Add a task and stay on top of your work."}
          </p>
        </div>

        {isEditing && (
          <button
            type="button"
            onClick={handleCancel}
            className="w-fit rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
          >
            Cancel edit
          </button>
        )}
      </div>

      {formError && (
        <div className="mt-5 rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-black">
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-semibold text-black"
          >
            Task title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            value={values.title}
            onChange={handleChange}
            placeholder="For example: Complete task feature"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-semibold text-black"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            rows="4"
            placeholder="Add a short description of this task"
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Status
            </label>

            <select
              id="status"
              name="status"
              value={values.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            >
              <option value="not-started">Not Started</option>
              <option value="todo">Todo</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="priority"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Priority
            </label>

            <select
              id="priority"
              name="priority"
              value={values.priority}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="dueDate"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Due date
            </label>

            <input
              id="dueDate"
              name="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <button
            type="submit"
            className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            {isEditing ? "Update task" : "Add task"}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
};
