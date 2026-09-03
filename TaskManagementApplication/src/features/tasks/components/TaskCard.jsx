import { taskConstants } from "../constants/taskConstants";

const statusColors = {
  [taskConstants.TODO]:
    "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100",
  [taskConstants.IN_PROGRESS]:
    "bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-100",
  [taskConstants.DONE]:
    "bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-100",
};

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
          {task.title}
        </h3>
        <span
          className={
            "px-2 py-0.5 text-xs rounded " +
            (statusColors[task.status] || "bg-gray-100 text-gray-700")
          }
        >
          {task.status}
        </span>
      </div>

      {task.description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {task.description}
        </p>
      )}

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="text-sm text-blue-700 dark:text-blue-400 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-sm text-red-700 dark:text-red-400 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
