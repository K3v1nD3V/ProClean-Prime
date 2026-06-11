import { useState, useMemo } from "react";

export type FormState = {
  nombre: string;
  apellido: string;
  correo: string;
  celular: string;

  barrio: string;
  direccion: string;
  llegada: string;
  apartamento: string;

  tipoDocumento: string;
  numeroDocumento: string;

  referido: string;
  planServicio: string;
  requerimientos: string;
  fechas: string[];
  hora: string;
};

const INITIAL_FORM_STATE: FormState = {
  nombre: "",
  apellido: "",
  correo: "",
  celular: "",

  barrio: "",
  direccion: "",
  llegada: "",
  apartamento: "",

  tipoDocumento: "",
  numeroDocumento: "",

  referido: "",
  planServicio: "",
  requerimientos: "",
  fechas: [],
  hora: "",
};

const STEPS = [
  "Información",
  "Ubicación",
  "Identificación",
  "Servicio",
  "Pago",
];

const STEP_FIELDS: string[][] = [
  ["nombre", "apellido", "correo", "celular"],
  ["barrio", "direccion", "llegada", "apartamento"],
  ["tipoDocumento", "numeroDocumento"],
  ["referido", "planServicio", "fechas", "hora", "requerimientos"],
  [],
];

const REQUIRED_FIELDS_PER_STEP: string[][] = [
  ["nombre", "apellido", "correo", "celular"],
  ["barrio", "direccion"],
  ["tipoDocumento", "numeroDocumento"],
  ["planServicio", "fechas", "hora"],
  [],
];

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isNumeric(value: string) {
  return /^\d+$/.test(value);
}

function validateField(key: string, value: string | string[]): string {
  // Handle fechas array separately
  if (key === "fechas") {
    const fechas = Array.isArray(value) ? value : [];
    if (fechas.length === 0) return "Debes seleccionar al menos una fecha.";
    return "";
  }

  const v = (typeof value === "string" ? value : "")?.trim() || "";

  switch (key) {
    case "nombre":
      if (v.length === 0) return "Nombre es obligatorio.";
      if (v.length < 2) return "El nombre debe tener al menos 2 caracteres.";
      return "";

    case "apellido":
      if (v.length === 0) return "Apellido es obligatorio.";
      if (v.length < 2) return "El apellido debe tener al menos 2 caracteres.";
      return "";

    case "correo":
      if (v.length === 0) return "Correo electrónico es obligatorio.";
      if (!isEmail(v)) return "Ingresa un correo electrónico válido.";
      return "";

    case "celular":
      if (v.length === 0) return "Celular es obligatorio.";
      if (!isNumeric(v)) return "El celular debe contener solo números.";
      if (v.length !== 10) return "El celular debe tener exactamente 10 dígitos.";
      return "";

    case "barrio":
      if (v.length === 0) return "Barrio es obligatorio.";
      return "";

    case "direccion":
      if (v.length === 0) return "Dirección es obligatoria.";
      return "";

    case "tipoDocumento":
      if (v.length === 0) return "Tipo de documento es obligatorio.";
      return "";

    case "numeroDocumento":
      if (v.length === 0) return "Número de documento es obligatorio.";
      return "";

    case "planServicio":
      if (v.length === 0) return "Tipo de servicio es obligatorio.";
      return "";

    case "hora":
      if (v.length === 0) return "Hora es obligatoria.";
      return "";

    // Optional fields: llegada, apartamento, referido, requerimientos
    default:
      return "";
  }
}

function validateAll(formValues: FormState): Record<string, string> {
  const keys = Object.keys(formValues) as Array<keyof FormState>;
  const errors: Record<string, string> = {};

  keys.forEach((k) => {
    const val = formValues[k];
    errors[k as string] = validateField(k as string, val as string | string[]);
  });

  return errors;
}

function validateStep(
  stepIndex: number,
  formValues: FormState
): Record<string, string> {
  const errors = validateAll(formValues);
  const result: Record<string, string> = {};

  STEP_FIELDS[stepIndex].forEach((f) => {
    result[f] = errors[f] || "";
  });

  return result;
}

function isStepValid(stepIndex: number, formValues: FormState): boolean {
  const errors = validateAll(formValues);
  const required = REQUIRED_FIELDS_PER_STEP[stepIndex] || [];

  return required.every((f) => !errors[f]);
}

export function useReservationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const progress = useMemo(() => {
    return ((step + 1) / STEPS.length) * 100;
  }, [step]);

  const errors = validateAll(form);
  const stepFieldErrors = validateStep(step, form);
  const stepErrorsCount = Object.values(stepFieldErrors).filter(Boolean).length;
  const currentStepValid = isStepValid(step, form);

  function updateField(key: string, value: string | string[]) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
    setSubmitError(null);
    setSubmitSuccess(false);
  }

  function goToStep(newStep: number) {
    setStep(newStep);
  }

  function nextStep() {
    if (currentStepValid && step < STEPS.length - 1) {
      setStep((prev) => prev + 1);
      return true;
    }
    return false;
  }

  function prevStep() {
    if (step > 0) {
      setStep((prev) => prev - 1);
      return true;
    }
    return false;
  }

  function markFieldsAsTouched(fields: string[]) {
    setTouched((p) => {
      const newTouched = { ...p };
      fields.forEach((f) => {
        newTouched[f] = true;
      });
      return newTouched;
    });
  }

  function markCurrentStepFieldsAsTouched() {
    const required = REQUIRED_FIELDS_PER_STEP[step] || [];
    markFieldsAsTouched(required);
  }

  function resetForm() {
    setForm(INITIAL_FORM_STATE);
    setTouched({});
    setStep(0);
    setSubmitError(null);
    setSubmitSuccess(false);
  }

  return {
    // State
    step,
    form,
    touched,
    isSubmitting,
    submitError,
    submitSuccess,

    // UI Data
    steps: STEPS,
    progress,
    errors,
    stepFieldErrors,
    stepErrorsCount,
    currentStepValid,
    stepFields: STEP_FIELDS,
    requiredFieldsPerStep: REQUIRED_FIELDS_PER_STEP,

    // Actions
    updateField,
    setTouched,
    setIsSubmitting,
    setSubmitError,
    setSubmitSuccess,
    goToStep,
    nextStep,
    prevStep,
    markFieldsAsTouched,
    markCurrentStepFieldsAsTouched,
    resetForm,
  };
}
