"use client";

import { Mail, User, Sparkles, Calendar, Clock, MapPin, FileText } from "lucide-react";
import { FormState } from "@/hooks/useReservationForm";
import { calculateReservationPrice } from "@/utils/pricing";

interface ReservationSummaryProps {
  form: FormState;
}

export function ReservationSummary({ form }: ReservationSummaryProps) {
    const pricing = calculateReservationPrice(form);
  return (
    <div className="sticky top-8 rounded-[2rem] bg-primary p-8 text-white shadow-2xl">
      <h3 className="text-2xl font-bold">Resumen de tu reserva</h3>

      <div className="mt-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/6 p-2">
              <User className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-sm text-white/70">Nombre</p>
              <p className="font-semibold">
                {form.nombre} {form.apellido}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <Mail className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">Correo</p>
            <p className="font-semibold">{form.correo}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">Plan de servicio</p>
            <p className="font-semibold">{form.planServicio || "No seleccionado"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <Calendar className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">Fechas</p>
            <p className="font-semibold">
              {form.fechas.length > 0 ? `${form.fechas.length} día(s)` : "No seleccionado"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <Clock className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">Hora</p>
            <p className="font-semibold">{form.hora || "No seleccionado"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <MapPin className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">Ubicación</p>
            <p className="font-semibold">
              {form.barrio && form.direccion
                ? `${form.barrio}, ${form.direccion}`
                : "No especificado"}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Documento</span>
            <span className="font-semibold">
              {form.tipoDocumento && form.numeroDocumento
                ? `${form.tipoDocumento} - ${form.numeroDocumento}`
                : "No especificado"}
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-white/70">Celular</span>
            <span className="font-semibold">{form.celular || "No especificado"}</span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-white/70">¿Cómo nos conociste?</span>
            <span className="font-semibold">{form.referido || "No especificado"}</span>
          </div>
        </div>

        {form.requerimientos && (
          <div className="mt-4 rounded-lg bg-white/5 p-3">
            <div className="flex items-start gap-2">
              <FileText className="h-4 w-4 text-white/70 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-white/70">Requerimientos</p>
                <p className="text-sm font-medium">{form.requerimientos}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="flex justify-between">
          <span>Total estimado</span>

          <span className="font-bold">
            $
            {Math.round(
              pricing.finalPrice
            ).toLocaleString("es-CO")}
          </span>
        </div>

        {pricing.totalDiscountAmount > 0 && (
          <div className="mt-2 flex justify-between text-green-300">
            <span>Ahorro</span>

            <span>
              $
              {Math.round(
                pricing.totalDiscountAmount
              ).toLocaleString("es-CO")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
