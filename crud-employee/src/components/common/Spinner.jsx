export default function Spinner({ size = "md" }) {
  const sizeClass =
    size === "sm"
      ? "h-4 w-4 border-2"
      : size === "lg"
        ? "h-8 w-8 border-4"
        : "h-6 w-6 border-3";

  return (
    <div
      className={`inline-block ${sizeClass} border-gray-300 border-t-black rounded-full animate-spin`}
      role="status"
      aria-label="Loading"
    />
  );
}
