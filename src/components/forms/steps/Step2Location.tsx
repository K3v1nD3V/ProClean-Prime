"use client";

import { MapPin } from "lucide-react";
import { InputField } from "../InputField";
import { TextareaField } from "../TextareaField";
import { FormState } from "@/hooks/useReservationForm";

interface Step2LocationProps {
  form: FormState;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  onFieldChange: (key: string, value: string) => void;
  onFieldBlur: (key: string) => void;
}

export function Step2Location({
  form,
  errors,
  touched,
  onFieldChange,
  onFieldBlur,
}: Step2LocationProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <MapPin className="h-6 w-6 text-cta" />
        <h2 className="text-2xl font-bold text-primary">Ubicación</h2>
      </div>

      <InputField
        name="barrio"
        label="Barrio"
        value={form.barrio}
        onChange={(v) => onFieldChange("barrio", v)}
        onBlur={() => onFieldBlur("barrio")}
        error={errors.barrio}
        touched={!!touched.barrio}
      />

      <InputField
        name="direccion"
        label="Dirección"
        value={form.direccion}
        onChange={(v) => onFieldChange("direccion", v)}
        onBlur={() => onFieldBlur("direccion")}
        error={errors.direccion}
        touched={!!touched.direccion}
      />

      <TextareaField
        name="llegada"
        label="Indicaciones de llegada"
        value={form.llegada}
        onChange={(v) => onFieldChange("llegada", v)}
        onBlur={() => onFieldBlur("llegada")}
        error={errors.llegada}
        touched={!!touched.llegada}
      />

      <InputField
        name="apartamento"
        label="Apartamento / edificio"
        value={form.apartamento}
        onChange={(v) => onFieldChange("apartamento", v)}
        onBlur={() => onFieldBlur("apartamento")}
        error={errors.apartamento}
        touched={!!touched.apartamento}
      />
    </>
  );
}
