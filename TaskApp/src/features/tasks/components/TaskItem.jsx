const priorityLabels = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

const statusLabels = {
  "not-started": "Not Started",
  todo: "Todo",
  completed: "Completed",
};

const formatDate = (dateValue) => {
  if (!dateValue) {
    return "No due date";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateValue));
};

export const TaskItem = ({ task, onEdit, onDelete, onStatusChange }) => {
  const handleStatusChange = (event) => {
    onStatusChange(task.id, {
      title: task.title,
      description: task.description,
      status: event.target.value,
      priority: task.priority,
      dueDate: task.dueDate,
    });
  };

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-gray-300 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700">
              {priorityLabels[task.priority] || "Medium"} priority
            </span>

            <span className="rounded-full border border-gray-300 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700">
              {statusLabels[task.status] || "Not Started"}
            </span>
          </div>

          <h3 className="mt-3 wrap-break-word text-xl font-bold text-black">
            {task.title}
          </h3>

          {task.description && (
            <p className="mt-2 wrap-break-word leading-6 text-gray-600">
              {task.description}
            </p>
          )}
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => onEdit(task)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="rounded-lg bg-black px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 border-t border-gray-200 pt-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Due date
          </p>

          <p className="mt-1 text-sm font-semibold text-black">
            {formatDate(task.dueDate)}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Created
          </p>

          <p className="mt-1 text-sm font-semibold text-black">
            {formatDate(task.createdAt)}
          </p>
        </div>

        <div>
          <label
            htmlFor={`status-${task.id}`}
            className="text-xs font-medium uppercase tracking-wide text-gray-500"
          >
            Update progress
          </label>

          <select
            id={`status-${task.id}`}
            value={task.status}
            onChange={handleStatusChange}
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-black outline-none transition focus:border-black focus:ring-1 focus:ring-black"
          >
            <option value="not-started">Not Started</option>
            <option value="todo">Todo</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </article>
  );
};
