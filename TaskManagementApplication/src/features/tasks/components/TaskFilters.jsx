// features/tasks/components/TaskFilters.jsx
import { taskConstants } from "../constants/taskConstants";

export default function TaskFilters({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-700 dark:text-gray-300">
        Status:
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-2 py-1.5 text-sm"
      >
        <option value="ALL">All</option>
        <option value={taskConstants.TODO}>TODO</option>
        <option value={taskConstants.IN_PROGRESS}>IN_PROGRESS</option>
        <option value={taskConstants.DONE}>DONE</option>
      </select>
    </div>
  );
}
