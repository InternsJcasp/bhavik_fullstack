/**
 * Reusable reset button for forms.
 *
 * Props:
 * - onClick: () => void
 * - disabled?: boolean
 * - label?: string
 */

export default function ResetButton({
  onClick,
  disabled = false,
  label = "Reset",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded border border-gray-300 px-4 py-2 ${
        disabled
          ? "cursor-not-allowed bg-gray-100 text-gray-400"
          : "hover:bg-gray-50 bg-white text-gray-900"
      }`}
    >
      {label}
    </button>
  );
}
