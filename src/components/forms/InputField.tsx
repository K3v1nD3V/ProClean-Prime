interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  type?: string;
  min?: string;
}

export function InputField({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  type,
  min,
}: InputFieldProps) {
  const hasError = touched && !!error;

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-zinc-700">
        {label}
      </label>

      <input
        name={name}
        type={type || "text"}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onBlur?.()}
        className={
          `w-full rounded-2xl px-5 py-4 outline-none transition ` +
          (hasError
            ? "border border-red-500 bg-white focus:border-red-500 focus:ring-4 focus:ring-red-200"
            : "border border-zinc-200 bg-white focus:border-cta focus:ring-4 focus:ring-yellow-200")
        }
      />

      {hasError && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
