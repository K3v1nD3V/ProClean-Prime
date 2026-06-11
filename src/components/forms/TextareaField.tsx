interface TextareaFieldProps {
  name: string;
  label: string;
  subtitle?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
}

export function TextareaField({
  name,
  label,
  subtitle,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: TextareaFieldProps) {
  const hasError = touched && !!error;

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-zinc-700">
        {label}
      </label>

      {subtitle && (
        <p className="mb-2 text-xs text-zinc-500">{subtitle}</p>
      )}

      <textarea
        name={name}
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onBlur?.()}
        className={
          `w-full rounded-2xl px-5 py-4 outline-none transition ` +
          (hasError
            ? "border border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-200"
            : "border border-zinc-200 px-5 py-4 focus:border-cta focus:ring-4 focus:ring-yellow-200")
        }
      />

      {hasError && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
