/**
 * Reusable password field.
 *
 * Props:
 * - id: string
 * - name: string
 * - label: string
 * - value: string
 * - onChange: (value: string) => void
 * - onBlur: () => void
 * - error?: string
 * - placeholder?: string
 * - disabled?: boolean
 * - required?: boolean
 */

export default function PasswordField({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  error = "",
  placeholder = "",
  disabled = false,
  required = false,
}) {
  const showError = !!error;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      <input
        id={id}
        name={name}
        type="password"
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
