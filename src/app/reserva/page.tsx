"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  User,
  MapPin,
  ShieldCheck,
  Sparkles,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const steps = [
  "Información",
  "Ubicación",
  "Identificación",
  "Servicio",
  "Finalizar",
];

export default function ReservaPage() {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
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

    solicitudEspecial: "",
  });

  function updateField(key: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const progress = useMemo(() => {
    return ((step + 1) / steps.length) * 100;
  }, [step]);

  return (
    <section className="bg-zinc-100 px-4 pt-24 pb-10">
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
                      label="Nombre"
                      value={form.nombre}
                      onChange={(v) => updateField("nombre", v)}
                    />

                    <InputField
                      label="Apellido"
                      value={form.apellido}
                      onChange={(v) => updateField("apellido", v)}
                    />
                  </div>

                  <InputField
                    label="Correo electrónico"
                    value={form.correo}
                    onChange={(v) => updateField("correo", v)}
                  />

                  <InputField
                    label="Celular"
                    value={form.celular}
                    onChange={(v) => updateField("celular", v)}
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
                    label="Barrio"
                    value={form.barrio}
                    onChange={(v) => updateField("barrio", v)}
                  />

                  <InputField
                    label="Dirección"
                    value={form.direccion}
                    onChange={(v) => updateField("direccion", v)}
                  />

                  <TextareaField
                    label="Indicaciones de llegada"
                    value={form.llegada}
                    onChange={(v) => updateField("llegada", v)}
                  />

                  <InputField
                    label="Apartamento / edificio"
                    value={form.apartamento}
                    onChange={(v) => updateField("apartamento", v)}
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
                    label="Tipo de documento"
                    value={form.tipoDocumento}
                    onChange={(v) => updateField("tipoDocumento", v)}
                    options={[
                      "Cédula de ciudadanía",
                      "NIT",
                      "Cédula de extranjería",
                      "Otro",
                    ]}
                  />

                  <InputField
                    label="Número de documento"
                    value={form.numeroDocumento}
                    onChange={(v) =>
                      updateField("numeroDocumento", v)
                    }
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
                    label="¿Cómo nos conociste?"
                    value={form.referido}
                    onChange={(v) => updateField("referido", v)}
                    options={[
                      "Redes sociales",
                      "Página web",
                      "Referido",
                      "Otro",
                    ]}
                  />

                  <SelectField
                    label="Tipo de servicio"
                    value={form.tipoServicio}
                    onChange={(v) =>
                      updateField("tipoServicio", v)
                    }
                    options={[
                      "Medio tiempo",
                      "Tiempo completo",
                      "Fija",
                      "Otro",
                    ]}
                  />

                  <SelectField
                    label="Requerimientos"
                    value={form.requerimientos}
                    onChange={(v) =>
                      updateField("requerimientos", v)
                    }
                    options={[
                      "Sólo aseo general",
                      "Sólo cocinar",
                      "Sólo planchar",
                      "Aseo y cocina",
                      "Aseo y planchar",
                      "Aseo, cocina y plancha",
                      "Otro",
                    ]}
                  />
                </>
              )}

              {step === 4 && (
                <>
                  <div className="flex items-center gap-3">
                    <ClipboardList className="h-6 w-6 text-cta" />
                    <h2 className="text-2xl font-bold text-primary">
                      Solicitudes especiales
                    </h2>
                  </div>

                  <TextareaField
                    label="Observaciones"
                    value={form.solicitudEspecial}
                    onChange={(v) =>
                      updateField("solicitudEspecial", v)
                    }
                  />

                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 text-emerald-600" />

                      <div>
                        <h3 className="font-bold text-emerald-800">
                          Todo listo para reservar
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-emerald-700">
                          Nuestro equipo revisará tu solicitud y se
                          pondrá en contacto contigo.
                        </p>
                      </div>
                    </div>
                  </div>
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
                onClick={() => {
                  if (step < steps.length - 1) {
                    setStep((prev) => prev + 1);
                  }
                }}
                className="rounded-full bg-cta px-8 font-bold text-black hover:bg-cta/90"
              >
                {step === steps.length - 1
                  ? "Finalizar reserva"
                  : "Continuar"}

                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* RESUMEN */}
          <div className="space-y-6">
            <div className="sticky top-8 rounded-[2rem] bg-primary p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold">
                Resumen de tu reserva
              </h3>

              <div className="mt-8 space-y-5">
                <SummaryItem
                  label="Cliente"
                  value={`${form.nombre} ${form.apellido}`}
                />

                <SummaryItem
                  label="Correo"
                  value={form.correo}
                />

                <SummaryItem
                  label="Servicio"
                  value={form.tipoServicio}
                />

                <SummaryItem
                  label="Requerimientos"
                  value={form.requerimientos}
                />

                <SummaryItem
                  label="Ubicación"
                  value={`${form.barrio} · ${form.direccion}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-zinc-700">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition focus:border-cta focus:ring-4 focus:ring-yellow-200"
      />
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-zinc-700">
        {label}
      </label>

      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-cta focus:ring-4 focus:ring-yellow-200"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-zinc-700">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none transition focus:border-cta focus:ring-4 focus:ring-yellow-200"
      >
        <option value="">Selecciona una opción</option>

        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-4">
      <p className="text-xs uppercase tracking-wider text-white/50">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-white">
        {value || "Pendiente"}
      </p>
    </div>
  );
}