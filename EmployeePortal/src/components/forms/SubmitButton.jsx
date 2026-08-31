/**
 * Reusable submit button for forms.
 *
 * Props:
 * - disabled?: boolean
 * - label?: string
 * - loading?: boolean (optional, for future API calls)
 */

export default function SubmitButton({
  disabled = false,
  label = "Submit",
  loading = false,
}) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className="hover:bg-gray-800"
      className={`rounded bg-black px-4 py-2 text-white ${
        disabled || loading
          ? "cursor-not-allowed bg-gray-300"
          : "bg-black hover:bg-black/80"
      }`}
    >
      {loading ? "Submitting..." : label}
    </button>
  );
}
