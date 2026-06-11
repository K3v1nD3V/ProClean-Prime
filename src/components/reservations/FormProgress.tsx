"use client";

interface FormProgressProps {
  step: number;
  steps: string[];
  progress: number;
  stepErrorsCount: number;
}

export function FormProgress({
  step,
  steps,
  progress,
  stepErrorsCount,
}: FormProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-primary">
          Paso {step + 1} de {steps.length}
        </span>

        <span className="text-sm text-zinc-500">
          {steps[step]}
        </span>
      </div>
      <span className="sr-only">Errores en este paso: {stepErrorsCount}</span>

      <div className="mt-3 h-3 overflow-hidden rounded-full bg-zinc-200">
        <div
          className="h-full rounded-full bg-cta transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
