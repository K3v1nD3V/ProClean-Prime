// src/components/layout/footer.tsx

import Image from "next/image";
import Link from "next/link";
// Cambia los imports por estos:
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  MessageCircle,
//   InstagramIcon,
//   FacebookIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const services = [
  "Limpieza de Hogar",
  "Limpieza de Oficinas",
  "Limpieza de Edificios",
  "Aseo Empresarial por Días",
];

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_NUMBER = "573001234567"; // Reemplaza con el número real
const WHATSAPP_MESSAGE =
  "Hola, me gustaría recibir información sobre sus servicios de limpieza.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function Footer() {
  return (
    <footer className="mt-24 bg-primary text-white">
      {/* Parte superior */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo y descripción */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/proclean2.png"
                alt="ProClean Prime"
                width={180}
                height={60}
                className="h-14 w-auto rounded-md"
              />
            </Link>

            <p className="mt-6 text-sm leading-7 text-white/75">
              Soluciones profesionales de limpieza para hogares, oficinas y
              empresas. Servicio confiable, flexible y con atención
              personalizada.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cta text-black transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold">Servicios</h3>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/75">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div id="contacto">
            <h3 className="text-lg font-semibold">Contacto</h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <p className="text-sm leading-6 text-white/75">
                  Medellín, Colombia
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <p className="text-sm leading-6 text-white/75">
                  +57 300 123 4567
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <p className="text-sm leading-6 text-white/75">
                  direccion@procleanprime.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <p className="text-sm leading-6 text-white/75">
                  Atención 24/7
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block"
            >
              <Button className="w-full rounded-full bg-cta py-6 font-semibold text-black hover:brightness-110">
                Solicitar Cotización
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} ProClean Prime. Todos los derechos
            reservados.
          </p>

            <a
                href="https://wa.me/573001234567?text=Hola%20Kevin,%20vi%20tu%20trabajo%20en%20ProClean%20y%20me%20gustaría%20cotizar%20una%20página%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 opacity-70 transition hover:opacity-100"
                >
                <span className="text-sm text-white/60 group-hover:text-white/80">
                    Desarrollado por
                </span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 527.71 500.43"
                    className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
                    aria-label="Kevin Correa"
                >
                    {/* Círculo principal */}
                    <ellipse
                    cx="259.27"
                    cy="250.21"
                    rx="236.94"
                    ry="250.21"
                    className="fill-white/10 group-hover:fill-white/15"
                    />

                    {/* Firma en color CTA */}
                    <path
                    d="M164.3,128.41c101.73-5.92,89.39,73.71,59.77,142.34-17.36,40.79-39.52,79.62-67.06,114.41-7.32,8.88-24.16,29.81-35.3,30.65-11.45-.17-5.56-23.47-3.72-30.11,6.9-22.55,18.54-43.31,30.81-63.32,20.52-32.82,44.86-63.25,71.16-91.61,30.05-32.5,61.85-63.37,95.95-91.64,17.17-14.11,34.98-27.47,54.2-38.76,15.14-8.53,34.29-18.43,52.15-17.5,11.7,1.33,16.85,13.59,19.04,23.62,3.63,16.37,3.76,33.24,5.17,49.74,.96,10.74,1.81,21.83,5.39,31.98,2.54,7.33,7.75,13.81,16.19,13.01,7.98-.69,15.15-5.1,21.84-9.42,4.55-3.04,8.91-6.39,13.11-9.9,8.45-7.03,16.45-14.63,24.27-22.41l.43,.41c-11.21,12.18-22.96,24.14-36.37,33.97-15.5,11.34-34.29,18.31-43.1-4.27-4.05-10.62-5.26-21.83-6.39-32.97-1.67-16.4-2.07-32.9-5.85-48.86-2.12-8.06-5.36-17.87-14.41-19.01l-1.7-.09-1.92,.09c-59.98,5.65-175.12,122.89-216.97,169.49-18.25,20.52-35.3,42.32-50.32,65.32-11.72,18.54-22.8,37.81-29.67,58.72-1.12,3.52-2.48,8.19-3.08,11.89-7.51,43.56,26.9,1.85,36.49-11.06,19.79-26.34,36.39-55.02,50.98-84.53,9.61-19.72,18.74-39.76,25.63-60.59,14.07-42.18,20.82-93.72-33.97-105.96-10.7-2.44-21.76-3.06-32.72-3.04l-.02-.59h0Z"
                    className="fill-cta"
                    />
                    <path
                    d="M5.86,293.03c8.71,56.15,147.95-74.47,167-90.27,9-7.89,17.97-15.98,27.72-22.94,57.21-42.81,115.82-85.79,179.43-118.61,31.86-15.86,65.65-31.2,101.73-32.68-36.02,1.85-69.58,17.51-101.22,33.67-65.81,34.82-126.01,80.55-185.02,125.71-43.11,36.95-83.77,77.39-132.02,107.87-5.14,3.17-10.4,6.18-15.87,8.87-8.3,3.97-17.22,7.8-26.73,8.05C8.99,313.01,1.92,305.43,0,294.04l5.86-1.01h0Z"
                    className="fill-cta"
                    />
                    <path
                    d="M251.54,204.61c-29.48,45.91-54.97,97.26-58.67,152.44-.75,19.26,1.44,40.48,13.98,55.92,20.98,24.66,60.82,18.31,88.65,10.5,30.95-8.65,57.84-28.35,78.31-52.83,6.89-8.19,13.1-16.97,18.49-26.23,5.35-9.23,10.16-18.98,12.74-29.36,2.17-10.15,1.71-16.42-10.65-12.11-2.55,.86-5.02,1.94-7.46,3.09,2.38-1.26,4.81-2.46,7.33-3.45,3.53-1.23,9.04-3.44,11.67,.46,3.55,7.01-1.81,20.85-4.5,27.85-14.88,34.96-41.26,65.45-74.37,84.36-19.13,10.74-40.57,16.89-62.33,19.36-19.57,2.05-42.12,.27-57.28-13.87-16.09-15.15-19.84-38.69-19.16-59.82,2.76-56.81,30.9-110.75,63.23-156.31h0Z"
                    className="fill-cta"
                />
            </svg>
            </a>
        </div>
      </div>
    </footer>
  );
}