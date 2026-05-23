"use client";

import { useState } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

import Card from "@/components/shared/card";
import { Button } from "@/components/ui/button";
import Reveal from "../shared/reveal";
import WhatAppButton from "@/components/shared/whatsapp-button";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const whatsappData = {
    phone: WHATSAPP_NUMBER,
    message: "Hola, me gustaría solicitar una cotización para un servicio de limpieza.",
};

const includedServices = [
    "Línea exclusiva de atención",
    "Uniforme característico porclean prime",
    "Aseo profesional de los espacios",
    "Limpieza dedicada a cada necesidad",
    "Servicio de cafetería express",
    "Separación responsable de residuos",
    "Checklist de urgencia",
];

const discounts = [
    "1 a 7 días · Tarifa estándar",
    "8 a 11 días · 2% de descuento",
    "12 a 19 días · 4% de descuento",
    "20 días o más · 6% de descuento",
    "Plan trimestral · 8% adicional",
    "Plan semestral · 10% adicional",
    "Plan anual · 16% adicional",
];

const planes = [
    "Mensual",
    "Trimestral",
    "Semestral",
    "Anual",
]

const basePrice = 178000;

const maxDays = 365;

const DiscountPerDays: Record<string, number> = {
    "1 a 7 días": 0,
    "8 a 11 días": 0.02,
    "12 a 19 días": 0.04,
    "20 días o más": 0.06,
};

const DiscountPerPlan: Record<string, number> = {
    "Mensual": 0,
    "Trimestral": 0.08,
    "Semestral": 0.10,
    "Anual": 0.16,
};

function getDiscountPerDays(days: number): number {
    if (days >= 1 && days <= 7) {
        return DiscountPerDays["1 a 7 días"];
    } else if (days >= 8 && days <= 11) {
        return DiscountPerDays["8 a 11 días"];
    } else if (days >= 12 && days <= 19) {
        return DiscountPerDays["12 a 19 días"];
    } else if (days >= 20) {
        return DiscountPerDays["20 días o más"];
    } else {
        return 0;
    }
}

function getDiscountPerPlan(plan: string): number {
    return DiscountPerPlan[plan] || 0;
}

function calcularCotizacion(days: number, plan: string) {
    const volumeDiscount = getDiscountPerDays(days);
    const planDiscount = getDiscountPerPlan(plan);

    // Precio bruto sin descuentos
    const brutalPrice = basePrice * days;

    // Ahorro por volumen
    const volumeDiscountAmount = brutalPrice * volumeDiscount;

    // Precio después del descuento por volumen
    const priceAfterVolumeDiscount =
        brutalPrice - volumeDiscountAmount;

    // Ahorro por plan
    const planDiscountAmount =
        priceAfterVolumeDiscount * planDiscount;

    // Precio final
    const discountedPrice =
        priceAfterVolumeDiscount - planDiscountAmount;

    // Ahorro total en dinero
    const totalDiscountAmount =
        volumeDiscountAmount + planDiscountAmount;

    // Porcentaje real total
    const totalDiscount =
        brutalPrice > 0
            ? Math.round((totalDiscountAmount / brutalPrice) * 100) / 100
            : 0;
    return {
        // Precios
        brutal: brutalPrice,
        discounted: discountedPrice,

        // Porcentajes de descuento
        volumeDiscount, 
        planDiscount,
        totalDiscount,

        // Ahorros en dinero
        volumeDiscountAmount,
        planDiscountAmount,
        totalDiscountAmount,
    };
}

export default function PricingSection() {
    const [selectedDays, setSelectedDays] = useState(0);
    const [selectedDaysNumberInput, setSelectedDaysNumberInput] = useState("Selecciona un numero de dias");
    const [selectedPlan, setSelectedPlan] = useState(planes[0]);
    const cotizacion = calcularCotizacion(selectedDays, selectedPlan);

    function setSelectedDaysValue(value: number | string) {

        // Convertir
        let numericValue = Number(value);

        // Limitar
        if (numericValue < 0) {
            numericValue = 0;
        } else if (numericValue > maxDays) {
            numericValue = maxDays;
        }

        // Actualizar el estado
        setSelectedDays(Number(numericValue));
        setSelectedDaysNumberInput(String(numericValue));
    }
    
    return (    
        <section id="cotizacion" className="mx-auto max-w-7xl px-4">
            
            <Reveal direction="right" className="text-center relative left-1/2 right-1/2 mx-[-50vw] w-screen bg-linear-to-r from-primary to-primary-lighter py-8 mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white">Calcula en segundos</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-cta sm:text-5xl">
                    Cotiza tu plan por día
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white sm:text-lg">
                    Ajusta los días, elige tu plan y revisa el costo real con descuentos inteligentes.
                </p>
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Columna izquierda */}
                <Reveal direction="left" className="rounded-[2rem] bg-primary px-8 py-10 text-white shadow-2xl md:px-12 md:py-14">
                    <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-cta">
                        Planes Flexibles
                    </span>

                    <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight md:text-5xl">
                        El servicio de limpieza que se adapta a tu empresa
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                        Contrata solo los días que realmente necesitas y aprovecha descuentos
                        automáticos a medida que aumentas tu contratación.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        {[
                            "Jornadas completas de 8 horas",
                            "Tareas personalizadas",
                            "Supervisión continua",
                            "Respaldo legal y profesional",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                                <span className="text-sm leading-6 text-white/90">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-3xl bg-white/5 p-6 backdrop-blur-sm">
                        <p className="text-sm font-semibold uppercase tracking-wider text-cta">
                        Descuentos por volumen
                        </p>

                        <div className="mt-5 space-y-3">
                            {discounts.map((discount) => (
                                <div
                                    key={discount}
                                    className="flex items-center gap-3 text-base font-medium text-white/90"
                                >
                                    <ChevronRight className="h-4 w-4 shrink-0 text-cta" />
                                    <span>{discount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
                {/* Columna derecha */}
                <Reveal direction="right" className="flex flex-col gap-6">
                    {/* Tarjeta principal de precio */}
                    <Card className="overflow-hidden border-0 rounded-[2rem] shadow-2xl">
                        <div className="bg-white p-8">
                            <div className="text-center">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                    Desde
                                </p>

                                <div className="mt-3">
                                    <span className="text-6xl font-extrabold text-primary">
                                        {new Intl.NumberFormat("es-CO", {
                                            style: "currency",
                                            currency: "COP",
                                            minimumFractionDigits: 0,
                                        }).format(basePrice)}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm text-zinc-500">
                                    Valor por jornada · IVA incluido
                                </p>
                            </div>

                            <div className="mt-8 rounded-2xl bg-zinc-50 p-5">
                                <p className="text-sm font-medium text-zinc-600">
                                    Incluye seguridad social, supervisión y garantía de
                                    cumplimiento.
                                </p>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                                    Servicios incluidos
                                </h3>

                                <div className="grid gap-3">
                                    {includedServices.map((service) => (
                                        <div
                                            key={service}
                                            className="flex items-start gap-3 text-sm text-zinc-700"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                                            <span>{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Calculadora de cotización */}
                    <Card className="border-0 rounded-[2rem] bg-white p-6 shadow-lg">
                        <div className="rounded-2xl bg-linear-to-r from-primary to-primary-lighter px-5 py-4 text-center">
                            <h4 className="text-lg font-semibold text-white">
                                Cotiza tu servicio en segundos
                            </h4>
                        </div>

                        <div className="mt-6 space-y-6">
                            {/* Días */}
                            <div>
                                <label className="mb-3 block text-lg font-semibold text-zinc-800">
                                    ¿Cuántos días?
                                </label>

                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="0"
                                        max={maxDays}
                                        value={selectedDays}
                                        onChange={(event) => setSelectedDaysValue(Number(event.target.value))}
                                        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-zinc-200 accent-cta"
                                    />

                                    <span className="min-w-8 text-right text-3xl font-bold text-zinc-700">
                                        {selectedDays}
                                    </span>
                                </div>
                            </div>

                            {/* Input de días */}
                            <div>
                                <input
                                    type="number"
                                    placeholder="Ingresa días de servicio"
                                    min="0"
                                    max={maxDays}
                                    value={selectedDaysNumberInput}
                                    onChange={(e) => {
                                        setSelectedDaysValue(e.target.value);
                                    }}
                                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-base outline-none transition focus:border-cta focus:ring-2 focus:ring-[rgb(var(--cta))]/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>

                            {/* Planes */}
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                {planes.map((plan) => (
                                    <label
                                        key={plan}
                                        className="flex items-center gap-3 text-lg text-zinc-700"
                                    >
                                        <input
                                            type="radio"
                                            name="plan"
                                            value={plan}
                                            checked={selectedPlan === plan}
                                            onChange={() => setSelectedPlan(plan)}
                                            className="h-5 w-5 border-zinc-300 accent-cta"
                                        />
                                        <span>{plan}</span>
                                    </label>
                                ))}
                            </div>

                            {/* Texto descriptivo */}
                            <p className="text-base leading-8 text-zinc-500">
                                Elige un plan de continuidad y accede a beneficios adicionales.
                            </p>

                            {/* Moneda */}
                            <div className="text-right text-base text-zinc-500">
                                Moneda: <span className="font-semibold text-zinc-700">COP</span>
                            </div>

                            {selectedDays > 0 && (
                                <div className="flex gap-y-5 flex-col rounded-lg border p-4">
                                    {/* Total */}
                                    <div className=" flex justify-between">
                                        <strong className="text-lg font-semibold text-zinc-800">
                                            Valor TOTAL base: 
                                        </strong>
                                        <span className="font-bold text-green-900">
                                            {new Intl.NumberFormat("es-CO", {
                                                style: "currency",
                                                currency: "COP",
                                                minimumFractionDigits: 0,
                                            }).format(Math.round(cotizacion.brutal))}
                                        </span>{" "}
                                    </div>
                                    {/* Ahorro por volumen */}
                                    <div className=" flex justify-between">
                                        <strong className="text-lg font-semibold text-zinc-800">
                                            Ahorro por volumen: 
                                        </strong>
                                        <span className="font-bold text-green-900">
                                            {new Intl.NumberFormat("es-CO", {
                                                style: "currency",
                                                currency: "COP",
                                                minimumFractionDigits: 0,
                                            }).format(Math.round(cotizacion.volumeDiscountAmount))}
                                        </span>{" "}
                                    </div>
                                    {/* Ahorro por plan */}
                                    <div className=" flex justify-between">
                                        <strong className="text-lg font-semibold text-zinc-800">
                                            Ahorro por continuidad: 
                                        </strong>
                                        <span className="font-bold text-green-900">
                                            {new Intl.NumberFormat("es-CO", {
                                                style: "currency",
                                                currency: "COP",
                                                minimumFractionDigits: 0,
                                            }).format(Math.round(cotizacion.planDiscountAmount))}
                                        </span>{" "}
                                    </div>
                                    {/* Total descuento */}
                                    <div className=" flex justify-between">
                                        <strong className="text-lg font-semibold text-zinc-800">
                                            Descuento total: 
                                        </strong>
                                        <span className="font-bold text-green-900">
                                            {Math.round(cotizacion.totalDiscount * 100) + "%"}
                                        </span>
                                    </div>
                                    {/* Total con descuento */}
                                    <div className="mt-4 flex justify-between rounded-lg bg-green-50 p-4 text-center text-lg font-medium text-green-700">
                                        <strong>Total con descuento:</strong>
                                        <span className="font-bold text-green-900">
                                            {new Intl.NumberFormat("es-CO", {
                                                style: "currency",
                                                currency: "COP",
                                                minimumFractionDigits: 0,
                                            }).format(Math.round(cotizacion.discounted))}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Card>

                    {/* CTA */}
                    <WhatAppButton data={whatsappData}>
                        <Button
                        variant={"cta"}
                        className="w-full py-7 text-lg font-bold text-black shadow-lg">
                            Solicitar Cotización
                        </Button>
                    </WhatAppButton>
                </Reveal>
            </div>
        </section>
    );
}