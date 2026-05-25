"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, NotebookPen, X } from "lucide-react";
import WhatsAppButton from "../shared/whatsapp-button";

const navLinks = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Servicios",
    href: "#servicios",
  },
  {
    label: "Compromisos",
    href: "#compromisos",
  },
  {
    label: "Cotización",
    href: "#cotizacion",
  },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappData = {
  phone: WHATSAPP_NUMBER,
  message:
    "Hola, me gustaría agendar un servicio de limpieza.",
};

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-primary backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logoproclean.svg"
            alt="Logo ProClean"
            width={160}
            height={150}
            priority
            className="h-20 w-auto py-2 md:h-20 lg:h-25"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white transition hover:text-cta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppButton data={whatsappData}>
            <Button
              variant="cta"
              className="hidden rounded-full rpx-8 py-5 text-sm font-medium md:inline-flex"
            >
              <NotebookPen className="mr-2 h-5 w-5" />
              ¡Reserva YA!
            </Button>
          </WhatsAppButton>

          <button
            type="button"
            onClick={() => setMobileNavOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileNavOpen ? (
        <div className="md:hidden border-t border-white/10 bg-primary/95 px-4 py-4 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="text-base font-medium text-white transition hover:text-cta"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}