interface SelectFieldProps {
  name?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: string[];
  error?: string;
  touched?: boolean;
}

export function SelectField({
  name,
  label,
  value,
  onChange,
  onBlur,
  options,
  error,
  touched,
}: SelectFieldProps) {
  const hasError = touched && !!error;

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-zinc-700">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onBlur?.()}
        className={
          `w-full rounded-2xl bg-white px-5 py-4 outline-none transition ` +
          (hasError
            ? "border border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-200"
            : "border border-zinc-200 focus:border-cta focus:ring-4 focus:ring-yellow-200")
        }
      >
        <option value="">Selecciona una opción</option>

        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {hasError && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
