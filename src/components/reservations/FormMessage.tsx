"use client";

interface FormMessageProps {
  submitError: string | null;
  submitSuccess: boolean;
}

export function FormMessage({ submitError, submitSuccess }: FormMessageProps) {
  if (!submitError && !submitSuccess) return null;

  return (
    <div className="mt-6 rounded-3xl border px-5 py-4 text-sm shadow-sm sm:px-6">
      {submitSuccess ? (
        <p className="text-emerald-600">Tu reserva se envió correctamente. Te contactaremos pronto.</p>
      ) : (
        <p className="text-rose-500">{submitError}</p>
      )}
    </div>
  );
}
