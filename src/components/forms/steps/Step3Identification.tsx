"use client";

import { ShieldCheck } from "lucide-react";
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";
import { FormState } from "@/hooks/useReservationForm";

interface Step3IdentificationProps {
  form: FormState;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  onFieldChange: (key: string, value: string) => void;
  onFieldBlur: (key: string) => void;
}

export function Step3Identification({
  form,
  errors,
  touched,
  onFieldChange,
  onFieldBlur,
}: Step3IdentificationProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-cta" />
        <h2 className="text-2xl font-bold text-primary">Identificación</h2>
      </div>

      <SelectField
        name="tipoDocumento"
        label="Tipo de documento"
        value={form.tipoDocumento}
        onChange={(v) => onFieldChange("tipoDocumento", v)}
        onBlur={() => onFieldBlur("tipoDocumento")}
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
        onChange={(v) => onFieldChange("numeroDocumento", v)}
        onBlur={() => onFieldBlur("numeroDocumento")}
        error={errors.numeroDocumento}
        touched={!!touched.numeroDocumento}
      />
    </>
  );
}
