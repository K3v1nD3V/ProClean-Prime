"use client";

import { User } from "lucide-react";
import { InputField } from "../InputField";
import { FormState } from "@/hooks/useReservationForm";

interface Step1PersonalInfoProps {
  form: FormState;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  onFieldChange: (key: string, value: string) => void;
  onFieldBlur: (key: string) => void;
}

export function Step1PersonalInfo({
  form,
  errors,
  touched,
  onFieldChange,
  onFieldBlur,
}: Step1PersonalInfoProps) {
  return (
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
          onChange={(v) => onFieldChange("nombre", v)}
          onBlur={() => onFieldBlur("nombre")}
          error={errors.nombre}
          touched={!!touched.nombre}
        />

        <InputField
          name="apellido"
          label="Apellido"
          value={form.apellido}
          onChange={(v) => onFieldChange("apellido", v)}
          onBlur={() => onFieldBlur("apellido")}
          error={errors.apellido}
          touched={!!touched.apellido}
        />
      </div>

      <InputField
        name="correo"
        label="Correo electrónico"
        value={form.correo}
        onChange={(v) => onFieldChange("correo", v)}
        onBlur={() => onFieldBlur("correo")}
        error={errors.correo}
        touched={!!touched.correo}
      />

      <InputField
        name="celular"
        label="Celular"
        value={form.celular}
        onChange={(v) => onFieldChange("celular", v)}
        onBlur={() => onFieldBlur("celular")}
        error={errors.celular}
        touched={!!touched.celular}
      />
    </>
  );
}
