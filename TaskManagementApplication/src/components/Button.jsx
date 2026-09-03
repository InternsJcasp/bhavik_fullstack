export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100",
    outline:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",
    ghost:
      "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-900 dark:text-white dark:hover:bg-gray-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
