/**
 * Reusable input field for text, email, tel, date, etc.
 *
 * Props:
 * - id: string (for HTML label/input linkage)
 * - name: string (field name, used in forms)
 * - label: string (visible label text)
 * - type: "text" | "email" | "tel" | "date" | ... (HTML input type)
 * - value: string (controlled value)
 * - onChange: (value: string) => void
 * - onBlur: () => void
 * - error?: string (error message, if any)
 * - placeholder?: string
 * - disabled?: boolean
 * - required?: boolean
 */

export default function InputField({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error = "",
  placeholder = "",
  disabled = false,
  required = false,
}) {
  const showError = !!error; // true if error string is non-empty

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        className={`mt-1 w-full rounded border px-3 py-2 outline-none focus:border-blue-500 ${
          showError ? "border-red-500" : "border-gray-300"
        } ${disabled ? "bg-gray-100 text-gray-500" : "bg-white text-gray-900"}`}
      />

      {showError && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
