import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  // MessageCircle,
  Briefcase,
  FileText
  //   InstagramIcon,
  //   FacebookIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/shared/whatsapp-button";

// const services = [
//   "Limpieza de Hogar",
//   "Limpieza de Oficinas",
//   "Limpieza de Edificios",
//   "Aseo Empresarial por Días",
// ];

// const quickLinks = [
//   { label: "Inicio", href: "/" },
//   { label: "Servicios", href: "#servicios" },
//   { label: "Planes", href: "#planes" },
//   { label: "Preguntas Frecuentes", href: "#faq" },
//   { label: "Contacto", href: "#contacto" },
// ];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const HUMAN_TALENT_WHATSAPP_NUMBER = process.env.HUMAN_TALENT_WHATSAPP_NUMBER;

// const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//   WHATSAPP_MESSAGE
// )}`;

const contactData = {
  phone: WHATSAPP_NUMBER,
  message: "Hola, me gustaría agendar un servicio de limpieza.",
};
const pqrData = {
  phone: HUMAN_TALENT_WHATSAPP_NUMBER,
  message:
    "Hola, deseo radicar una PQR (Petición, Queja o Reclamo) relacionada con sus servicios.",
};
const jobData = {
  phone: HUMAN_TALENT_WHATSAPP_NUMBER,
  message:
    "Hola, estoy interesado(a) en trabajar con ustedes. ¿Qué debo hacer?",
};

export default function Footer() {
  return (
    <footer className="mt-24 bg-primary text-white">
      {/* Parte superior */}
<div className="mx-auto max-w-7xl px-4 py-16">
  <div className="grid gap-14 lg:grid-cols-[1fr_420px] lg:items-start">
    
    {/* Branding */}
    <div className="max-w-xl">
      <Link href="/" className="inline-block">
        <Image
          src="/images/logoproclean.svg"
          alt="ProClean Prime"
          width={180}
          height={60}
          className="h-18 w-auto rounded-md"
        />
      </Link>

      <p className="mt-6 text-base leading-8 text-white/75">
        Soluciones profesionales de limpieza para hogares, oficinas
        y empresas.
      </p>

      <p className="mt-4 text-sm leading-7 text-white/60">
        Servicio confiable, flexible y con atención personalizada,
        respaldado por personal capacitado y cumplimiento legal.
      </p>

      {/* Mini highlight */}
      <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
        <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

        <div>
          <p className="text-sm font-semibold text-white">
            Atención disponible 24/7
          </p>

          <p className="text-xs text-white/60">
            Respuesta rápida vía WhatsApp
          </p>
        </div>
      </div>
    </div>

    {/* Contacto */}
    <div
      id="contacto"
      className="rounded-[2rem] border border-white/10 bg-white/3 p-7 backdrop-blur-md"
    >
      <h3 className="text-2xl font-bold text-white">
        Contáctanos
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/60">
        Estamos listos para ayudarte con tu servicio de limpieza.
      </p>

      <div className="mt-8 space-y-5">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
            <MapPin className="h-5 w-5 text-cta" />
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Ubicación
            </p>

            <p className="text-sm text-white/65">
              Medellín, Colombia
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
            <Phone className="h-5 w-5 text-cta" />
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Teléfono
            </p>

            <p className="text-sm text-white/65">
              +57 3046048958
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
            <Mail className="h-5 w-5 text-cta" />
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Correo electrónico
            </p>

            <p className="text-sm text-white/65">
              direccion@pro-clean-prime.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
            <Clock3 className="h-5 w-5 text-cta" />
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Horario
            </p>

            <p className="text-sm text-white/65">
              Atención 24/7
            </p>
          </div>
        </div>
      </div>

      {/* Botones */}
      <div className="mt-8 space-y-3">
        <WhatsAppButton
          data={contactData}
          className="block"
        >
          <Button className="w-full rounded-full bg-cta py-6 text-base font-semibold text-black hover:bg-cta/90">
            Solicitar Cotización
          </Button>
        </WhatsAppButton>

        <WhatsAppButton
          data={pqrData}
          className="block"
        >
          <Button
            variant="outline"
            className="w-full rounded-full border-white/15 bg-white/5 py-6 font-semibold text-white hover:bg-white/10"
          >
            <FileText className="mr-2 h-5 w-5 text-cta" />
            Radicar PQR
          </Button>
        </WhatsAppButton>
      </div>
    </div>
  </div>

  {/* Trabaja con nosotros */}
  <div className="mt-14 rounded-[2rem] border border-white/10 bg-linear-to-r from-white/4 to-white/2 p-7 backdrop-blur-md md:p-8">
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cta/15">
          <Briefcase className="h-7 w-7 text-cta" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            ¿Quieres trabajar con nosotros?
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-7 text-white/65">
            Únete al equipo profesional de ProClean Prime y
            crece con nosotros.
          </p>
        </div>
      </div>

      <WhatsAppButton
        data={jobData}
        className="w-full md:w-auto"
      >
        <Button className="w-full rounded-full bg-cta px-8 py-6 text-black hover:bg-cta/90 md:w-auto">
          Trabaja con nosotros
        </Button>
      </WhatsAppButton>
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
                  viewBox="0 0 538.83 532.44"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white" 
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M343.04,351.45c-4.91-4.5-9.97-13.46-12.59-19.59l-26.98-54.79c-.87-2.45-.76-5.13.29-7.5l25.38-56.88c2.03-5.87,5.41-11.17,9.92-15.44,9.49-8.97,26.47-19.01,42.67,1.97,2.38,3.08,3.63,6.91,3.63,10.8l-5.78,29.22c0,14.81,12,26.81,26.81,26.81l102.69.27c14.02.04,24.12-13.42,20.17-26.87l-25.79-105.44c-9.15-13.81-22.55-22.27-39.12-22.27l-212.08-.54s-18.01-4.65-17.9,59.54c0,0-1.26,46.15-14.8,45.47-12.16-.61,3.15-85.35,9.69-104.39,3.36-9.76,9.64-18.65,26.65-17.95l209.1-.63c3.44-.01,5.2-4.13,2.83-6.62C443.47,60.95,374.14-1.9,263.64.04,129.92,2.4,67.85,91.69,67.85,91.69c0,0-156.03,171.5,5.12,358.18,4.61,5.34,16.64.21,16.12-6.82s.68-82.58.26-110.97c-.65-44.49-6.1-114.38,2.1-115.69,9.76-1.56,9.71,19.15,9.71,25.18v205.15s-6.82,40.14,55.34,65.56c62.16,25.42,82.33,15.5,81.95.55-1.92-76.08-33.4-180.49-16.61-184.16,10.49-.53,12.55,7.87,12.55,30.96,0,76.08,30.11,156.42,41.84,164.4,16.53,11.24,67.47,23.19,164.77-50.28,14.11-10.65,26.63-23.31,36.93-37.67,24.01-33.46,61.62-70,60.89-144.16-.04-4.15-3.44-7.51-7.59-7.51h-118.47c-15.93,0-36.09-.74-28.4,30.04l8.75,19.94c.04.12.07.23.1.35.69,3.53-.93,9.47-1.89,12.86-1.88,6.6-8.02,13.19-19.89,16.1-10.75,2.64-21.34-5.8-28.38-12.25h0Z"
                  />
                </svg>
            </a>
        </div>
      </div>
    </footer>
  );
}

// {/* Parte superior */}
//       <div className="mx-auto max-w-7xl px-4 py-16">
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
//           {/* Logo y descripción */}
//           <div>
//             <Link href="/" className="inline-block">
//               <Image
//                 src="/images/proclean2.png"
//                 alt="ProClean Prime"
//                 width={180}
//                 height={60}
//                 className="h-14 w-auto rounded-md"
//               />
//             </Link>

//             <p className="mt-6 text-sm leading-7 text-white/75">
//               Soluciones profesionales de limpieza para hogares, oficinas y
//               empresas. Servicio confiable, flexible y con atención
//               personalizada.
//             </p>

//             <div className="mt-6 flex items-center gap-3">
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
//               >
//                 <MessageCircle className="h-5 w-5" />
//               </a>

//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
//               >
//                 <MessageCircle className="h-5 w-5" />
//               </a>

//               <a
//                 href={`https://wa.me/${contactData.phone}?text=${encodeURIComponent(contactData.message)}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-cta text-black transition hover:scale-105"
//               >
//                 <MessageCircle className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           {/* Servicios */}
//           <div>
//             <h3 className="text-lg font-semibold">Servicios</h3>

//             <ul className="mt-6 space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <span className="text-sm text-white/75">{service}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Enlaces rápidos */}
//           <div>
//             <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>

//             <ul className="mt-6 space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-white/75 transition hover:text-white"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contacto */}
//           <div id="contacto">
//             <h3 className="text-lg font-semibold">Contacto</h3>

//             <div className="mt-6 space-y-4">
//               <div className="flex items-start gap-3">
//                 <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
//                 <p className="text-sm leading-6 text-white/75">
//                   Medellín, Colombia
//                 </p>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
//                 <p className="text-sm leading-6 text-white/75">
//                   +57 300 123 4567
//                 </p>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
//                 <p className="text-sm leading-6 text-white/75">
//                   direccion@procleanprime.com
//                 </p>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
//                 <p className="text-sm leading-6 text-white/75">
//                   Atención 24/7
//                 </p>
//               </div>
//             </div>

//             <a
//               href={`https://wa.me/${contactData.phone}?text=${encodeURIComponent(contactData.message)}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-6 block"
//             >
//               <Button className="w-full rounded-full bg-cta/90 py-6 font-semibold text-black hover:bg-cta">
//                 Solicitar Cotización
//               </Button>
//             </a>
//               <WhatsAppButton
//                 data={pqrData}
//                 className="mt-3 block"
//               >
//                 <Button
//                   variant="outline"
//                   className="w-full rounded-full border-white/20 bg-white/5 py-6 font-semibold text-white backdrop-blur-sm transition hover:border-[rgb(var(--cta))] hover:bg-white/10 hover:text-white"
//                 >
//                   <FileText className="mr-2 h-5 w-5 text-cta" />
//                   Radicar PQR
//                 </Button>
//               </WhatsAppButton>
//           </div>
//         </div>
//       </div>
