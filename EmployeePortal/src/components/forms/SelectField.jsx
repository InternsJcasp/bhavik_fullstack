/**
 * Reusable select field.
 *
 * Props:
 * - id: string
 * - name: string
 * - label: string
 * - value: string
 * - onChange: (value: string) => void
 * - onBlur: () => void
 * - error?: string
 * - options: { value: string; label: string }[]
 * - placeholder?: string (for the empty option)
 * - disabled?: boolean
 * - required?: boolean
 */

export default function SelectField({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  error = "",
  options = [],
  placeholder = "Select an option",
  disabled = false,
  required = false,
}) {
  const showError = !!error;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        className={`mt-1 w-full rounded border px-3 py-2 outline-none focus:border-blue-500 ${
          showError ? "border-red-500" : "border-gray-300"
        } ${disabled ? "bg-gray-100 text-gray-500" : "bg-white text-gray-900"}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {showError && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
