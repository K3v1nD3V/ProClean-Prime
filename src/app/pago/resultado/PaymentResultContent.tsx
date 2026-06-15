"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  XCircle,
  Clock3,
  ArrowLeft,
  CalendarCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { getPaymentOrder } from "@/api/bold";

interface PaymentOrder {
  reference: string;
  status: string;
  customerName: string;
  email: string;
  phone: string;
  planServicio: string;
  fechas: string[];
  createdAt: string;
}

export default function PaymentResultContent() {
  const searchParams = useSearchParams();

  const orderId =
    searchParams.get("bold-order-id");

  const queryStatus =
    searchParams.get("bold-tx-status");

  const [order, setOrder] =
    useState<PaymentOrder | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (!orderId) return;

    async function loadOrder(reference: string) {
        try {
            const data = await getPaymentOrder(reference);
            setOrder(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    void loadOrder(orderId);
  }, [orderId]);

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-primary">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <p className="text-lg font-medium text-primary">
            Cargando información del pago...
          </p>
        </div>
      </section>
    );
  }

  const realStatus =
    order?.status ??
    queryStatus ??
    "PENDING";

  const normalizedStatus =
    realStatus.toLowerCase();

  const isApproved =
    normalizedStatus === "approved";

  const isRejected =
    normalizedStatus === "failed" ||
    normalizedStatus === "rejected";

  const isPending =
    normalizedStatus === "pending";

  const paymentState = isApproved
    ? {
        icon: (
          <CheckCircle2 className="h-20 w-20 text-green-500" />
        ),
        title: "Pago aprobado",
        description:
          "Tu pago fue procesado correctamente. Nuestro equipo ya recibió la confirmación y comenzará a gestionar tu servicio.",
        badge:
          "bg-green-500/15 text-green-600 border-green-500/20",
      }
    : isRejected
      ? {
          icon: (
            <XCircle className="h-20 w-20 text-red-500" />
          ),
          title: "Pago rechazado",
          description:
            "No fue posible procesar el pago. Puedes intentar nuevamente utilizando otro método de pago.",
          badge:
            "bg-red-500/15 text-red-600 border-red-500/20",
        }
      : {
          icon: (
            <Clock3 className="h-20 w-20 text-amber-500" />
          ),
          title: "Pago pendiente",
          description:
            "Estamos esperando la confirmación de la entidad financiera. Te notificaremos cuando el pago sea validado.",
          badge:
            "bg-amber-500/15 text-amber-600 border-amber-500/20",
        };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-4 py-32">
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cta/20 blur-[140px]" />

      <div className="relative z-10 w-full max-w-3xl">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <div className="bg-linear-to-r from-primary via-primary-lighter to-primary px-8 py-10 text-center">
            <div className="flex justify-center">
              {paymentState.icon}
            </div>

            <h1 className="mt-6 text-4xl font-black text-white">
              {paymentState.title}
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-zinc-300">
              {paymentState.description}
            </p>
          </div>

          <div className="space-y-8 p-8 md:p-10">
            <div
              className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold ${paymentState.badge}`}
            >
              {realStatus}
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h2 className="mb-4 text-lg font-bold text-primary">
                Detalles de la transacción
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <span className="text-zinc-500">
                    Referencia
                  </span>

                  <span className="font-semibold text-zinc-900">
                    {orderId ?? "No disponible"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-200 py-3">
                  <span className="text-zinc-500">
                    Cliente
                  </span>

                  <span className="font-semibold text-zinc-900">
                    {order?.customerName ??
                      "No disponible"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-200 py-3">
                  <span className="text-zinc-500">
                    Servicio
                  </span>

                  <span className="font-semibold text-zinc-900">
                    {order?.planServicio ??
                      "No disponible"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-zinc-200 py-3">
                  <span className="text-zinc-500">
                    Días contratados
                  </span>

                  <span className="font-semibold text-zinc-900">
                    {order?.fechas?.length ?? 0}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">
                    Estado
                  </span>

                  <span className="font-semibold capitalize text-zinc-900">
                    {realStatus}
                  </span>
                </div>
              </div>
            </div>

            {isApproved && (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <div className="flex gap-4">
                  <CalendarCheck className="mt-1 h-6 w-6 text-green-600" />

                  <div>
                    <h3 className="font-bold text-green-800">
                      ¿Qué sigue ahora?
                    </h3>

                    <p className="mt-2 text-sm text-green-700">
                      Nuestro equipo revisará tu
                      solicitud y se pondrá en
                      contacto contigo para
                      coordinar los detalles del
                      servicio.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {isPending && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm text-amber-700">
                  Tu pago aún está siendo validado
                  por la entidad financiera.
                </p>
              </div>
            )}

            {isRejected && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <p className="text-sm text-red-700">
                  El pago fue rechazado. Puedes
                  intentar nuevamente desde el
                  formulario de reserva.
                </p>
              </div>
            )}

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full py-6"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Volver al inicio
                </Button>
              </Link>

              {isRejected && (
                <Link
                  href="/reserva"
                  className="flex-1"
                >
                  <Button
                    variant="cta"
                    className="w-full py-6"
                  >
                    Intentar nuevamente
                  </Button>
                </Link>
              )}

              {isApproved && (
                <Link
                  href="/reserva"
                  className="flex-1"
                >
                  <Button
                    variant="cta"
                    className="w-full py-6"
                  >
                    Reservar otro servicio
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}