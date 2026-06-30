"use client";

import {
  Mail,
  User,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  FileText,
  Receipt,
} from "lucide-react";

import { FormState } from "@/hooks/useReservationForm";
import { calculateReservationPrice } from "@/utils/pricing";

interface ReservationSummaryProps {
  form: FormState;
}

export function ReservationSummary({
  form,
}: ReservationSummaryProps) {
  const pricing = calculateReservationPrice(form);

  return (
    <div className="sticky top-8 rounded-[2rem] bg-primary p-8 text-white shadow-2xl">
      <h3 className="text-2xl font-bold">
        Resumen de tu reserva
      </h3>

      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <User className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">
              Cliente
            </p>

            <p className="font-semibold">
              {form.nombre || form.apellido
                ? `${form.nombre} ${form.apellido}`
                : "Pendiente"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <Mail className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">
              Correo
            </p>

            <p className="font-semibold">
              {form.correo || "Pendiente"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">
              Servicio
            </p>

            <p className="font-semibold">
              {form.planServicio || "Pendiente"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <Calendar className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">
              Días seleccionados
            </p>

            <p className="font-semibold">
              {form.fechas.length > 0
                ? `${form.fechas.length} día(s)`
                : "Pendiente"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <Clock className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">
              Hora
            </p>

            <p className="font-semibold">
              {form.hora || "Pendiente"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-full bg-white/6 p-2">
            <MapPin className="h-5 w-5 text-white" />
          </div>

          <div>
            <p className="text-sm text-white/70">
              Dirección
            </p>

            <p className="font-semibold">
              {form.barrio && form.direccion
                ? `${form.barrio}, ${form.direccion}`
                : "Pendiente"}
            </p>
          </div>
        </div>

        {form.requerimientos && (
          <div className="rounded-xl bg-white/5 p-4">
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />

              <div>
                <p className="text-xs uppercase tracking-wide text-white/60">
                  Requerimientos
                </p>

                <p className="mt-1 text-sm">
                  {form.requerimientos}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-2xl bg-white/5 p-5">
          <div className="mb-5 flex items-center gap-2">
            <Receipt className="h-5 w-5 text-cta" />

            <h4 className="font-semibold">
              Cotización
            </h4>
          </div>

          {form.fechas.length === 0 ? (
            <div className="rounded-xl border border-dashed border-white/15 p-5 text-center text-sm leading-6 text-white/60">
              Selecciona las fechas y el plan de servicio para
              calcular automáticamente el valor de tu reserva.
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">
                  Valor base
                </span>

                <span className="font-medium">
                  $
                  {Math.round(
                    pricing.basePrice
                  ).toLocaleString("es-CO")}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-white/70">
                  Descuento por días
                </span>

                <span className="font-medium text-green-300">
                  -$
                  {Math.round(
                    pricing.volumeDiscountAmount
                  ).toLocaleString("es-CO")}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-white/70">
                  Descuento por plan
                </span>

                <span className="font-medium text-green-300">
                  -$
                  {Math.round(
                    pricing.planDiscountAmount
                  ).toLocaleString("es-CO")}
                </span>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total estimado</span>

                  <span className="text-cta">
                    $
                    {Math.round(
                      pricing.finalPrice
                    ).toLocaleString("es-CO")}
                  </span>
                </div>

                {pricing.totalDiscountAmount > 0 && (
                  <div className="mt-3 flex items-center justify-between text-sm text-green-300">
                    <span>
                      Ahorras
                    </span>

                    <span className="font-semibold">
                      $
                      {Math.round(
                        pricing.totalDiscountAmount
                      ).toLocaleString("es-CO")}
                      {" "}
                      ({Math.round(
                        pricing.totalDiscount * 100
                      )}
                      %)
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}