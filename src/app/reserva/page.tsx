"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  User,
  MapPin,
  ShieldCheck,
  Sparkles,
  Mail,
  Calendar,
  Clock,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { createReservation } from "@/api/reservation";

const steps = [
  "Información",
  "Ubicación",
  "Identificación",
  "Servicio",
];

export default function ReservaPage() {
  const [step, setStep] = useState(0);

  type FormState = {
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
    tipoServicio: string;
    requerimientos: string;
     fechas: string[];
    hora: string;
  };

  const [form, setForm] = useState<FormState>({
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
    tipoServicio: "",
    requerimientos: "",
    fechas: [],
    hora: "",
  });

  // touched fields to control when to show validation errors
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation helpers centralized
  function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isNumeric(value: string) {
    return /^\d+$/.test(value);
  }

  function validateField(key: string, value: string | string[]) {
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

      case "tipoServicio":
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

  function validateAll(formValues: FormState) {
    const keys = Object.keys(formValues) as Array<keyof FormState>;
    const errors: Record<string, string> = {};

    keys.forEach((k) => {
      const val = formValues[k];
      errors[k as string] = validateField(k as string, val as string | string[]);
    });

    return errors;
  }

  // Fields per step and required fields per step
  const stepFields: string[][] = [
    ["nombre", "apellido", "correo", "celular"],
    ["barrio", "direccion", "llegada", "apartamento"],
    ["tipoDocumento", "numeroDocumento"],
    ["referido", "tipoServicio", "fechas", "hora", "requerimientos"],
  ];

  const requiredFieldsPerStep: string[][] = [
    ["nombre", "apellido", "correo", "celular"],
    ["barrio", "direccion"],
    ["tipoDocumento", "numeroDocumento"],
    ["tipoServicio", "fechas", "hora"],
  ];

  function validateStep(stepIndex: number, formValues: FormState) {
    const errors = validateAll(formValues);
    const result: Record<string, string> = {};

    stepFields[stepIndex].forEach((f) => {
      result[f] = errors[f] || "";
    });

    return result;
  }

  function isStepValid(stepIndex: number, formValues: FormState) {
    const errors = validateAll(formValues);
    const required = requiredFieldsPerStep[stepIndex] || [];

    return required.every((f) => !errors[f]);
  }

  function updateField(key: string, value: string | string[]) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
    setSubmitError(null);
    setSubmitSuccess(false);
  }

  const progress = useMemo(() => {
    return ((step + 1) / steps.length) * 100;
  }, [step]);

  const errors = validateAll(form);
  const stepFieldErrors = validateStep(step, form);
  const stepErrorsCount = Object.values(stepFieldErrors).filter(Boolean).length;
  const currentStepValid = isStepValid(step, form);

  async function handleSubmit() {
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await createReservation({
        nombre: form.nombre,
        apellido: form.apellido,
        correo: form.correo,
        celular: form.celular,
        barrio: form.barrio,
        direccion: form.direccion,
        llegada: form.llegada || null,
        apartamento: form.apartamento || null,
        tipoDocumento: form.tipoDocumento,
        numeroDocumento: form.numeroDocumento,
        referido: form.referido,
        tipoServicio: form.tipoServicio,
        requerimientos: form.requerimientos || null,
        fechas: form.fechas,
        hora: form.hora,
      });
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar la reserva."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-zinc-100 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Reserva online
          </p>

          <h1 className="mt-3 text-4xl font-black text-primary md:text-5xl">
            Agenda tu servicio
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            Completa el formulario y nuestro equipo coordinará tu servicio
            profesional de limpieza.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.75fr]">
          {/* FORMULARIO */}
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            {/* Progress */}
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

            {/* STEP CONTENT */}
            <div className="space-y-6">
              {step === 0 && (
                <>
                  <div className="flex items-center gap-3">
                    <User className="h-6 w-6 text-cta" />
                    <h2 className="text-2xl font-bold text-primary">
                      Información personal
                    </h2>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <InputField
                        name="nombre"
                        label="Nombre"
                        value={form.nombre}
                        onChange={(v) => updateField("nombre", v)}
                        onBlur={() => setTouched((p) => ({ ...p, nombre: true }))}
                        error={errors.nombre}
                        touched={!!touched.nombre}
                    />

                    <InputField
                        name="apellido"
                        label="Apellido"
                        value={form.apellido}
                        onChange={(v) => updateField("apellido", v)}
                        onBlur={() => setTouched((p) => ({ ...p, apellido: true }))}
                        error={errors.apellido}
                        touched={!!touched.apellido}
                    />
                  </div>

                  <InputField
                    name="correo"
                    label="Correo electrónico"
                    value={form.correo}
                    onChange={(v) => updateField("correo", v)}
                    onBlur={() => setTouched((p) => ({ ...p, correo: true }))}
                    error={errors.correo}
                    touched={!!touched.correo}
                  />

                  <InputField
                    name="celular"
                    label="Celular"
                    value={form.celular}
                    onChange={(v) => updateField("celular", v)}
                    onBlur={() => setTouched((p) => ({ ...p, celular: true }))}
                    error={errors.celular}
                    touched={!!touched.celular}
                  />
                </>
              )}

              {step === 1 && (
                <>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-cta" />
                    <h2 className="text-2xl font-bold text-primary">
                      Ubicación
                    </h2>
                  </div>

                  <InputField
                    name="barrio"
                    label="Barrio"
                    value={form.barrio}
                    onChange={(v) => updateField("barrio", v)}
                    onBlur={() => setTouched((p) => ({ ...p, barrio: true }))}
                    error={errors.barrio}
                    touched={!!touched.barrio}
                  />

                  <InputField
                    name="direccion"
                    label="Dirección"
                    value={form.direccion}
                    onChange={(v) => updateField("direccion", v)}
                    onBlur={() => setTouched((p) => ({ ...p, direccion: true }))}
                    error={errors.direccion}
                    touched={!!touched.direccion}
                  />

                  <TextareaField
                    name="llegada"
                    label="Indicaciones de llegada"
                    value={form.llegada}
                    onChange={(v) => updateField("llegada", v)}
                    onBlur={() => setTouched((p) => ({ ...p, llegada: true }))}
                    error={errors.llegada}
                    touched={!!touched.llegada}
                  />

                  <InputField
                    name="apartamento"
                    label="Apartamento / edificio"
                    value={form.apartamento}
                    onChange={(v) => updateField("apartamento", v)}
                    onBlur={() => setTouched((p) => ({ ...p, apartamento: true }))}
                    error={errors.apartamento}
                    touched={!!touched.apartamento}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-cta" />
                    <h2 className="text-2xl font-bold text-primary">
                      Identificación
                    </h2>
                  </div>

                  <SelectField
                    name="tipoDocumento"
                    label="Tipo de documento"
                    value={form.tipoDocumento}
                    onChange={(v) => updateField("tipoDocumento", v)}
                    onBlur={() => setTouched((p) => ({ ...p, tipoDocumento: true }))}
                    error={errors.tipoDocumento}
                    touched={!!touched.tipoDocumento}
                    options={[
                      "Cédula de ciudadanía",
                      "NIT",
                      "Cédula de extranjería",
                      "Otro",
                    ]}
                  />

                  <InputField
                    name="numeroDocumento"
                    label="Número de documento"
                    value={form.numeroDocumento}
                    onChange={(v) =>
                      updateField("numeroDocumento", v)
                    }
                    onBlur={() => setTouched((p) => ({ ...p, numeroDocumento: true }))}
                    error={errors.numeroDocumento}
                    touched={!!touched.numeroDocumento}
                  />
                </>
              )}

              {step === 3 && (
                <>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-cta" />
                    <h2 className="text-2xl font-bold text-primary">
                      Servicio
                    </h2>
                  </div>

                  <SelectField
                    name="referido"
                    label="¿Cómo nos conociste?"
                    value={form.referido}
                    onChange={(v) => updateField("referido", v)}
                    onBlur={() => setTouched((p) => ({ ...p, referido: true }))}
                    error={errors.referido}
                    touched={!!touched.referido}
                    options={[
                      "Redes sociales",
                      "Página web",
                      "Referido",
                      "Otro",
                    ]}
                  />

                  <SelectField
                    name="tipoServicio"
                    label="Tipo de servicio"
                    value={form.tipoServicio}
                    onChange={(v) =>
                      updateField("tipoServicio", v)
                    }
                    onBlur={() => setTouched((p) => ({ ...p, tipoServicio: true }))}
                    error={errors.tipoServicio}
                    touched={!!touched.tipoServicio}
                    options={[
                      "Medio tiempo",
                      "Tiempo completo",
                      "Fija",
                      "Otro",
                    ]}
                  />

                  <div className="grid gap-5">
                    <DateRangeCalendar
                      selectedDates={form.fechas}
                      onSelectDates={(dates) => updateField("fechas", dates)}
                      onBlur={() => setTouched((p) => ({ ...p, fechas: true }))}
                      error={errors.fechas}
                      touched={!!touched.fechas}
                    />

                    <InputField
                      name="hora"
                      label="Hora del servicio"
                      type="time"
                      value={form.hora}
                      onChange={(v) => updateField("hora", v)}
                      onBlur={() => setTouched((p) => ({ ...p, hora: true }))}
                      error={errors.hora}
                      touched={!!touched.hora}
                    />
                  </div>

                  <TextareaField
                    name="requerimientos"
                    label="Requerimientos"
                    subtitle="Opcional · Esta información nos ayuda a preparar el servicio de la mejor manera posible."
                    value={form.requerimientos}
                    onChange={(v) =>
                      updateField("requerimientos", v)
                    }
                    onBlur={() => setTouched((p) => ({ ...p, requerimientos: true }))}
                    error={errors.requerimientos}
                    touched={!!touched.requerimientos}
                  />
                </>
              )}


            </div>

            {/* BOTONES */}
            <div className="mt-10 flex items-center justify-between">
              <Button
                variant="outline"
                disabled={step === 0}
                onClick={() => setStep((prev) => prev - 1)}
                className="rounded-full px-6"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Atrás
              </Button>

              <Button
                onClick={async () => {
                  if (!currentStepValid) {
                    // mark required fields as touched so errors appear
                    const required = requiredFieldsPerStep[step] || [];
                    setTouched((p) => {
                      const copy = { ...p };
                      required.forEach((f) => (copy[f] = true));
                      return copy;
                    });

                    return;
                  }

                  if (step < steps.length - 1) {
                    setStep((prev) => prev + 1);
                    return;
                  }

                  await handleSubmit();
                }}
                disabled={!currentStepValid || isSubmitting || submitSuccess}
                className="rounded-full bg-cta px-8 font-bold text-black hover:bg-cta/90"
              >
                {isSubmitting
                  ? "Enviando..."
                  : submitSuccess
                  ? "Reserva enviada"
                  : step === steps.length - 1
                  ? "Finalizar reserva"
                  : "Continuar"}

                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {(submitError || submitSuccess) && (
              <div className="mt-6 rounded-3xl border px-5 py-4 text-sm shadow-sm sm:px-6">
                {submitSuccess ? (
                  <p className="text-emerald-600">Tu reserva se envió correctamente. Te contactaremos pronto.</p>
                ) : (
                  <p className="text-rose-500">{submitError}</p>
                )}
              </div>
            )}

          </div>

          {/* RESUMEN */}
          <div className="space-y-6">
            <div className="sticky top-8 rounded-[2rem] bg-primary p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold">Resumen de tu reserva</h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white/6 p-2">
                      <User className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <p className="text-xs text-white/60">Cliente</p>
                      <p className="mt-1 text-sm font-medium text-white">{`${form.nombre} ${form.apellido}` || "Pendiente"}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/6 p-2">
                    <Mail className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-xs text-white/60">Correo</p>
                    <p className="mt-1 text-sm font-medium text-white">{form.correo || "Pendiente"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/6 p-2">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-xs text-white/60">Servicio</p>
                    <p className="mt-1 text-sm font-medium text-white">{form.tipoServicio || "Pendiente"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/6 p-2">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-xs text-white/60">Fechas</p>
                    <p className="mt-1 text-sm font-medium text-white">{form.fechas.length > 0 ? `${form.fechas.length} día${form.fechas.length !== 1 ? "s" : ""} seleccionado${form.fechas.length !== 1 ? "s" : ""}` : "Pendiente"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/6 p-2">
                    <Clock className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-xs text-white/60">Hora</p>
                    <p className="mt-1 text-sm font-medium text-white">{form.hora || "Pendiente"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/6 p-2">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-xs text-white/60">Ubicación</p>
                    <p className="mt-1 text-sm font-medium text-white">{`${form.barrio} · ${form.direccion}` || "Pendiente"}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>Servicio</span>
                    <span>$180.000</span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-sm text-white/80">
                    <span>Extras</span>
                    <span>$0</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-white/80">Total</span>
                    <span className="text-lg font-bold text-amber-400">$180.000 COP</span>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-white/5 p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white/6 p-1">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm text-white/80">Al completar el pago, recibirás un correo con la confirmación de tu reserva.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  type,
  min,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  type?: string;
  min?: string;
}) {
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

function TextareaField({
  name,
  label,
  subtitle,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: {
  name: string;
  label: string;
  subtitle?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
}) {
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

function SelectField({
  name,
  label,
  value,
  onChange,
  onBlur,
  options,
  error,
  touched,
}: {
  name?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: string[];
  error?: string;
  touched?: boolean;
}) {
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

function DateRangeCalendar({
  selectedDates,
  onSelectDates,
  onBlur,
  error,
  touched,
}: {
  selectedDates: string[];
  onSelectDates: (dates: string[]) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const hasError = touched && !!error;

  function getNextMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
  }

  function getPrevMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
  }

  function getDaysInMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  function getFirstDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function formatDate(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function toggleDate(date: Date) {
    const dateStr = formatDate(date);
    if (selectedDates.includes(dateStr)) {
      onSelectDates(selectedDates.filter((d) => d !== dateStr));
    } else {
      onSelectDates([...selectedDates, dateStr]);
    }
  }

  function isFutureDate(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date > today;
  }

  function renderCalendar(month: Date) {
    const daysInMonth = getDaysInMonth(month);
    const firstDay = getFirstDayOfMonth(month);
    const days: (Date | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(month.getFullYear(), month.getMonth(), day));
    }

    const weeks: (Date | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    const monthName = month.toLocaleString("es-ES", {
      month: "long",
      year: "numeric",
    });
    const monthNameCap =
      monthName.charAt(0).toUpperCase() + monthName.slice(1);

    return (
      <div className="rounded-lg bg-white p-4">
        <h3 className="mb-4 text-center text-lg font-bold text-primary">
          {monthNameCap}
        </h3>

        <div className="mb-2 grid grid-cols-7 gap-1 text-center">
          {["L", "M", "MI", "J", "V", "S", "D"].map((day) => (
            <div key={day} className="text-xs font-semibold text-zinc-600">
              {day}
            </div>
          ))}
        </div>

        <div className="space-y-1">
          {weeks.map((week, weekIdx) => (
            <div
              key={weekIdx}
              className="grid grid-cols-7 gap-1"
            >
              {week.map((day, dayIdx) => {
                if (!day) {
                  return (
                    <div key={`empty-${dayIdx}`} className="aspect-square" />
                  );
                }

                const dateStr = formatDate(day);
                const isSelected = selectedDates.includes(dateStr);
                const isFuture = isFutureDate(new Date(day));

                return (
                  <button
                    key={dateStr}
                    onClick={() => isFuture && toggleDate(day)}
                    disabled={!isFuture}
                    className={`aspect-square rounded-lg text-sm font-medium transition ${
                      !isFuture
                        ? "text-zinc-300 bg-zinc-100 cursor-not-allowed"
                        : isSelected
                          ? "bg-cta text-white"
                          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    }`}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const month1 = currentMonth;
  const month2 = getNextMonth(currentMonth);

  return (
    <div onBlur={() => onBlur?.()} tabIndex={0} role="group">
      <label className="mb-2 block text-sm font-semibold text-zinc-700">
        Elige los días de servicio
      </label>

      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={() => setCurrentMonth(getPrevMonth(currentMonth))}
          className="rounded-full p-2 hover:bg-zinc-100"
        >
          ‹
        </button>

        <span className="text-center text-sm font-semibold text-primary">
          Días seleccionados: {selectedDates.length}
        </span>

        <button
          onClick={() => setCurrentMonth(getNextMonth(currentMonth))}
          className="rounded-full p-2 hover:bg-zinc-100"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {renderCalendar(month1)}
        {renderCalendar(month2)}
      </div>

      {hasError && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

