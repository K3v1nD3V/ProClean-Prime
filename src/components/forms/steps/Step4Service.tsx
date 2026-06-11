"use client";

import { Sparkles } from "lucide-react";
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";
import { TextareaField } from "../TextareaField";
import { DateRangeCalendar } from "../DateRangeCalendar";
import { FormState } from "@/hooks/useReservationForm";

interface Step4ServiceProps {
  form: FormState;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  onFieldChange: (key: string, value: string | string[]) => void;
  onFieldBlur: (key: string) => void;
}

export function Step4Service({
  form,
  errors,
  touched,
  onFieldChange,
  onFieldBlur,
}: Step4ServiceProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-cta" />
        <h2 className="text-2xl font-bold text-primary">Servicio</h2>
      </div>

      <SelectField
        name="referido"
        label="¿Cómo nos conociste?"
        value={form.referido}
        onChange={(v) => onFieldChange("referido", v)}
        onBlur={() => onFieldBlur("referido")}
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
        name="plan"
        label="Plan de servicio"
        value={form.planServicio}
        onChange={(v) => onFieldChange("planServicio", v)}
        onBlur={() => onFieldBlur("planServicio")}
        error={errors.planServicio}
        touched={!!touched.planServicio}
        options={[
          "Mensual",
          "Trimestral",
          "Semestral",
          "Anual",
        ]}
      />

      <div className="grid gap-5">
        <DateRangeCalendar
          selectedDates={form.fechas}
          onSelectDates={(dates) => onFieldChange("fechas", dates)}
          onBlur={() => onFieldBlur("fechas")}
          error={errors.fechas}
          touched={!!touched.fechas}
        />

        <InputField
          name="hora"
          label="Hora del servicio"
          type="time"
          value={form.hora}
          onChange={(v) => onFieldChange("hora", v)}
          onBlur={() => onFieldBlur("hora")}
          error={errors.hora}
          touched={!!touched.hora}
        />
      </div>

      <TextareaField
        name="requerimientos"
        label="Requerimientos"
        subtitle="Opcional · Esta información nos ayuda a preparar el servicio de la mejor manera posible."
        value={form.requerimientos}
        onChange={(v) => onFieldChange("requerimientos", v)}
        onBlur={() => onFieldBlur("requerimientos")}
        error={errors.requerimientos}
        touched={!!touched.requerimientos}
      />
    </>
  );
}
