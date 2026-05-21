// AboutServiceSection.tsx

import {
  ShieldCheck,
  BadgeCheck,
  GraduationCap,
  HeartHandshake,
  CalendarPlus,
} from "lucide-react";

import Card from "@/components/shared/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/shared/reveal"; // <-- Importa el componente
import WhatAppButton from "@/components/shared/whatsapp-button";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappData = {
  phone: WHATSAPP_NUMBER,
  message:
    "Hola, me gustaría solicitar una cotización para un servicio de limpieza.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "Seguridad y Confianza",
    description:
      "Cada integrante de nuestro equipo pasa por rigurosos procesos de verificación de antecedentes y validación de referencias laborales para garantizar total tranquilidad.",
  },
  {
    icon: BadgeCheck,
    title: "Seguridad Social al Día",
    description:
      "Todas nuestras auxiliares cuentan con afiliación vigente y prestaciones sociales completas, asegurando cumplimiento legal y respaldo integral.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación Permanente",
    description:
      "Participan de programas continuos de formación para mantener altos estándares de servicio, atención y profesionalismo.",
  },
  {
    icon: HeartHandshake,
    title: "Bienestar y Desarrollo",
    description:
      "Promovemos el crecimiento personal y el equilibrio emocional mediante espacios de bienestar, relajación y desarrollo humano.",
  },
];

export default function AboutServiceSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      {/* Encabezado */}
      <Reveal direction="left">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-1 w-24 rounded-full bg-primary" />

          <span className="m-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestro Compromiso
          </span>

          <div className="relative left-1/2 right-1/2 mx-[-50vw] w-screen bg-linear-to-r from-primary to-primary-lighter py-8">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Un equipo confiable, capacitado y respaldado
            </h2>
          </div>

          <p className="mt-6 text-lg leading-8 text-zinc-600 md:text-xl">
            Detrás de cada servicio hay personas seleccionadas con rigor,
            capacitadas de forma continua y acompañadas en su desarrollo
            profesional y personal.
          </p>
        </div>
      </Reveal>

      {/* Grid de beneficios */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          const direction = index % 2 === 0 ? "left" : "right";

          return (
            <Reveal
              key={pillar.title}
              direction={direction}
              delay={index * 150}
            >
              <Card className="group rounded-[2rem] border-0 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-cta">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-zinc-900">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-600">
                  {pillar.description}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>

      {/* Bloque destacado */}
      <Reveal direction="left" delay={200}>
        <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-primary to-primary-lighter px-8 py-10 text-center text-white shadow-2xl md:px-12">
          <h3 className="text-3xl font-bold md:text-4xl">
            Excelencia en cada visita
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/90">
            Al invertir en el bienestar y la profesionalización de nuestras
            auxiliares, garantizamos un servicio consistente, humano y de la más
            alta calidad para tu empresa.
          </p>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal direction="right" delay={300}>
        <div className="mt-16 flex justify-center">
          <WhatAppButton data={whatsappData}>
            <Button
              variant="cta"
              className="px-8 py-9 text-2xl font-semibold shadow-lg"
              >
              Reserva Tu Servicio
              <CalendarPlus className="ml-2 h-6! w-6!" />
            </Button>
          </WhatAppButton>
        </div>
      </Reveal>
    </section>
  );
}