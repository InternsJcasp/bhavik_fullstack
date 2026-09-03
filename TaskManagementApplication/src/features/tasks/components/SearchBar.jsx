// features/tasks/components/SearchBar.jsx
export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex-1">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by title or description..."
        className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm"
      />
    </div>
  );
}
