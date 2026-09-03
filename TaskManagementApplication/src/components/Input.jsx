export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  className = "",
  ...props
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-md border px-3 py-2 text-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:ring-white"
          }
          bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
