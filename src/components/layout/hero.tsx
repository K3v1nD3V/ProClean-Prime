import { Button } from "@/components/ui/button";
import { CalendarPlus, ArrowDown } from "lucide-react";
import Link from "next/link";
import WhatAppButton from "@/components/shared/whatsapp-button";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappData = {
  phone: WHATSAPP_NUMBER,
  message:
    "Hola, me gustaría agendar un servicio de limpieza.",
};

export default function Hero() {
  return (
   <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero-bg.jpeg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        {/* <span className="mb-6 text-sm font-semibold uppercase tracking-widest text-cta">
          Startup de aseo y limpieza profesional
        </span> */}
         
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          En ProClean Prime, elevamos la limpieza a la excelencia
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
          Somos una empresa dedicada a ofrecer servicios de limpieza integral para oficinas, 
          hogares y edificios, adaptándonos a cada necesidad con un enfoque preciso, 
          profesional y de alta calidad.
        </p>

        <div className="mt-10 flex flex-col gap-4">
            <Link href="/reserva" className="mx-auto">
              <Button variant={"cta"} className="px-8 py-9 text-2xl font-semibold">
                  Reserva Tu Servicio
                  <CalendarPlus 
                      className="ml-2 h-6! w-6!" 
                      />
              </Button>
            </Link>

            <button
                className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-lg animate-[bounce_1.5s_infinite]"
            >
                <ArrowDown className="h-7! w-7!" />
            </button>
        </div>

      </div>
    </section>
  );
}